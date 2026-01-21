# Step-by-Step Deployment Guide

Follow these exact steps to get Videeo.ai live on Vercel and Supabase.

## Part 1: Supabase Setup (Database & Storage) - Run this in your Supabase SQL Editor (Paste RAW code only, no backticks)

1.  **Create Project**: Go to [Supabase](https://supabase.com) and create a new project.
2.  **Initialize Database**: 
    - Open the **SQL Editor** in the side navigation.
    - **Note**: Paste ONLY the raw SQL code. DO NOT include the ` ```sql ` backticks.
    - Paste and run the following:
      ```sql
      create table projects (
        id uuid primary key default uuid_generate_v4(),
        created_at timestamp with time zone default timezone('utc'::text, now()) not null,
        prompt text,
        video_url text,
        script text,
        aspect_ratio text,
        synclabs_job_id text,
        status text default 'PROCESSING'
      );
      ```
3.  **Configure Storage**:
    - Go to **Storage** -> **New Bucket**.
    - Set the name to `videos`.
    - **Crucial**: Set the bucket to **Public** toggle so videos can be viewed in the app.
4.  **Get Keys**:
    - Go to **Project Settings** -> **API**.
    - You will need:
        - `Project URL`
        - `anon` (Public) key -> for Frontend
        - `service_role` (Secret) key -> for Backend (to bypass RLS)

---

## Part 2: Vercel Setup (Monorepo Deployment)

1.  **Connect Repo**:
    - Go to [Vercel](https://vercel.com) -> **New Project**.
    - Import your GitHub repository.
2.  **Project Configuration**:
    - **Framework Preset**: Select `Next.js`.
    - **Root Directory**: Select the root folder of the repository (where `vercel.json` is located).
3.  **Environment Variables**:
    - Add the following keys in Vercel **Settings** -> **Environment Variables**:
      
      **Backend Keys:**
      - `OPENAI_API_KEY`: Your OpenAI key.
      - `ELEVENLABS_API_KEY`: Your ElevenLabs key.
      - `REPLICATE_API_TOKEN`: Your Replicate token.
      - `SYNCLABS_API_KEY`: Your SyncLabs key.
      - `SUPABASE_URL`: Your Supabase Project URL.
      - `SUPABASE_KEY`: Your Supabase **service_role** key.
      
      **Frontend Keys:**
      - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase Project URL.
      - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase **anon** key.

4.  **Deploy**:
    - Hit **Deploy**. Vercel will build the Next.js frontend and the FastAPI serverless functions.

### Quick Git Push Commands
Run these in your terminal to push specifically to your `contact474` account:
```bash
git push -u origin main
```

1.  **API Check**: Open `https://your-domain.vercel.app/api` in your browser. You should see `{"message":"Videeo.ai API is running"}`.
2.  **Dashboard**: Go to `/dashboard`, type a prompt, and watch the networking tab to see the `/generate-video` call succeed.

