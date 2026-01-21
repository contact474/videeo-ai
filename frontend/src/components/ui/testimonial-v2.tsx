"use client";

import React from 'react';
import { motion } from "framer-motion";

// --- Types ---
interface Testimonial {
    text: string;
    image?: string;
    name: string;
    role: string;
    initials: string;
}

// --- Data ---
const testimonials: Testimonial[] = [
    {
        text: "The AI script generation is scary good. It understands hooks and retention better than most human copywriters I've worked with.",
        initials: "BA",
        name: "Bilal Ahmed",
        role: "AGENCY FOUNDER",
    },
    {
        text: "The ROI on this tool is insane. We replaced our expensive outsourcing workflow with a single VidEEo.ai subscription.",
        initials: "SS",
        name: "Sana Sheikh",
        role: "MARKETING VP",
    },
    {
        text: "One prompt and I have a production-ready video for TikTok, Reels, and Shorts. It's like having a full studio in my pocket.",
        initials: "OR",
        name: "Omar Raza",
        role: "E-COMMERCE CEO",
    },
    {
        text: "We scaled our ad testing velocity by 10x using VidEEo.ai. The ability to iterate on video creatives instantly is a competitive advantage.",
        initials: "BA",
        name: "Brian Adams",
        role: "AD OPS LEAD",
    },
    {
        text: "I was skeptical about AI voices, but VidEEo.ai's narrators are indistinguishable from real voice actors. Game changer.",
        initials: "ZK",
        name: "Zain Khan",
        role: "CONTENT CREATOR",
    },
    {
        text: "Our engagement rates on Instagram have tripled since we started using the generated captions and dynamic visual effects.",
        initials: "LH",
        name: "Lisa Huang",
        role: "SOCIAL MEDIA STRATEGIST",
    },
    {
        text: "The workflow is so intuitive. From prompt to final render, it takes less than 5 minutes to create high-performing video content.",
        initials: "MK",
        name: "Mustafa Kamal",
        role: "STARTUP FOUNDER",
    },
    {
        text: "Finally, an AI tool that actually delivers on its promise. The lip-sync is perfect and the quality is industry-standard.",
        initials: "AD",
        name: "Aliza Dawn",
        role: "VIDEO EDITOR",
    },
    {
        text: "VidEEo.ai has completely transformed how we handle our video ads. The speed and quality are simply unmatched in the market.",
        initials: "HS",
        name: "Hassan Syed",
        role: "PERFORMANCE MARKETER",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
    className?: string;
    testimonials: Testimonial[];
    duration?: number;
}) => {
    return (
        <div className={props.className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent list-none m-0 p-0"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, initials, name, role }, i) => (
                                <motion.li
                                    key={`${index}-${i}`}
                                    aria-hidden={index === 1 ? "true" : "false"}
                                    tabIndex={index === 1 ? -1 : 0}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -5,
                                        transition: { type: "spring", stiffness: 400, damping: 17 }
                                    }}
                                    className="p-8 rounded-[32px] border border-white/5 shadow-2xl max-w-sm w-full bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 cursor-default select-none focus:outline-none focus:ring-2 focus:ring-yellow-500/20"
                                >
                                    <blockquote className="m-0 p-0">
                                        <p className="text-white/70 leading-relaxed font-normal m-0 italic text-lg">
                                            "{text}"
                                        </p>
                                        <footer className="flex items-center gap-4 mt-8">
                                            <div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 font-bold text-xs shrink-0">
                                                {initials}
                                            </div>
                                            <div className="flex flex-col">
                                                <cite className="font-bold not-italic tracking-tight leading-5 text-white">
                                                    {name}
                                                </cite>
                                                <span className="text-[10px] uppercase font-bold tracking-[0.1em] text-yellow-500/60 mt-1">
                                                    {role}
                                                </span>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </motion.li>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.ul>
        </div>
    );
};

export default function TestimonialV2() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="bg-transparent py-32 relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 z-10 relative">
                <div className="flex flex-col items-center justify-center max-w-[800px] mx-auto mb-20">
                    <div className="flex justify-center mb-6">
                        <div className="border border-yellow-500/20 py-1 px-4 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-yellow-500/80 bg-yellow-500/5 backdrop-blur-sm">
                            Testimonials
                        </div>
                    </div>

                    <h2 id="testimonials-heading" className="text-6xl md:text-7xl font-black italic tracking-tighter mt-4 text-center text-white italic">
                        What our creators say
                    </h2>
                    <p className="text-center mt-6 text-white/40 text-xl leading-relaxed max-w-xl">
                        Discover how thousands of teams streamline their operations with VidEEo.ai.
                    </p>
                </div>

                <div
                    className="flex justify-center gap-8 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[800px] overflow-hidden"
                    role="region"
                    aria-label="Scrolling Testimonials"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
                </div>
            </div>
        </section>
    );
}
