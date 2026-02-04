import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Heart, TrendingUp } from 'lucide-react';

const SocialStatsGrid = () => {
    const socialStats = [
        {
            platform: "Instagram",
            handle: "@eastglobal",
            followers: "750",
            engagement: "8.2%",
            trending: "En crecimiento",
            icon: Instagram,
            color: "from-brand to-purple-600",
            hoverBorder: "hover:border-brand/50"
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
            color: "from-brand to-red-500",
            hoverBorder: "hover:border-brand/50"
        }
    ];

    return (
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
                                        <Heart className="w-4 h-4 text-brand" />
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
    );
};

export default SocialStatsGrid;
