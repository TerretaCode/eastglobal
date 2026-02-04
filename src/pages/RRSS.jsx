import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Heart, Eye, TrendingUp, Users } from 'lucide-react';

const RRSS = () => {
    const socialStats = [
        {
            platform: "Instagram",
            handle: "@eastglobal",
            followers: "750",
            engagement: "8.2%",
            trending: "En crecimiento",
            icon: Instagram,
            color: "from-pink-500 to-purple-600",
            hoverBorder: "hover:border-[#EBC7DD]/50"
        },
        {
            platform: "LinkedIn",
            handle: "East Global",
            followers: "250",
            engagement: "12.5%",
            trending: "En crecimiento",
            icon: Linkedin,
            color: "from-blue-500 to-blue-600",
            hoverBorder: "hover:border-blue-500/50"
        },
        {
            platform: "TikTok",
            handle: "@eastglobal",
            followers: "45",
            engagement: "15.3%",
            trending: "En crecimiento",
            icon: (props) => (
                <svg {...props} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.77-4.6V7.5a8.28 8.28 0 0 0 4.26 1.2v-3.4a4.84 4.84 0 0 1-.6-.61z" />
                </svg>
            ),
            color: "from-pink-400 to-red-500",
            hoverBorder: "hover:border-pink-500/50"
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#EBC7DD]/30">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EBC7DD]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#EBC7DD]/5 rounded-full blur-2xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-bold mb-8"
                        >
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Conectamos en
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#EBC7DD] to-[#DB2777] bg-clip-text text-transparent">
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

            {/* Social Stats Grid */}
            <section className="py-12 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            {socialStats.map((social, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 transition-all duration-500 ${social.hoverBorder}`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                            <social.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-white">{social.followers}</div>
                                            <div className="text-sm text-gray-400">seguidores</div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{social.platform}</h3>
                                    <p className="text-gray-400 mb-3">{social.handle}</p>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Heart className="w-4 h-4 text-[#EBC7DD]" />
                                            <span className="text-sm text-gray-300">{social.engagement}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <TrendingUp className="w-4 h-4 text-green-500" />
                                            <span className="text-sm text-gray-300">{social.trending}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Feed Section (Placeholder/Embed) */}
            <section className="py-24 bg-gray-900/10 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Instagram className="h-8 w-8 text-[#EBC7DD]" />
                            <h2 className="text-4xl font-bold">Instagram</h2>
                        </div>
                        <p className="text-xl text-gray-300">Nuestras últimas creaciones visuales</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[1, 2, 3].map((post) => (
                            <div key={post} className="bg-gray-900/50 rounded-2xl p-4 border border-gray-800 hover:border-[#EBC7DD]/30 transition-all duration-300">
                                <div className="aspect-square bg-gray-800 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                                    <div className="text-[#EBC7DD]/20">
                                        <Instagram className="w-20 h-20" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Heart className="w-4 h-4 text-[#EBC7DD]" />
                                            <span className="text-sm text-gray-400">45</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Eye className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-400">234</span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">hace 2h</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <a
                            href="https://www.instagram.com/eastglobal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-[#EBC7DD] text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(235,199,221,0.3)]"
                        >
                            <Instagram className="w-5 h-5" />
                            <span>Ver perfil completo</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RRSS;
