import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const LinkedInFeed = () => {
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

    return (
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
    );
};

export default LinkedInFeed;
