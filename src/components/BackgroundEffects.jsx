import React, { useMemo, useState, useEffect } from 'react';

const BackgroundEffects = () => {
    // Detect mobile for performant rendering
    const [isMobile, setIsMobile] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth < 768 : false
    );

    useEffect(() => {
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsMobile(window.innerWidth < 768);
            }, 100);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // Generate background blooms using CSS animations (no JS reflows)
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
    const emberCount = isMobile ? 6 : 12;
    const embers = useMemo(() => Array.from({ length: emberCount }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + (isMobile ? 2 : 1),
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 8 + 10,
        delay: Math.random() * -20,
        drift: (Math.random() - 0.5) * (isMobile ? 50 : 100),
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
                @keyframes bloom-pulse {
                    0%, 100% {
                        opacity: 0.05;
                        transform: translate3d(0, 0, 0) scale(1);
                    }
                    50% {
                        opacity: ${isMobile ? 0.1 : 0.15};
                        transform: translate3d(${isMobile ? '20px, -20px' : '40px, -40px'}, 0) scale(1.15);
                    }
                }
                .ember {
                    position: absolute;
                    background: radial-gradient(circle, rgb(235, 199, 221) 0%, transparent 70%);
                    ${!isMobile ? 'box-shadow: 0 0 10px rgba(235, 199, 221, 0.6);' : ''}
                    will-change: transform;
                    animation: rise var(--duration) linear infinite;
                    animation-delay: var(--delay);
                }
                .bloom {
                    position: absolute;
                    background: radial-gradient(circle, rgba(235, 199, 221, 0.15) 0%, transparent 60%);
                    border-radius: 50%;
                    will-change: transform, opacity;
                    animation: bloom-pulse var(--duration) ease-in-out infinite;
                    animation-delay: var(--delay);
                }
                `}
            </style>

            {/* Background Blooms - Pure CSS Animation (no JS reflows) */}
            <div className={`fixed inset-0 pointer-events-none overflow-hidden z-0 ${isMobile ? 'opacity-50' : ''}`}>
                {blooms.map((bloom) => (
                    <div
                        key={`bloom-${bloom.id}`}
                        className="bloom"
                        style={{
                            top: bloom.top,
                            left: bloom.left,
                            width: bloom.size,
                            height: bloom.size,
                            '--duration': `${bloom.duration}s`,
                            '--delay': `${bloom.delay}s`,
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
