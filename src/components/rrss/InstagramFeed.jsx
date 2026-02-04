import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart, Eye } from 'lucide-react';

const InstagramFeed = () => {
    const instagramPosts = [
        { id: 'DMh2LNft_Nb', likes: 45, views: 234, time: 'hace 2h' },
        { id: 'DMZ9USrNCGz', likes: 38, views: 189, time: 'hace 1d' },
        { id: 'DMVp2WrNE3G', likes: 52, views: 312, time: 'hace 2d' }
    ];

    return (
        <section className="py-24 bg-gray-900/30 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                        <Instagram className="h-8 w-8 text-brand" />
                        <h2 className="text-4xl font-bold">Instagram</h2>
                    </div>
                    <p className="text-xl text-gray-300 mb-6">Nuestras últimas creaciones visuales</p>
                    <div className="flex items-center justify-center">
                        <a
                            href="https://www.instagram.com/eastglobal"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-brand to-purple-600 hover:from-[#D4AFCB] hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
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
                            className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-brand/50 transition-all duration-300"
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
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        <Heart className="w-4 h-4 text-brand" />
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
    );
};

export default InstagramFeed;
