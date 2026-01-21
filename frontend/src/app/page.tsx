import Link from 'next/link'
import { ArrowRight, Video, Sparkles, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-yellow-400 selection:text-black">
      {/* Header */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="bg-gradient-to-tr from-yellow-400 to-orange-500 p-1.5 rounded-lg">
            <Video className="w-6 h-6 text-black" />
          </div>
          <span>Videeo.ai</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/dashboard" className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors">Get Started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center pt-24 pb-32 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-xs font-medium text-yellow-400 mb-8 animate-fade-in">
          <Sparkles className="w-3 h-3" />
          <span>New: Flux Pro Integration</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight max-w-4xl leading-[1.1] mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Build the Perfect Video in 1 Prompt
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-12">
          From script to final export in under 60 seconds. Powered by GPT-4o, ElevenLabs, and SyncLabs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/dashboard" className="group flex items-center gap-2 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all">
            Start Creating Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AI Scripting", desc: "GPT-4o writes professional marketing copy in seconds.", icon: Sparkles },
            { title: "Voice & Lipsync", desc: "Studio-quality audio perfectly synced to your avatar.", icon: Zap },
            { title: "B-Roll & Captions", desc: "Automatic visuals and captions burned in for social.", icon: Video },
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors">
              <f.icon className="w-10 h-10 text-yellow-400 mb-6" />
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-gray-400">No hidden fees. Cancel anytime.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Free", price: "0", features: ["3 Videos / mo", "720p Export", "Watermark"] },
            { name: "Starter", price: "97", features: ["20 Videos / mo", "1080p Export", "No Watermark", "Email Support"], featured: true },
            { name: "Pro", price: "297", features: ["Unlimited Videos", "4K Export", "Priority Support", "Custom Avatars"] },
          ].map((p, i) => (
            <div key={i} className={`p-10 rounded-3xl border ${p.featured ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-gray-900 border-gray-800'} relative`}>
              {p.featured && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full">POPULAR</span>}
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">${p.price}</span>
                <span className="text-sm opacity-60">/mo</span>
              </div>
              <ul className="space-y-4 mb-10">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium">
                    <Zap className="w-4 h-4" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-transform active:scale-95 ${p.featured ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-black hover:bg-gray-200'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center text-gray-500 text-sm">
        © 2026 Videeo.ai. All rights reserved. Built with GPT-4o.
      </footer>
    </div>
  )
}
