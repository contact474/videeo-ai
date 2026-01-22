"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Play, Mic, Layers, CheckCircle, ChevronRight, ArrowRight, Music, Instagram, Facebook, Youtube, AtSign } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrandScroller } from '@/components/ui/brand-scroller'
import TestimonialV2 from '@/components/ui/testimonial-v2'
import TypingAnimation from '@/components/ui/typing-animation'
import BackgroundSelector from '@/components/ui/background-selector'

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
            <Link href="/dashboard" className={`bg-white text-black rounded-lg font-semibold hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all active:scale-95 ${scrolled ? 'px-4 py-1.5 text-xs' : 'px-5 py-2.5 text-sm'
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
            <Link href="/dashboard" className="w-[220px] bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center">
              Start Creating Free
            </Link>
            <button className="w-[220px] bg-white/5 border border-white/10 text-white py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              Watch Demo <Play className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-24 border-y border-white/5 bg-black overflow-hidden relative">
        <div className="absolute inset-0 bg-yellow-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
          <p className="text-center text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">Trusted by Innovative Teams</p>
        </div>
        <div className="flex flex-col relative z-10">
          <BrandScroller />
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex flex-wrap justify-center items-center gap-4 p-3 bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] border border-white/10 rounded-[28px] relative backdrop-blur-sm"
          >
            {[
              { name: 'AI Voice', icon: Mic },
              { name: 'AI Backgrounds', icon: Play },
              { name: 'AI Script Generator', icon: CheckCircle }
            ].map((feature, i) => (
              <React.Fragment key={feature.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + (i * 0.15), duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.03] text-base font-bold tracking-tight text-white border border-white/10 transition-all relative group overflow-hidden shadow-lg"
                >
                  {/* Icon with background */}
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 relative z-10">
                    <feature.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Text */}
                  <span className="relative z-10">{feature.name}</span>

                  {/* Subtle sweep animation */}
                  <motion.div
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                  />
                </motion.div>

                {/* Diamond separator */}
                {i < 2 && (
                  <motion.div
                    initial={{ opacity: 0, rotate: 0 }}
                    whileInView={{ opacity: 1, rotate: 45 }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      opacity: { delay: 0.6 + (i * 0.15), duration: 0.4 },
                      rotate: { delay: 0.6 + (i * 0.15), duration: 0.4 },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut"
                      }
                    }}
                    className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 shadow-[0_0_12px_rgba(234,179,8,0.6)]"
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>
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
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-[32px] p-10 aspect-square relative overflow-hidden group flex flex-col justify-center">
                {/* Header */}
                <div className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-8">ENTER YOUR STORY TOPIC</div>

                {/* Input field with typing animation */}
                <div className="mb-8 p-5 bg-black/60 border border-white/10 rounded-2xl text-base italic text-white/90 min-h-[60px] flex items-center backdrop-blur-sm">
                  <TypingAnimation
                    phrases={[
                      'Write a story about Spanish lullaby',
                      'Write a story about space exploration',
                      'Write a story about ancient civilizations',
                      'Write a story about ocean mysteries'
                    ]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseDuration={2500}
                  />
                </div>

                {/* Story Tone Section */}
                <div className="mb-8">
                  <div className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-4">SELECT STORY TONE</div>
                  <div className="flex gap-3">
                    <div className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white/60 hover:bg-white/10 transition-colors cursor-pointer">Funny</div>
                    <div className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-white/60 hover:bg-white/10 transition-colors cursor-pointer">Fairy</div>
                    <div className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/10 text-yellow-500 text-sm font-bold border border-yellow-500/30 shadow-[0_0_20px_rgba(234,179,8,0.15)] cursor-pointer flex items-center gap-2">
                      Lullaby <span className="text-xs">✨</span>
                    </div>
                  </div>
                </div>

                {/* Max Words Section */}
                <div>
                  <div className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-4">MAX WORDS</div>
                  <div className="p-5 bg-black/60 border border-white/10 rounded-2xl text-base text-white/50 backdrop-blur-sm">
                    500 words
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Write & Outline</h3>
                <p className="text-white/40 text-sm leading-relaxed">Kick off by crafting a script with a prompt or by choosing from available template suggestions.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-[32px] p-10 aspect-square relative overflow-hidden flex flex-col justify-center">
                {/* Video Orientation Section */}
                <div className="mb-5">
                  <div className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-3">VIDEO ORIENTATION</div>
                  <div className="relative">
                    <select className="w-full p-4 bg-black/60 border border-white/10 rounded-2xl text-base text-white appearance-none cursor-pointer backdrop-blur-sm pr-12 font-medium">
                      <option>16:9 Landscape (YouTube)</option>
                      <option>9:16 Portrait (TikTok)</option>
                      <option>1:1 Square (Instagram)</option>
                    </select>
                    <ChevronRight className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 rotate-90 pointer-events-none" />
                  </div>
                </div>

                {/* Background Selection Section */}
                <div className="mb-5">
                  <div className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-3">SELECT BACKGROUND</div>
                  <BackgroundSelector
                    images={[
                      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
                      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=400&fit=crop',
                      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
                      'https://images.unsplash.com/photo-1518893063132-36e46dbe2428?w=400&h=400&fit=crop'
                    ]}
                    autoPlayInterval={3000}
                  />
                </div>

                {/* Background Sound Section */}
                <div>
                  <div className="text-xs font-bold text-white/30 tracking-[0.2em] uppercase mb-3">BACKGROUND SOUND</div>
                  <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/20 rounded-2xl flex items-center justify-between backdrop-blur-sm shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shrink-0">
                        <Mic className="w-5 h-5 text-black" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm font-bold text-yellow-500">Deep Ocean</span>
                    </div>
                    <div className="flex-1 max-w-[150px] ml-4">
                      <div className="h-1.5 bg-black/30 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-yellow-400 to-amber-500"
                          initial={{ width: '0%' }}
                          animate={{ width: '70%' }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">2. Customise & Style</h3>
                <p className="text-white/40 text-sm leading-relaxed">Select orientation and pick a background scene and music from free templates.</p>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-[32px] p-10 aspect-square relative overflow-hidden flex flex-col items-center justify-center text-center group"
              >
                {/* Dark golden glow background - pulsing */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.1, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-80 h-80 bg-yellow-600/15 blur-[120px] rounded-full"
                  />
                </div>

                {/* Large golden arc ring - rotating */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-56 h-56 rounded-full border-[3px] border-transparent bg-gradient-to-br from-yellow-500 via-yellow-600 to-transparent"
                  style={{
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '3px',
                    opacity: 0.6
                  }}
                />

                {/* Dashed circle outline */}
                <div className="absolute w-56 h-56 rounded-full border-2 border-dashed border-white/5" />

                {/* Main circle container with glow - floating */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-28 h-28 rounded-full flex items-center justify-center mb-6"
                >
                  {/* Inner white/cream circle with sparkle icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, boxShadow: "0 0 80px rgba(234,179,8,0.5)" }}
                    className="relative w-28 h-28 rounded-full bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center shadow-[0_0_60px_rgba(234,179,8,0.3)] transition-shadow duration-500"
                  >
                    {/* Sparkle icon - pulsing */}
                    <motion.svg
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-12 h-12 text-orange-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                      <circle cx="18" cy="6" r="2" />
                    </motion.svg>
                  </motion.div>
                </motion.div>

                {/* Ready to Export badge - smooth appearance */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative px-4 py-2 rounded-full bg-black/40 border border-white/10 text-xs font-semibold flex items-center gap-2 backdrop-blur-sm shadow-lg group-hover:bg-black/60 transition-colors"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Ready to Export
                </motion.div>

                {/* Video specs */}
                <div className="relative mt-2 text-[10px] font-bold text-white/30 tracking-widest">1080p • 60FPS</div>
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold mb-2">3. Finish & Export</h3>
                <p className="text-white/40 text-sm leading-relaxed">Select the export format and download the generated videos, script, or narration.</p>
              </div>
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
            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col min-h-[400px] relative overflow-hidden group">
              {/* Floating Pills Animation */}
              <div className="absolute inset-x-0 top-0 bottom-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#111] via-transparent to-[#111] z-10 pointer-events-none" />

                <motion.div
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-6 p-8 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                >
                  {[1, 2].map((loop) => (
                    <React.Fragment key={loop}>
                      {/* Pill 1: Video Background */}
                      <div className="self-end px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 backdrop-blur-sm transform hover:scale-105 transition-transform hover:border-yellow-500/50 hover:bg-white/10">
                        <Music className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-semibold text-white/90">Video Background</span>
                      </div>

                      {/* Pill 2: Script Creation */}
                      <div className="self-start px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 backdrop-blur-sm transform hover:scale-105 transition-transform hover:border-yellow-500/50 hover:bg-white/10">
                        <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-[9px] font-black text-black">AI</div>
                        <span className="text-xs font-semibold text-white/90">Script Creation</span>
                      </div>

                      {/* Pill 3: Voice Narrator */}
                      <div className="self-end px-5 py-2.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 backdrop-blur-sm transform hover:scale-105 transition-transform hover:border-yellow-500/50 hover:bg-white/10">
                        <Mic className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-semibold text-white/90">Voice Narrator</span>
                      </div>
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>

              <div className="relative z-20 mt-auto">
                <h3 className="text-2xl font-bold leading-tight mb-2">Instantly automate videos.</h3>
                <p className="text-white/40 text-sm">Generate captions, effects, music, & backgrounds in a second.</p>
              </div>
            </div>

            <div className="md:col-span-5 bg-[#111] border border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              {/* Horizontal Line behind button */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-[40px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-50 group-hover:scale-x-75 transition-transform duration-700" />

              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-24 w-40 h-40 bg-yellow-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-yellow-500/20 transition-colors duration-700" />

              {/* Central Button */}
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-500 border-2 border-yellow-300/20">
                  <svg className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                    <circle cx="18" cy="6" r="2" />
                  </svg>
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border border-yellow-500/30 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
              </div>

              <h3 className="text-3xl font-bold leading-tight relative z-10">
                Your AI-powered<br />
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">video creator</span>
              </h3>
            </div>

            <div className="md:col-span-3 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col relative overflow-hidden group min-h-[400px]">
              {/* Carousel Container */}
              <div className="absolute inset-x-0 top-0 bottom-32 overflow-hidden flex items-center justify-center">
                {/* Scrolling Track */}
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-4 min-w-max"
                >
                  {[
                    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop",
                    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=600&fit=crop",
                  ].map((src, i) => (
                    <div key={i} className="w-[140px] aspect-[9/16] relative rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={src}
                        alt="Video template"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </motion.div>

                {/* Focus Overlay - Sides Dimmed */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#111]/90 via-transparent to-[#111]/90 z-10 pointer-events-none" />

                {/* Center Focus Border */}
                <div className="absolute w-[140px] aspect-[9/16] rounded-xl border-2 border-yellow-500/80 shadow-[0_0_40px_rgba(234,179,8,0.2)] z-20 pointer-events-none" />
              </div>

              <div className="relative z-20 mt-auto text-center">
                <h3 className="text-2xl font-bold leading-tight mb-2">Video Background</h3>
                <p className="text-white/40 text-sm">Choose an AI-generated custom video template from our library.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col min-h-[350px] relative overflow-hidden group">

              {/* Audio Visualizer Container */}
              <div className="mb-auto relative z-10 w-full flex flex-col gap-8 pt-6">

                {/* Waveform Animation */}
                <div className="h-16 flex items-center justify-center gap-1.5 px-4 w-full">
                  {[...Array(24)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 bg-yellow-500/80 rounded-full"
                      animate={{
                        height: [12, Math.random() * 40 + 12, 12],
                        opacity: [0.4, 1, 0.4]
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.05
                      }}
                    />
                  ))}
                </div>

                {/* Player Card */}
                <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-4 flex items-center gap-4 relative overflow-hidden group/card hover:border-yellow-500/40 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-transparent pointer-events-none" />

                  {/* Play Button */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-yellow-500/20 group-hover/card:scale-105 transition-transform">
                    <Play className="w-5 h-5 text-black fill-current ml-0.5" />
                  </div>

                  {/* Track Info */}
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">Mermaid Deep Ocean</div>
                    <div className="text-xs font-medium text-yellow-500">Julian Seja</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <h3 className="text-2xl font-bold leading-tight mb-2">AI Voice Narrator</h3>
                <p className="text-white/40 text-sm">Quickly generate lifelike AI voiceovers, converting text into natural-sounding narration.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group min-h-[350px]">
              {/* Stacked Cards Animation */}
              <div className="relative w-64 h-44 mb-10 group/cards">
                {/* Back card */}
                <div className="absolute inset-0 z-0 bg-white/5 border border-white/5 rounded-2xl transform scale-90 -translate-y-3 opacity-40 transition-transform duration-500 group-hover/cards:-translate-y-5" />
                {/* Middle card */}
                <div className="absolute inset-0 z-10 bg-white/5 border border-white/10 rounded-2xl transform scale-95 -translate-y-1.5 opacity-70 transition-transform duration-500 group-hover/cards:-translate-y-2.5" />
                {/* Front card - Video Frame */}
                <div className="absolute inset-0 z-20 bg-[#1a1a1a] border-2 border-white/10 rounded-2xl flex items-center justify-center shadow-2xl group-hover/cards:border-yellow-500 transition-colors duration-500">
                  {/* Inner Gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover/cards:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500/10 blur-[50px] rounded-full pointer-events-none group-hover/cards:bg-yellow-500/20 transition-colors" />

                  {/* Play Button */}
                  <div className="relative z-30 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg transform group-hover/cards:scale-110 transition-transform duration-500">
                    <Play className="w-7 h-7 text-black fill-current ml-1" />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold leading-tight mb-2">Cross Platform Videos</h3>
              <p className="text-white/40 text-sm leading-relaxed px-4">Create videos tailored for various platforms, including YouTube, Instagram, and TikTok.</p>
            </div>


            <div className="md:col-span-4 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col min-h-[400px] relative overflow-hidden group">
              {/* Scrolling Subtitles Container */}
              <div className="mb-auto relative h-[280px] w-full overflow-hidden">
                {/* Gradient Masks for Fade Effect */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#111] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111] to-transparent z-10 pointer-events-none" />

                {/* Center Highlight Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-yellow-500/5 blur-xl rounded-full pointer-events-none" />

                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-4 py-4"
                >
                  {[
                    { text: "There lived a certain man in Russia long ago", lang: "English" },
                    { text: "Давным-давно в России жил человек.", lang: "Russian", highlight: true },
                    { text: "很久以前, 在俄罗斯有一个人.", lang: "Chinese" },
                    { text: "Vivía cierto hombre en Rusia hace mucho tiempo", lang: "Spanish" },
                    { text: "昔々、ロシアにある男が住んでいました", lang: "Japanese" },
                    // Duplicate
                    { text: "There lived a certain man in Russia long ago", lang: "English" },
                    { text: "Давным-давно в России жил человек.", lang: "Russian", highlight: true },
                    { text: "很久以前, 在俄罗斯有一个人.", lang: "Chinese" },
                    { text: "Vivía cierto hombre en Rusia hace mucho tiempo", lang: "Spanish" },
                    { text: "昔々、ロシアにある男が住んでいました", lang: "Japanese" },
                  ].map((item, i) => (
                    <div key={i} className={`p-4 rounded-2xl border backdrop-blur-sm text-center transition-colors ${item.highlight ? 'border-yellow-500/30 bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'border-white/5 bg-white/5'}`}>
                      <p className={`text-sm font-medium ${item.highlight ? 'text-yellow-500' : 'text-white/50'}`}>{item.text}</p>
                    </div>
                  ))}
                </motion.div>
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
          style={{
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
          }}
        />

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
          <Link href="/dashboard" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-300 hover:to-amber-400 transition-all active:scale-95 mb-24 shadow-[0_10px_40px_rgba(234,179,8,0.2)]">
            Try now <ChevronRight className="w-4 h-4" />
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 text-left">
            {[
              { platform: 'Instagram Reels', desc: 'Transform Instagram Reels into engaging content by adding gameplay to captivate viewers.', icon: <Instagram className="w-6 h-6" /> },
              {
                platform: 'Tiktok Videos', desc: 'Elevate your TikTok videos by adding gameplay to create captivating and entertaining content.', icon: (
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-6 h-6">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                  </svg>
                )
              },
              { platform: 'Youtube Shorts', desc: 'Enhance your YouTube Shorts by adding gameplay to create dynamic and engaging content.', icon: <Youtube className="w-6 h-6" /> },
              { platform: 'Facebook Reels', desc: 'Transform Facebook Reels into engaging content by adding gameplay to captivate viewers.', icon: <Facebook className="w-6 h-6" /> },
              {
                platform: 'Twitter (X) videos', desc: 'Enhance your X videos by incorporating gameplay to grab attention and keep viewers hooked.', icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                )
              },
              { platform: 'Thread Videos', desc: 'Boost your Thread videos with gameplay! Engaging visuals captivate viewers and enhance your content.', icon: <AtSign className="w-6 h-6" /> },
            ].map((tool) => (
              <div key={tool.platform} className="group border-l border-white/5 pl-8 py-4 hover:border-yellow-500/50 transition-colors">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-amber-500 group-hover:text-black transition-all">
                    {tool.icon}
                  </div>
                  <div className="flex flex-col gap-1.5 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-10 h-px bg-white" />
                    <div className="w-6 h-px bg-white self-end" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4">{tool.platform}</h3>
                <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialV2 />

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
        <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[48px] border border-white/5 bg-[#0a0a0a] relative overflow-hidden text-center group">
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Decorative Sparkles */}
          <div className="absolute top-12 left-12 text-white/10 select-none pointer-events-none">+</div>
          <div className="absolute bottom-24 left-32 text-white/5 select-none pointer-events-none text-xs">+</div>
          <div className="absolute top-24 right-24 text-white/5 select-none pointer-events-none text-sm">+</div>
          <div className="absolute bottom-12 right-12 text-white/10 select-none pointer-events-none">.</div>
          <div className="absolute top-1/2 left-12 text-white/10 select-none pointer-events-none">.</div>

          <h2 className="relative z-10 text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none text-white">
            Experience the <span className="bg-gradient-to-r from-[#FFF089] to-[#D97706] bg-clip-text text-transparent">Magic</span>
          </h2>
          <p className="relative z-10 max-w-lg mx-auto text-white/40 mb-12 text-base md:text-lg leading-relaxed">
            Create endless short videos simultaneously with automatic captions, effects, backgrounds, and music.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="relative group/btn">
              {/* Glow effect for button */}
              <div className="absolute -inset-1 bg-yellow-500/20 blur-xl rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <Link href="/dashboard" className="relative w-[180px] bg-gradient-to-r from-yellow-400 to-amber-500 text-black py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-amber-400 transition-all flex items-center justify-center gap-2 active:scale-95 shadow-[0_10px_30px_rgba(234,179,8,0.2)]">
                Try now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <button className="w-[180px] bg-white/[0.03] border border-white/10 text-white/80 py-4 rounded-xl font-bold text-lg hover:bg-white/[0.08] hover:text-white transition-all flex items-center justify-center gap-2">
              Learn more <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="pt-32 pb-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row justify-between gap-16">
            {/* Logo and Description */}
            <div className="flex-1 max-w-sm">
              <div className="flex items-center mb-8 h-6">
                <Image
                  src="/logo.png"
                  alt="VidEEo.ai"
                  width={160}
                  height={42}
                  className="object-contain"
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-[280px]">
                Empowering creators and businesses to tell stories through the power of generative AI.
              </p>
            </div>

            {/* Links Columns */}
            <div className="flex gap-16 lg:gap-24">
              <div className="min-w-[100px]">
                <h4 className="font-bold mb-8 text-xs uppercase tracking-widest text-white">Product</h4>
                <ul className="space-y-4 text-xs text-white/40 font-medium">
                  <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>
              <div className="min-w-[100px]">
                <h4 className="font-bold mb-8 text-xs uppercase tracking-widest text-white">Company</h4>
                <ul className="space-y-4 text-xs text-white/40 font-medium">
                  <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                </ul>
              </div>
              <div className="min-w-[100px]">
                <h4 className="font-bold mb-8 text-xs uppercase tracking-widest text-white">Resources</h4>
                <ul className="space-y-4 text-xs text-white/40 font-medium">
                  <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                </ul>
              </div>
              <div className="min-w-[100px]">
                <h4 className="font-bold mb-8 text-xs uppercase tracking-widest text-white">Legal</h4>
                <ul className="space-y-4 text-xs text-white/40 font-medium">
                  <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
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
