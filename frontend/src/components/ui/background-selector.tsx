"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface BackgroundSelectorProps {
    images: string[];
    autoPlayInterval?: number;
}

export default function BackgroundSelector({
    images,
    autoPlayInterval = 3000
}: BackgroundSelectorProps) {
    const [selectedIndex, setSelectedIndex] = useState(3); // Start with the 4th image (index 3)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedIndex((prev) => (prev + 1) % images.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [images.length, autoPlayInterval]);

    return (
        <div className="grid grid-cols-4 gap-3">
            {images.map((img, i) => (
                <div
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${i === selectedIndex
                            ? 'ring-[3px] ring-yellow-500 scale-105 shadow-[0_0_20px_rgba(234,179,8,0.4)]'
                            : 'ring-1 ring-white/10 hover:ring-white/20'
                        }`}
                >
                    <Image
                        src={img}
                        alt={`Background ${i + 1}`}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        unoptimized
                    />
                </div>
            ))}
        </div>
    );
}
