import React from 'react';
import Image from '../common/Image';
import { motion } from 'framer-motion';

const ServicesHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/servicios-DwMsQcYr.jpg"
                    alt="Servicios Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
                        <span className="block text-white">Lo que tu marca merece.</span>
                        <span className="block text-brand">
                            Así de simple.
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        Estrategia, creatividad y acción. Así llevamos tu marca al siguiente nivel.
                    </p>
                    <button className="px-12 py-6 bg-brand hover:bg-[#E9B7CE] text-zinc-950 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(235,199,221,0.2)]">
                        Ver proyectos
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHero;
