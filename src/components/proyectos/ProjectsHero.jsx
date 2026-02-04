import React from 'react';
import Image from '../common/Image';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/proyectos-DA6ZUqQq.jpg"
                    alt="Proyectos Hero"
                    className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                        Proyectos en{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand">
                            Acción
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        Nuestro enfoque, puesto en práctica: así llevamos a marcas reales hacia sus próximos logros.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsHero;
