import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
    // Detect mobile for performant rendering
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Generate background blooms 
    // Optimization: Reduced count on mobile & gradients instead of blur
    const bloomCount = isMobile ? 2 : 5;
    const blooms = useMemo(() => Array.from({ length: bloomCount }, (_, i) => ({
        id: i,
        size: isMobile ? Math.random() * 300 + 300 : Math.random() * 500 + 400,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: isMobile ? Math.random() * 15 + 20 : Math.random() * 25 + 20,
        delay: Math.random() * 10,
    })), [isMobile, bloomCount]);

    // Generate embers for CSS animation
    // Optimization: Reduced count on mobile
    const emberCount = isMobile ? 6 : 12;
    const embers = useMemo(() => Array.from({ length: emberCount }, (_, i) => ({
        id: i,
        // Larger visual size on mobile since we remove the glow/shadow
        size: Math.random() * 2 + (isMobile ? 2 : 1),
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * -20, // Negative delay to start mid-animation
        drift: (Math.random() - 0.5) * (isMobile ? 50 : 100), // Less drift on mobile
    })), [isMobile, emberCount]);

    return (
        <>
            <style>
                {`
                @keyframes rise {
                    0% {
                        transform: translate3d(0, 110vh, 0);
                        opacity: 0;
                    }
                    10% {
                        opacity: ${isMobile ? 0.3 : 0.5};
                    }
                    90% {
                        opacity: ${isMobile ? 0.3 : 0.5};
                    }
                    100% {
                        transform: translate3d(var(--drift), -10vh, 0);
                        opacity: 0;
                    }
                }
                .ember {
                    position: absolute;
                    /* Optimization: Use gradient instead of box-shadow for glow */
                    background: radial-gradient(circle, #EBC7DD 0%, transparent 70%);
                    /* Only apply box-shadow on desktop where GPU can handle it easily */
                    ${!isMobile ? 'box-shadow: 0 0 10px rgba(235, 199, 221, 0.6);' : ''}
                    will-change: transform;
                    animation: rise var(--duration) linear infinite;
                    animation-delay: var(--delay);
                }
                `}
            </style>

            {/* Background Blooms - Deep Background Layer */}
            <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${isMobile ? 'opacity-50' : ''}`}>
                {blooms.map((bloom) => (
                    <motion.div
                        key={`bloom-${bloom.id}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            // Simplified animation values for mobile
                            opacity: isMobile ? [0.05, 0.1, 0.05] : [0.05, 0.15, 0.05],
                            scale: [1, 1.15, 1],
                            x: isMobile ? [0, 20, 0] : [0, 40, -40, 0],
                            y: isMobile ? [0, -20, 0] : [0, -40, 40, 0],
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
                            // Optimization: Replaced expensive filter:blur with radial-gradient
                            background: 'radial-gradient(circle, rgba(235, 199, 221, 0.15) 0%, transparent 60%)',
                            borderRadius: '50%',
                            willChange: 'transform, opacity'
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
