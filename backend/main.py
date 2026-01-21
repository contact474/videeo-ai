import os
import uuid
from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from engine import generate_script, generate_voice, generate_avatar, generate_lipsync, get_lipsync_status
from editor import assemble_video
from storage import upload_to_supabase
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class VideoRequest(BaseModel):
    prompt: str
    aspect_ratio: str = "9:16"

@app.get("/")
async def root():
    return {"message": "Videeo.ai API is running"}

@app.post("/generate-video")
async def generate_video(request: VideoRequest):
    try:
        job_id = str(uuid.uuid4())
        temp_dir = f"temp/{job_id}"
        os.makedirs(temp_dir, exist_ok=True)

        # 1. Script
        script_data = generate_script(request.prompt)
        script_text = script_data.get("script_text")
        image_prompt = script_data.get("image_prompt")

        # 2. Voice
        audio_path = os.path.join(temp_dir, "audio.mp3")
        generate_voice(script_text, audio_path)
        audio_url = upload_to_supabase(audio_path, f"{job_id}_audio.mp3")

        # 3. Avatar & Base Video
        avatar_path = os.path.join(temp_dir, "avatar.png")
        generate_avatar(image_prompt, avatar_path)
        
        # Create a temp video from avatar for SyncLabs
        base_video_path = os.path.join(temp_dir, "base_video.mp4")
        assemble_video(avatar_path, audio_path, base_video_path, request.aspect_ratio)
        video_url = upload_to_supabase(base_video_path, f"{job_id}_base.mp4")

        # 4. Initiate Lip-sync (Real)
        # This returns the SyncLabs job_id
        synclabs_job_id = generate_lipsync(audio_url, video_url)
        
        # 5. Database (Supabase) - Initial Entry
        try:
            from storage import supabase
            supabase.table('projects').insert({
                'id': job_id,
                'prompt': request.prompt,
                'video_url': video_url, # Fallback to base video initially
                'script': script_text,
                'aspect_ratio': request.aspect_ratio,
                'synclabs_job_id': synclabs_job_id,
                'status': 'PROCESSING'
            }).execute()
        except Exception as db_err:
            print(f"Database insertion failed: {db_err}")

        return {
            "status": "success",
            "job_id": job_id,
            "synclabs_job_id": synclabs_job_id,
            "video_url": video_url, # Return base video immediately
            "script": script_text
        }

    except Exception as e:
        print(f"Error generating video: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/video-status/{synclabs_job_id}")
async def video_status(synclabs_job_id: str):
    try:
        status_data = get_lipsync_status(synclabs_job_id)
        status = status_data.get("status")
        video_url = status_data.get("videoUrl")

        if status == "COMPLETED":
            # Update DB with final URL
            from storage import supabase
            supabase.table('projects').update({
                'video_url': video_url,
                'status': 'COMPLETED'
            }).eq('synclabs_job_id', synclabs_job_id).execute()

        return {
            "status": status,
            "video_url": video_url
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    except Exception as e:
        print(f"Error generating video: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
