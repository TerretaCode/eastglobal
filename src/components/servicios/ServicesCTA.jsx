import React from 'react';
import { trackEvent } from '../../utils/analytics';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
    return (
        <section className="py-32 px-4 md:px-6 relative overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-brand/20 glass-effect shadow-2xl shadow-brand/5"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 border border-brand/20 shadow-[0_0_20px_rgba(235,199,221,0.1)]"
                        >
                            <MessageSquare className="w-8 h-8 text-brand" />
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                            Todo gran proyecto empieza con una <span className="text-brand">conversación.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            Hablemos. Lo tuyo tiene potencial. Nosotros, las herramientas.
                        </p>

                        <Link
                            to="/contacto"
                            onClick={() => trackEvent('click_cta_button', 'Conversion', 'Services CTA')}
                            className="group relative px-12 py-6 bg-brand text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-brand/30 hover:shadow-[0_0_50px_rgba(235,199,221,0.5)] overflow-hidden"
                        >
                            <span className="relative z-10">Quiero empezar</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Background Blobs for the section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default ServicesCTA;
