import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';
import BackgroundEffects from '../components/BackgroundEffects';

const NotFound = () => {
    return (
        <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
            <BackgroundEffects />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <h1 className="text-[120px] md:text-[200px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 select-none">
                        404
                    </h1>
                    <div className="h-2 w-32 bg-[#EBC7DD] mx-auto rounded-full mt-4 mb-8" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-xl mx-auto space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        ¿Perdido en el <span className="text-[#EBC7DD]">espacio digital</span>?
                    </h2>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        La página que buscas no existe o ha sido movida a otra dimensión.
                        Pero no te preocupes, siempre puedes volver a casa.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/"
                            className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                        >
                            <Home className="w-5 h-5" />
                            <span>Volver al Inicio</span>
                        </Link>

                        <Link
                            to="/contacto"
                            className="group px-8 py-4 rounded-full font-bold text-lg border border-white/20 text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                        >
                            <span>Contactar Soporte</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
