import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Heart, Zap } from 'lucide-react';

const Nosotros = () => {
    const stats = [
        { label: 'Clientes', value: '20+' },
        { label: 'Años Experiencia', value: '4' },
        { label: 'Satisfacción', value: '98%' },
        { label: 'Soporte', value: '24/7' }
    ];

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
        <div className="bg-black text-white selection:bg-[#EBC7DD]/30">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/equiporesponsive-DtZUJ231.jpeg"
                        alt="Equipo East Global"
                        className="w-full h-full object-cover object-center opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center pt-20">
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
                        <span style={{ color: '#EBC7DD' }} className="block">Conócenos</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 50,
                            damping: 20,
                            mass: 1,
                            delay: 0.3
                        }}
                        className="text-[18px] sm:text-[20px] md:text-[24px] text-[#D1D5DB] mb-12 sm:mb-16 max-w-4xl mx-auto leading-[32px] font-normal"
                    >
                        Somos más que una agencia. Somos arquitectos de experiencias digitales,
                        creadores de historias que conectan y estrategas que transforman visiones en realidades.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
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
                                <span className="text-[#EBC7DD]">EAST</span>
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
                                className="absolute -inset-4 bg-gradient-to-r from-[#EBC7DD]/20 to-transparent rounded-2xl blur-xl"
                            />
                            <div
                                className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                            >
                                <div className="grid grid-cols-2 gap-8">
                                    {stats.map((stat, idx) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="text-4xl font-bold text-[#EBC7DD] mb-2">{stat.value}</div>
                                            <div className="text-gray-400 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-zinc-950/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Nuestro <span className="text-[#EBC7DD]">equipo</span>
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
                                <div className="relative overflow-hidden rounded-2xl h-80 mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#EBC7DD] transition-colors">{member.name}</h3>
                                <p className="text-[#EBC7DD]/80 font-medium text-sm mb-4 uppercase tracking-wider">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Nuestros <span className="text-[#EBC7DD]">valores</span>
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
                                    <div className="w-20 h-20 bg-gradient-to-br from-[#EBC7DD] to-[#D4AFCB] rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 relative z-10">
                                        <value.icon className="text-black w-10 h-10" />
                                    </div>
                                    <div className="absolute -inset-4 bg-[#EBC7DD]/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-[#EBC7DD] transition-colors duration-300">
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
        </div>
    );
};

export default Nosotros;
