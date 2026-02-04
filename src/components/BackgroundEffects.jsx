import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    // Generate background blooms (framer-motion is fine here for slow transitions)
    const blooms = useMemo(() => Array.from({ length: 5 }, (_, i) => ({
        id: i,
        size: Math.random() * 500 + 400,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 10,
    })), []);

    // Generate embers for CSS animation
    const embers = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * -20, // Negative delay to start mid-animation
        drift: (Math.random() - 0.5) * 100,
    })), []);

    return (
        <>
            <style>
                {`
                @keyframes rise {
                    0% {
                        transform: translateY(110vh) translateX(0);
                        opacity: 0;
                    }
                    10% {
                        opacity: 0.5;
                    }
                    90% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translateY(-10vh) translateX(var(--drift));
                        opacity: 0;
                    }
                }
                .ember {
                    position: absolute;
                    background-color: #EBC7DD;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(235, 199, 221, 0.6);
                    will-change: transform;
                    animation: rise var(--duration) linear infinite;
                    animation-delay: var(--delay);
                }
                `}
            </style>

            {/* Background Blooms - Deep Background Layer */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                {blooms.map((bloom) => (
                    <motion.div
                        key={`bloom-${bloom.id}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0.01, 0.04, 0.01],
                            scale: [1, 1.15, 1],
                            x: [0, 40, -40, 0],
                            y: [0, -40, 40, 0],
                        }}
                        transition={{
                            duration: bloom.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: bloom.delay,
                        }}
                        style={{
                            position: 'absolute',
                            top: bloom.top,
                            left: bloom.left,
                            width: bloom.size,
                            height: bloom.size,
                            backgroundColor: '#EBC7DD',
                            borderRadius: '50%',
                            filter: 'blur(160px)',
                        }}
                    />
                ))}
            </div>

            {/* Ember Particles (Micropartículas brasas) - Foreground Overlays Layer */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[70]">
                {embers.map((ember) => (
                    <div
                        key={`ember-${ember.id}`}
                        className="ember"
                        style={{
                            left: ember.left,
                            width: ember.size,
                            height: ember.size,
                            '--duration': `${ember.duration}s`,
                            '--delay': `${ember.delay}s`,
                            '--drift': `${ember.drift}px`,
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default BackgroundEffects;
