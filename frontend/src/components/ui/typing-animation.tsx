"use client";

import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
}

export default function TypingAnimation({
    phrases,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
}: TypingAnimationProps) {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isPaused) {
            const pauseTimeout = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, pauseDuration);
            return () => clearTimeout(pauseTimeout);
        }

        if (!isDeleting && currentText === currentPhrase) {
            setIsPaused(true);
            return;
        }

        if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setCurrentText(currentPhrase.slice(0, currentText.length + 1));
            } else {
                setCurrentText(currentText.slice(0, -1));
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, isPaused, currentPhraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <div className="relative">
            <span className="text-white">{currentText}</span>
            <span className="inline-block w-0.5 h-5 bg-yellow-500 ml-0.5 animate-pulse" />
        </div>
    );
}
