"use client"

import Link from 'next/link'
import { Play, Mic, Video, Layers, CheckCircle } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                <Play className="w-5 h-5 text-black fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight">VidEEo.ai</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
              <Link href="#" className="hover:text-white transition-colors">Product</Link>
              <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
              <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-white transition-colors">Enterprise</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-white/60 hover:text-white">Log In</Link>
            <Link href="/dashboard" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-all active:scale-95">
              Try VidEEo.ai
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Overlay Effect */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center brightness-[0.3]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-yellow-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            Gen-3 Model Live
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            One prompt to a<br />
            <span className="text-yellow-500 tracking-[-0.05em]">perfect video.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 font-medium mb-12 leading-relaxed">
            The fastest way for businesses to turn ideas into viral short-form videos. No editing needed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-[220px] bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center">
              Start Creating Free
            </Link>
            <button className="w-[220px] bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Watch Demo <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase mb-8">Trusted by Innovative Teams</p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 grayscale opacity-40 hover:opacity-100 transition-opacity">
            <span className="text-xl font-bold">ACME Corp</span>
            <span className="text-xl font-bold italic">Nebula</span>
            <span className="text-xl font-bold tracking-widest">TESSERACT</span>
            <span className="text-xl font-bold lowercase">vertex</span>
            <span className="text-xl font-bold">Orbital</span>
            <span className="text-xl font-bold tracking-tight">Quantum</span>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
            Stop piecing puzzles together.
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-white/60 leading-relaxed mb-16">
            Current tools require multi-step workflows, separate editors, and technical skills.
            <span className="text-white"> VidEEo.ai eliminates the entire production pipeline.</span> We deliver finished, production-ready output from a single chat prompt.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-3 p-2 bg-white/5 border border-white/10 rounded-2xl">
            {['AI Voice', 'AI Backgrounds', 'AI Script Generator'].map((tag) => (
              <div key={tag} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-sm font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> {tag}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/60 mb-8 italic">
              How it works
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-4">
              Turn ideas into<br />
              <span className="text-yellow-500">short videos in seconds.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 aspect-square relative overflow-hidden group">
                <div className="absolute top-8 left-8 text-xs font-bold text-white/30 tracking-widest">ENTER YOUR STORY TOPIC</div>
                <div className="mt-12 p-4 bg-black border border-white/10 rounded-xl text-sm italic text-white/60">
                  Write a story about Spanish lullaby |
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold">Funny</div>
                  <div className="px-3 py-1.5 rounded-lg bg-yellow-500/10 text-yellow-500 text-[10px] font-bold border border-yellow-500/20">Lullaby ✨</div>
                </div>
              </div>
              <h3 className="text-xl font-bold">1. Write & Outline</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 aspect-square flex flex-col justify-center">
                <div className="mb-4 text-[10px] font-bold text-white/30 tracking-widest">SELECT BACKGROUND</div>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`aspect-square bg-white/10 rounded-lg ${i === 3 ? 'ring-2 ring-yellow-500 p-0.5' : ''}`}>
                      <div className={`w-full h-full bg-white/20 rounded-md ${i === 3 ? 'bg-white/40' : ''}`} />
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center"><Mic className="w-4 h-4 text-black" /></div>
                    <span className="text-xs font-bold text-yellow-500">Deep Ocean</span>
                  </div>
                  <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-yellow-500" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold">2. Customise & Style</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-[#111] border border-white/10 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center text-center">
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-full border-t-2 border-yellow-500 animate-spin" />
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center"><Play className="w-8 h-8 text-black fill-current" /></div>
                </div>
                <div className="mt-8 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold flex items-center gap-2">
                  <CheckCircle className="w-3 h-3 text-green-500" /> Ready to Export
                </div>
                <div className="mt-2 text-[10px] font-bold text-white/30 tracking-widest">1080P • 60FPS</div>
              </div>
              <h3 className="text-xl font-bold">3. Finish & Export</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final Feature Grid */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-white/60 mb-8 font-mono">
              Features
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Your go-to tool for crafting<br />
              <span className="text-yellow-500">viral Shorts using AI.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-32">
            {/* Bento cards */}
            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col justify-end min-h-[400px]">
              <Layers className="w-10 h-10 text-white/20 mb-auto" />
              <h3 className="text-2xl font-bold leading-tight mb-2">Instantly automate videos.</h3>
              <p className="text-white/40 text-sm">Generate captions, effects, music, & backgrounds in a second.</p>
            </div>

            <div className="md:col-span-5 bg-[#111] border border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-white flex items-center justify-center shadow-[0_20px_60px_rgba(255,255,255,0.15)] mb-8">
                <Play className="w-10 h-10 text-black fill-current" />
              </div>
              <h3 className="text-3xl font-bold leading-tight">Your AI-powered video creator</h3>
            </div>

            <div className="md:col-span-3 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col">
              <div className="flex gap-2 mb-8 overflow-hidden grayscale opacity-40">
                <div className="w-full aspect-[2/3] bg-white/10 rounded-lg" />
                <div className="w-full aspect-[2/3] bg-white/10 rounded-lg" />
                <div className="w-full aspect-[2/3] bg-white/10 rounded-lg" />
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-2 mt-auto">Video Background</h3>
              <p className="text-white/40 text-sm">Choose an AI-generated custom video template from our library.</p>
            </div>

            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col min-h-[350px]">
              <div className="mb-auto py-8">
                <div className="flex items-center gap-1.5 scale-y-150 transform">
                  {[1, 2, 3, 4, 5, 6, 7, 2, 9, 3, 4, 1, 5, 3, 6].map((h, i) => (
                    <div key={i} className="flex-1 bg-yellow-500/20 rounded-full" style={{ height: `${h * 4}px` }} />
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center"><Play className="w-6 h-6 text-black fill-current" /></div>
                  <div>
                    <div className="text-xs font-bold text-yellow-500">Mermaid Deep Ocean</div>
                    <div className="text-[10px] font-medium text-yellow-500/60">Julian Seja</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold leading-tight">AI Voice Narrator</h3>
            </div>

            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
              <div className="w-32 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-12">
                <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center"><Play className="w-5 h-5 text-yellow-500 fill-current" /></div>
              </div>
              <h3 className="text-2xl font-bold leading-tight mb-2">Cross Platform Videos</h3>
              <p className="text-white/40 text-sm leading-relaxed px-4">Create videos tailored for various platforms, including YouTube, Instagram, and TikTok.</p>
            </div>

            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col min-h-[400px]">
              <div className="max-w-[200px] text-white/20 text-[10px] font-mono mb-4">There lived a certain man in Russia long ago</div>
              <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl mb-4">
                <p className="text-xs font-bold text-yellow-500">Давным-давно в России жил человек.</p>
              </div>
              <div className="max-w-[150px] p-2 bg-white/5 border border-white/10 rounded-xl text-[8px] text-white/30 text-center tracking-widest uppercase">
                很久以前, 在俄罗斯有一个人.
              </div>
              <h3 className="text-2xl font-bold leading-tight mt-auto mb-2">Auto Subtitle Generation.</h3>
              <p className="text-white/40 text-sm leading-relaxed">Automatically generate clear subtitles in any language, from Chinese to Russian and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center"><Play className="w-4 h-4 text-white fill-current" /></div>
            <span className="text-xl font-bold">VidEEo.ai</span>
          </div>
          <div className="flex gap-12 text-sm text-white/40 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          </div>
          <p className="text-sm text-white/20 font-medium">© 2026 VidEEo.ai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
