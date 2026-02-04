import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Heart, Zap } from 'lucide-react';

const ValuesSection = () => {
    const values = [
        {
            title: 'Estrategia',
            desc: 'Cada proyecto comienza con una estrategia sólida basada en datos precisos y análisis profundo del mercado.',
            icon: Target
        },
        {
            title: 'Equipo',
            desc: 'Profesionales especializados y apasionados en cada área del marketing digital y la creatividad.',
            icon: Users
        },
        {
            title: 'Innovación',
            desc: 'Adoptamos las últimas tecnologías y tendencias para mantener a nuestros clientes a la vanguardia.',
            icon: Lightbulb
        },
        {
            title: 'Excelencia',
            desc: 'Comprometidos con la calidad superior y resultados que superan las expectativas.',
            icon: Award
        },
        {
            title: 'Pasión',
            desc: 'Amamos lo que hacemos y esa pasión se refleja en cada proyecto que emprendemos.',
            icon: Heart
        },
        {
            title: 'Agilidad',
            desc: 'Metodologías ágiles que nos permiten adaptarnos rápidamente a los cambios del mercado.',
            icon: Zap
        }
    ];

    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Nuestros <span className="text-brand">valores</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Los principios que guían cada decisión y definen nuestra cultura organizacional.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {values.map((value, idx) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group text-center p-4 hover:p-6 transition-all duration-300 relative"
                        >
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-gradient-to-br from-brand to-[#D4AFCB] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 relative z-10">
                                    <value.icon className="text-black w-10 h-10" />
                                </div>
                                <div className="absolute -inset-4 bg-brand/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">
                                {value.title}
                            </h4>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
