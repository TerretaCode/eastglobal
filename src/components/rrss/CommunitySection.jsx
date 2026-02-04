import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, TrendingUp } from 'lucide-react';

const CommunitySection = () => {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-8"
                    >
                        <span className="bg-gradient-to-r from-white to-brand bg-clip-text text-transparent">
                            Únete a nuestra comunidad
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-300 mb-12"
                    >
                        Síguenos para no perderte nada. Contenido exclusivo, tips de marketing y mucho más.
                    </motion.p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.instagram.com/eastglobal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-brand to-purple-600 hover:from-[#D4AFCB] hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300"
                        >
                            <Instagram className="h-5 w-5" />
                            <span>Seguir en Instagram</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/company/eastglobal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span>Conectar en LinkedIn</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.tiktok.com/@eastglobal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-brand to-red-500 hover:from-[#D4AFCB] hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300"
                        >
                            <TrendingUp className="h-5 w-5 rotate-45" />
                            <span>Seguir en TikTok</span>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
