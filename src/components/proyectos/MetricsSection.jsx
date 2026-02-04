import React from 'react';
import { motion } from 'framer-motion';

const MetricsSection = () => {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/5 rounded-full blur-[120px]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tighter">Impacto Medible</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-6xl md:text-7xl font-bold text-brand mb-4"
                            >
                                500+
                            </motion.div>
                            <div className="text-xl font-bold mb-2">Proyectos Exitosos</div>
                            <p className="text-zinc-500 text-sm">Cada uno superando expectativas</p>
                        </div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-7xl font-bold text-brand mb-4"
                            >
                                300%
                            </motion.div>
                            <div className="text-xl font-bold mb-2">Crecimiento Promedio</div>
                            <p className="text-zinc-500 text-sm">ROI promedio de nuestros clientes</p>
                        </div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-6xl md:text-7xl font-bold text-brand mb-4"
                            >
                                98%
                            </motion.div>
                            <div className="text-xl font-bold mb-2">Satisfacción</div>
                            <p className="text-zinc-500 text-sm">Clientes que recomiendan nuestros servicios</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
