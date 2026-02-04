import React from 'react';
import Image from '../common/Image';
import { motion } from 'framer-motion';

const TeamSection = () => {
    const team = [
        {
            name: 'Guillermo Llombart',
            role: 'Project & Strategy Lead | Co-Founder',
            image: '/guillermo.png',
            description: 'Convierte la visión de los clientes en una hoja de ruta clara, creativa y ejecutable.'
        },
        {
            name: 'Carla Barea',
            role: 'Creative Director & Digital Impact | Co-Founder',
            image: '/assets/carla-J9HLPiAw.jpg',
            description: 'Transforma ideas en conceptos visuales que impactan y conectan con la audiencia digital.'
        },
        {
            name: 'César Barea',
            role: 'Head of Film & Co-Founder',
            image: '/assets/cesar-K5w9RQgJ.jpg',
            description: 'Dirige la narrativa visual de cada proyecto con una mirada cinematográfica y emocional.'
        },
        {
            name: 'Andrea Prados',
            role: 'Brand & Graphic Designer',
            image: '/assets/andrea-BI9Hd6MU.jpg',
            description: 'Da forma visual a la identidad de las marcas con diseños que comunican con intención y estilo.'
        },
        {
            name: 'Lydia Sanz',
            role: 'Performance Marketing Specialist',
            image: '/assets/lydia-CfF0citA.jpg',
            description: 'Optimiza campañas para que cada pieza de contenido llegue más lejos y genere resultados reales.'
        },
        {
            name: 'Silvia Rumi',
            role: 'Social Media Manager',
            image: '/assets/silvia-BXlNEGsi.png',
            description: 'Convierte ideas en estrategias sociales con ritmo, coherencia y comunidad.'
        }
    ];

    return (
        <section className="py-24 bg-zinc-950/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nuestro <span className="text-brand">equipo</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        El equipo que piensa, crea y acompaña en cada paso: conócenos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl h-80 mb-6 aspect-[3/4]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    width="400"
                                    height="533"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-brand transition-colors">{member.name}</h3>
                            <p className="text-brand/80 font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                            <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
