"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Mic, Layers, CheckCircle, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500/30">
      {/* Navbar */}
      <nav className={`fixed inset-x-0 mx-auto z-50 transition-all duration-700 ease-in-out ${scrolled
        ? 'top-6 max-w-[920px] rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] w-[95%]'
        : 'top-0 max-w-full border-b border-transparent bg-transparent backdrop-blur-none w-full'
        }`}>
        <div className={`relative mx-auto transition-all duration-700 flex items-center justify-between ${scrolled ? 'h-14 px-8' : 'h-20 px-8 max-w-7xl'
          }`}>
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="VidEEo.ai"
                width={scrolled ? 120 : 150}
                height={scrolled ? 32 : 40}
                className="transition-all duration-700"
              />
            </Link>
          </div>

          {/* Centered Navigation Links */}
          <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium transition-all duration-700 ${scrolled ? 'opacity-100 scale-95' : 'opacity-100 scale-100'
            }`}>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">Product</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">Solutions</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">Enterprise</Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Log In</Link>
            <Link href="/dashboard" className={`bg-white text-black rounded-lg font-semibold hover:bg-yellow-400 transition-all active:scale-95 ${scrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2.5 text-sm'
              }`}>
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
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[url('/hero-bg.png')] bg-cover bg-center brightness-[0.5]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-yellow-500 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            Gen-3 Model Live
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
            One prompt to a<br />
            <span className="bg-gradient-to-r from-[#FFF089] to-[#D97706] bg-clip-text text-transparent tracking-[-0.05em]">perfect video.</span>
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
              <span className="bg-gradient-to-r from-[#FFF089] to-[#D97706] bg-clip-text text-transparent">short videos in seconds.</span>
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
              <span className="bg-gradient-to-r from-[#FFF089] to-[#D97706] bg-clip-text text-transparent">viral Shorts using AI.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-32">
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

      {/* Social Tools Section */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-yellow-500 mb-8 italic">
            — Social Tools —
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Powerful tool for<br />
            boosting social media <span className="bg-gradient-to-r from-[#FFF089] to-[#D97706] bg-clip-text text-transparent">growth</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/40 mb-12">
            Produce unlimited short videos simultaneously with automatic generation of captions, effects, backgrounds, and music.
          </p>
          <Link href="/dashboard" className="inline-flex items-center gap-2 bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all active:scale-95 mb-24 shadow-[0_10px_40px_rgba(234,179,8,0.2)]">
            Try now <ChevronRight className="w-4 h-4" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 text-left">
            {[
              { platform: 'Instagram Reels', desc: 'Transform Instagram Reels into engaging content by adding gameplay to captivate viewers.', icon: '📸' },
              { platform: 'Tiktok Videos', desc: 'Elevate your TikTok videos by adding gameplay to create captivating and entertaining content.', icon: '♪' },
              { platform: 'Youtube Shorts', desc: 'Enhance your YouTube Shorts by adding gameplay to create dynamic and engaging content.', icon: '▶' },
              { platform: 'Facebook Reels', desc: 'Transform Facebook Reels into engaging content by adding gameplay to captivate viewers.', icon: 'f' },
              { platform: 'Twitter (X) videos', desc: 'Enhance your X videos by incorporating gameplay to grab attention and keep viewers hooked.', icon: '𝕏' },
              { platform: 'Thread Videos', desc: 'Boost your Thread videos with gameplay! Engaging visuals captivate viewers and enhance your content.', icon: '@' },
            ].map((tool) => (
              <div key={tool.platform} className="group border-l border-white/5 pl-8 py-4 hover:border-yellow-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-all text-3xl">
                  {tool.icon}
                </div>
                <div className="flex gap-1.5 mb-6">
                  <div className="w-12 h-0.5 bg-white/10" />
                  <div className="w-4 h-0.5 bg-white/10" />
                </div>
                <h3 className="text-lg font-bold mb-4">{tool.platform}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-widest uppercase text-yellow-500 mb-8 italic">
              • Testimonials •
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">What our creators say</h2>
            <p className="max-w-2xl mx-auto text-white/40">
              Discover how thousands of teams streamline their operations with Videeo.ai.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[
              { text: "The AI script generation is scary good. It understands hooks and retention better than most human copywriters I've worked with.", name: "Bilal Ahmed", role: "Agency Founder", color: "bg-white/5" },
              { text: "We scaled our ad testing velocity by 10x using Videeo.ai. The ability to iterate on video creatives instantly is a competitive advantage.", name: "Aliza Khan", role: "Growth Marketer", color: "bg-yellow-500/5 border-yellow-500/10" },
              { text: "The ROI on this tool is insane. We replaced our expensive outsourcing workflow with a single Videeo.ai subscription.", name: "Sana Sheikh", role: "Marketing VP", color: "bg-white/5" },
              { text: "I was skeptical about AI voices, but Videeo.ai's narrators are indistinguishable from real voice actors. Game changer.", name: "Saman Malik", role: "Social Media Manager", color: "bg-white/5" },
              { text: "One prompt and I have a production-ready video for TikTok, Reels, and Shorts. It's like having a full studio in my pocket.", name: "Omar Raza", role: "E-commerce CEO", color: "bg-white/5" },
              { text: "Our engagement rates on Instagram have tripled since we started using the generated captions and dynamic visual effects.", name: "Hassan Ali", role: "Influencer", color: "bg-white/5" },
            ].map((t, i) => (
              <div key={i} className={`break-inside-avoid p-8 rounded-3xl border border-white/10 ${t.color}`}>
                <p className="text-lg font-medium leading-relaxed mb-8">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold ring-2 ring-yellow-500/20">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-[10px] font-bold text-yellow-500/60 uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">See what marketers are creating.</h2>
            <p className="text-white/40">From social clips to full ad campaigns, see the range of possibilities with Videeo.ai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Luxury Real Estate Tour", tag: "REAL ESTATE", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
              { title: "Travel Vlog Highlights", tag: "LIFESTYLE", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800" },
              { title: "Fitness Motivation Series", tag: "HEALTH", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800" }
            ].map((v, i) => (
              <div key={i} className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={v.img}
                  alt={v.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-50"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8">
                  <div className="text-[10px] font-bold text-yellow-500 tracking-widest mb-2">{v.tag}</div>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black px-6">
        <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[40px] border border-white/10 bg-gradient-to-br from-yellow-500/10 via-black to-black relative overflow-hidden text-center">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-500/20 blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-yellow-500/20 blur-[80px]" />

          <h2 className="relative z-10 text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Experience the <span className="bg-gradient-to-r from-[#FFF089] to-[#D97706] bg-clip-text text-transparent">Magic</span>
          </h2>
          <p className="relative z-10 max-w-xl mx-auto text-white/60 mb-12 text-lg">
            Create endless short videos simultaneously with automatic captions, effects, backgrounds, and music.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-[180px] bg-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(234,179,8,0.3)]">
              Try now <ChevronRight className="w-4 h-4" />
            </Link>
            <button className="w-[180px] bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="pt-32 pb-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-y-16 gap-x-8 mb-32">
          <div className="col-span-full md:col-span-4">
            <div className="flex items-center mb-8 -mt-2">
              <Image
                src="/logo.png"
                alt="VidEEo.ai"
                width={180}
                height={48}
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
              Empowering creators and businesses to tell stories through the power of generative AI.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold mb-8 text-white">Product</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold mb-8 text-white">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold mb-8 text-white">Resources</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold mb-8 text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <p className="text-sm text-white/20 font-medium">© 2026 VidEEo.ai. All rights reserved.</p>
          <div className="flex gap-12 text-sm text-white/40 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
