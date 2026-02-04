import React from 'react';
import { motion } from 'framer-motion';

const ContactoHero = () => {
    return (
        <section className="relative w-full pt-32 pb-12 md:pt-48 md:pb-24 px-4 overflow-hidden">
            {/* Background Decor - Fixed positioning to stay out of flow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand/5 rounded-full blur-[80px] opacity-30 mix-blend-screen" />
            </div>

            <div className="container mx-auto relative z-10 max-w-5xl">
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
                    >
                        <span className="block text-white">Definamos tu</span>
                        <span className="block text-white">próximo paso,</span>
                        <span className="block text-brand">juntos.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Queremos entender tu marca, tus objetivos y tus retos.
                        Desde la idea hasta la ejecución, estamos aquí para crear.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default ContactoHero;
