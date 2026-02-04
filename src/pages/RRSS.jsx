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
            color: "from-[#EBC7DD] to-purple-600",
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
            color: "from-[#EBC7DD] to-red-500",
            hoverBorder: "hover:border-[#EBC7DD]/50"
        }
    ];

    const instagramPosts = [
        { id: 'DMh2LNft_Nb', likes: 45, views: 234, time: 'hace 2h' },
        { id: 'DMZ9USrNCGz', likes: 38, views: 189, time: 'hace 1d' },
        { id: 'DMVp2WrNE3G', likes: 52, views: 312, time: 'hace 2d' }
    ];

    const linkedinPosts = [
        {
            title: "We Are EAST - AsPresso Valencia",
            description: "Colaboración con AsPresso Valencia y AsPriagroup. Proyectos increíbles en marcha.",
            tag: "🤝 Colaboración",
            reactions: 45,
            comments: 12,
            time: "hace 2d",
            link: "https://www.linkedin.com/posts/eastglobal_weareeast-aspressovalencia-aspriagroup-activity-7354525219031519232-uiTW"
        },
        {
            title: "GoBox EAST - Pádel Marketing",
            description: "Innovación en marketing deportivo. Pádel y creatividad se unen en EAST.",
            tag: "📈 Marketing",
            reactions: 38,
            comments: 8,
            time: "hace 1d",
            link: "https://www.linkedin.com/posts/eastglobal_goboxeast-padel-padelmarketing-activity-7347948931143598084-NdQA"
        }
    ];

    const tiktokVideos = [
        {
            title: "Video más reciente",
            description: "Contenido creativo de TikTok",
            views: 879,
            likes: 12,
            time: "hace 1h",
            link: "https://www.tiktok.com/@eastglobal/video/7529228151067774231"
        },
        {
            title: "Contenido creativo",
            description: "Trend y creatividad",
            views: 147,
            likes: 8,
            time: "hace 3h",
            link: "https://www.tiktok.com/@eastglobal/video/7526878545776315670"
        },
        {
            title: "Trending video",
            description: "Contenido creativo de TikTok",
            views: 879,
            likes: 15,
            time: "hace 1d",
            link: "https://www.tiktok.com/@eastglobal/video/7524780450481491222"
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
                            <span style={{ color: '#EBC7DD' }} className="block">
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

            {/* Instagram Feed Section */}
            <section className="py-24 bg-gray-900/30 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Instagram className="h-8 w-8 text-[#EBC7DD]" />
                            <h2 className="text-4xl font-bold">Instagram</h2>
                        </div>
                        <p className="text-xl text-gray-300 mb-6">Nuestras últimas creaciones visuales</p>
                        <div className="flex items-center justify-center">
                            <a
                                href="https://www.instagram.com/eastglobal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#EBC7DD] to-purple-600 hover:from-[#D4AFCB] hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                <Instagram className="w-5 h-5" />
                                <span>Ver perfil completo</span>
                            </a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {instagramPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-[#EBC7DD]/50 transition-all duration-300"
                            >
                                <div className="aspect-square bg-gray-800 rounded-xl mb-4 overflow-hidden border border-gray-700">
                                    <iframe
                                        src={`https://www.instagram.com/p/${post.id}/embed`}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        scrolling="no"
                                        allowTransparency="true"
                                        className="w-full h-full"
                                        title={`Instagram Post ${post.id}`}
                                    ></iframe>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1">
                                            <Heart className="w-4 h-4 text-[#EBC7DD]" />
                                            <span className="text-sm text-gray-400">{post.likes} likes</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Eye className="w-4 h-4 text-blue-500" />
                                            <span className="text-sm text-gray-400">{post.views} vistas</span>
                                        </div>
                                    </div>
                                    <span className="text-xs text-gray-500">{post.time}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LinkedIn Feed Section (Restored as it was in my previous implementation) */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <Linkedin className="h-8 w-8 text-blue-500" />
                            <h2 className="text-4xl font-bold">LinkedIn</h2>
                        </div>
                        <p className="text-xl text-gray-300 mb-6">Insights profesionales y casos de estudio</p>
                        <div className="flex items-center justify-center">
                            <a
                                href="https://www.linkedin.com/company/eastglobal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span>Ver perfil completo</span>
                            </a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {linkedinPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                                        <Linkedin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">East Global</div>
                                        <div className="text-sm text-gray-400">Agencia de Marketing Digital</div>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <h3 className="text-xl font-bold text-white">{post.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{post.description}</p>
                                </div>
                                <div className="mb-6 p-4 bg-gray-800/50 rounded-xl inline-block">
                                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                                            {post.tag}
                                        </span>
                                        <span>EAST Global</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                                    <div className="flex items-center space-x-6">
                                        <span className="text-sm text-gray-400 flex items-center gap-1">
                                            👍 {post.reactions} reacciones
                                        </span>
                                        <span className="text-sm text-gray-400 flex items-center gap-1">
                                            💬 {post.comments} comentarios
                                        </span>
                                    </div>
                                    <span className="text-xs text-gray-500">{post.time}</span>
                                </div>
                                <div className="mt-8">
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-lg shadow-blue-500/20"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                        <span>Ver post completo</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TikTok Feed Section */}
            <section className="py-24 bg-gray-900/30 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <div className="flex items-center justify-center space-x-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#EBC7DD] to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-[#EBC7DD]/20">
                                <TrendingUp className="h-6 w-6 text-white" />
                            </div>
                            <h2 className="text-4xl font-bold">TikTok</h2>
                        </div>
                        <p className="text-xl text-gray-300 mb-6">Creatividad en movimiento y trends que funcionan</p>
                        <div className="flex items-center justify-center">
                            <a
                                href="https://www.tiktok.com/@eastglobal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#EBC7DD] to-red-500 hover:from-[#D4AFCB] hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                            >
                                <TrendingUp className="w-5 h-5 rotate-45" />
                                <span>Ver perfil completo</span>
                            </a>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {tiktokVideos.map((video, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-[#EBC7DD]/50 transition-all duration-300"
                            >
                                <div className="aspect-[9/16] bg-gradient-to-br from-[#EBC7DD]/20 to-red-500/20 rounded-xl mb-6 overflow-hidden relative group cursor-pointer border border-gray-700/50">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 bg-[#EBC7DD]/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-[#EBC7DD]/20">
                                                <TrendingUp className="h-8 w-8 text-[#EBC7DD]" />
                                            </div>
                                            <p className="text-white text-sm font-bold mb-1">{video.title}</p>
                                            <div className="flex items-center justify-center space-x-3 text-xs text-gray-400 font-medium">
                                                <span className="flex items-center gap-1">👁️ {video.views} vistas</span>
                                                <span className="flex items-center gap-1">❤️ {video.likes} likes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <a
                                            href={video.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-2.5 bg-[#EBC7DD] hover:bg-[#D4AFCB] text-white text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-[#EBC7DD]/40"
                                        >
                                            Ver en TikTok
                                        </a>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-white font-bold">{video.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{video.description}</p>
                                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-1">
                                                <Heart className="w-4 h-4 text-[#EBC7DD]" />
                                                <span className="text-xs text-gray-400">{video.likes} likes</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Eye className="w-4 h-4 text-blue-500" />
                                                <span className="text-xs text-gray-400">{video.views} vistas</span>
                                            </div>
                                        </div>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{video.time}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold mb-8"
                        >
                            <span className="bg-gradient-to-r from-white to-[#EBC7DD] bg-clip-text text-transparent">
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
                                className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#EBC7DD] to-purple-600 hover:from-[#D4AFCB] hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300"
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
                                className="w-full md:w-auto flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-[#EBC7DD] to-red-500 hover:from-[#D4AFCB] hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300"
                            >
                                <TrendingUp className="h-5 w-5 rotate-45" />
                                <span>Seguir en TikTok</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RRSS;
