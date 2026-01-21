"use client"

import { useState, useEffect } from 'react'
import { Send, Loader2, Play, Video, ChevronLeft, Sparkles, Clock } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

interface Project {
    id: string
    prompt: string
    video_url: string | null
    script: string | null
    created_at: string
}

export default function Dashboard() {
    const [prompt, setPrompt] = useState('')
    const [loading, setLoading] = useState(false)
    const [videoUrl, setVideoUrl] = useState<string | null>(null)
    const [script, setScript] = useState<string | null>(null)
    const [projects, setProjects] = useState<Project[]>([])

    const fetchProjects = async () => {
        const { data } = await supabase
            .from('projects')
            .select('*')
            .order('created_at', { ascending: false })

        if (data) setProjects(data)
    }

    useEffect(() => {
        fetchProjects()
    }, [])

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!prompt.trim()) return

        setLoading(true)
        setVideoUrl(null)
        setScript(null)

        try {
            const response = await fetch('/api/generate-video', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt, aspect_ratio: "9:16" }),
            })

            const data = await response.json()
            if (data.status === 'success') {
                const syncJobId = data.synclabs_job_id
                setVideoUrl(data.video_url) // Show base video first
                setScript(data.script)

                if (syncJobId) {
                    // Poll for lip-sync completion
                    pollStatus(syncJobId)
                }
                fetchProjects()
            } else {
                setLoading(false)
                alert('Generation failed: ' + data.detail)
            }
        } catch (error) {
            setLoading(false)
            console.error('Error:', error)
            alert('Could not connect to backend. Make sure it is running on port 8000.')
        }
    }

    const pollStatus = async (syncJobId: string) => {
        let completed = false
        while (!completed) {
            await new Promise(r => setTimeout(r, 5000))
            try {
                const res = await fetch(`/api/video-status/${syncJobId}`)
                const statusData = await res.json()

                if (statusData.status === 'COMPLETED') {
                    setVideoUrl(statusData.video_url)
                    completed = true
                    setLoading(false)
                    fetchProjects()
                } else if (statusData.status === 'FAILED') {
                    completed = true
                    setLoading(false)
                }
            } catch (err) {
                console.error('Polling error:', err)
                completed = true
                setLoading(false)
            }
        }
    }

    const selectProject = (p: Project) => {
        setVideoUrl(p.video_url)
        setScript(p.script)
        setPrompt(p.prompt)
    }

    return (
        <div className="flex h-screen bg-[#050505] text-white">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-900 flex flex-col p-4 hidden md:flex">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-8 px-2">
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                    <span>Videeo.ai</span>
                </Link>
                <button
                    onClick={() => { setVideoUrl(null); setScript(null); setPrompt(''); }}
                    className="flex items-center gap-2 w-full p-3 rounded-lg bg-gray-900 border border-gray-800 text-sm font-semibold hover:bg-gray-800 transition-colors mb-8"
                >
                    <Sparkles className="w-4 h-4 text-yellow-400" />
                    New Project
                </button>

                <div className="flex-1 overflow-y-auto">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-2 mb-4">Recent Projects</h4>
                    <div className="space-y-1">
                        {projects.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => selectProject(p)}
                                className="w-full text-left p-3 rounded-xl hover:bg-gray-900 transition-colors group flex flex-col gap-1 border border-transparent hover:border-gray-800"
                            >
                                <span className="text-sm font-medium truncate group-hover:text-yellow-400 transition-colors">{p.prompt}</span>
                                <span className="text-[10px] text-gray-600 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {new Date(p.created_at).toLocaleDateString()}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
                {/* Header */}
                <header className="h-16 border-b border-gray-900 flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                    <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Video Studio</h2>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500" />
                    </div>
                </header>

                {/* Studio Area */}
                <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center">
                    {!videoUrl && !loading ? (
                        <div className="max-w-md text-center">
                            <div className="w-20 h-20 bg-gray-900 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-gray-800">
                                <Video className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Ready to create?</h3>
                            <p className="text-gray-400">Describe your video below and let AI handle the rest.</p>
                        </div>
                    ) : loading ? (
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative">
                                <div className="w-24 h-24 border-4 border-yellow-400/20 rounded-full animate-pulse" />
                                <Loader2 className="w-8 h-8 text-yellow-400 animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                            <p className="text-lg font-medium animate-pulse text-yellow-400">Generating your masterpiece...</p>
                            <p className="text-sm text-gray-500">Writing script and generating voice...</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl animate-fade-in">
                            {/* Preview */}
                            <div className="flex flex-col gap-4">
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Preview</h4>
                                <div className="aspect-[9/16] max-h-[600px] bg-gray-900 rounded-[2.5rem] overflow-hidden border-[8px] border-gray-800 shadow-2xl relative group">
                                    <video
                                        src={videoUrl || ''}
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                    />
                                    {!videoUrl && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Play className="w-12 h-12 text-white opacity-20" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">AI Generated Script</h4>
                                    <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-3xl text-gray-300 leading-relaxed max-h-[400px] overflow-y-auto">
                                        {script}
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="flex-1 bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg active:scale-95">
                                        Download MP4
                                    </button>
                                    <button className="flex-1 bg-gray-900 text-white py-4 rounded-lg font-semibold border border-gray-800 hover:bg-gray-800 transition-colors active:scale-95">
                                        Edit Script
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Input Dock */}
                <div className="p-8 pt-0 w-full max-w-4xl mx-auto">
                    <form
                        onSubmit={handleGenerate}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity" />
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="E.g. Create a high-energy 60s ad for a luxury watch brand"
                            className="w-full bg-gray-900 border border-gray-800 rounded-2xl py-6 pl-8 pr-20 text-lg outline-none focus:border-yellow-400/50 transition-all relative z-10"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading || !prompt.trim()}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 disabled:opacity-50 disabled:hover:bg-yellow-400 transition-all z-20"
                        >
                            <Send className="w-6 h-6" />
                        </button>
                    </form>
                    <div className="flex gap-4 mt-4 justify-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                        <span>9:16 AR</span>
                        <span>•</span>
                        <span>4K Quality</span>
                        <span>•</span>
                        <span>AI Voice Sync</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
