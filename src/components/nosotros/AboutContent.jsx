import React from 'react';
import { motion } from 'framer-motion';

const AboutContent = () => {
    const stats = [
        { label: 'Clientes', value: '20+' },
        { label: 'Años Experiencia', value: '4' },
        { label: 'Satisfacción', value: '98%' },
        { label: 'Soporte', value: '24/7' }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold mb-8">
                            <span className="text-white">Somos </span>
                            <span className="text-brand">EAST</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-justify">
                            <p>
                                EAST nace de la necesidad de contar, pero también de sentir. De crear
                                imágenes que no solo se vean, sino que hablen. Sonidos que no solo
                                acompañen, sino que digan algo. Marcas que no solo existan, sino que se
                                expresen con verdad.
                            </p>
                            <p>
                                Somos un equipo pequeño con mirada sensible y cabeza estratégica. Nos
                                gustan las cosas bien hechas, con intención, con ritmo, con alma. No
                                creemos en los atajos. Creemos en el proceso, en la escucha y en la
                                forma única que tiene cada proyecto de tomar vida.
                            </p>
                            <p>
                                Colaboramos con marcas que cuidan lo que hacen. Que entienden que lo
                                visual no es solo estética: es identidad, es emoción, es impacto.
                            </p>
                            <p>
                                Aquí no trabajamos con moldes. Cada historia pide su lenguaje. Nosotros
                                solo ayudamos a que lo encuentre.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div
                            className="absolute -inset-4 bg-gradient-to-r from-brand/20 to-transparent rounded-2xl blur-xl"
                        />
                        <div
                            className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                        >
                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat, idx) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-4xl font-bold text-brand mb-2">{stat.value}</div>
                                        <div className="text-gray-400 text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
