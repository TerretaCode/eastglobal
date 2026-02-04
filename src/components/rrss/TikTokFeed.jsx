import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Heart, Eye } from 'lucide-react';

const TikTokFeed = () => {
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
        <section className="py-24 bg-gray-900/30 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-brand/20">
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
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand to-red-500 hover:from-[#D4AFCB] hover:to-red-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
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
                            className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-brand/50 transition-all duration-300"
                        >
                            <div className="aspect-[9/16] bg-gradient-to-br from-brand/20 to-red-500/20 rounded-xl mb-6 overflow-hidden relative group cursor-pointer border border-gray-700/50">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mb-4 mx-auto border border-brand/20">
                                            <TrendingUp className="h-8 w-8 text-brand" />
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
                                        className="px-6 py-2.5 bg-brand hover:bg-brand-dark text-white text-sm font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-brand/40"
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
                                            <Heart className="w-4 h-4 text-brand" />
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
    );
};

export default TikTokFeed;
