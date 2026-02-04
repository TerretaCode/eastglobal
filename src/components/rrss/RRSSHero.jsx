import React from 'react';
import { motion } from 'framer-motion';

const RRSSHero = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand/5 rounded-full blur-2xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
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
                        <span className="text-white block mb-2 sm:mb-3">
                            Conectamos en
                        </span>
                        <span className="text-brand block">
                            Tiempo Real
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                    >
                        Síguenos en nuestras redes sociales y descubre el día a día de EAST.
                        Contenido fresco, proyectos en proceso y la creatividad que nos mueve.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default RRSSHero;
