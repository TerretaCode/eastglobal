import React from 'react';
import Image from '../common/Image';
import { motion } from 'framer-motion';

const NosotrosHero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/equiporesponsive-DtZUJ231.jpeg"
                    alt="Equipo East Global"
                    className="w-full h-full object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center pt-20">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        mass: 1,
                        delay: 0.1
                    }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold mb-8 sm:mb-10 leading-tight xl:leading-[96px] tracking-tight"
                >
                    <span className="text-brand block">Conócenos</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 20,
                        mass: 1,
                        delay: 0.3
                    }}
                    className="text-[18px] sm:text-[20px] md:text-[24px] text-[#D1D5DB] mb-12 sm:mb-16 max-w-4xl mx-auto leading-[32px] font-normal"
                >
                    Somos más que una agencia. Somos arquitectos de experiencias digitales,
                    creadores de historias que conectan y estrategas que transforman visiones en realidades.
                </motion.p>
            </div>
        </section>
    );
};

export default NosotrosHero;
