import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Play, Zap, Users, Globe, BarChart3, TrendingUp, Star, MessageSquare, Waves, Search, FileEdit, Presentation, Trophy, Target, Rocket } from 'lucide-react';

const Home = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#EBC7DD]/30">
            {/* Hero Section */}
            <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute w-full h-full object-cover opacity-40"
                    >
                        <source src="/videoeast-BLt3PZxT.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-6xl mx-auto">
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
                            <span className="text-white block mb-2 sm:mb-3">
                                Creatividad en forma.
                            </span>
                            <span style={{ color: '#EBC7DD' }} className="block">
                                Estrategia en juego.
                            </span>
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
                            Impulsamos marcas con estrategia, contenido y propósito. Así de simple.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 20,
                                mass: 1,
                                delay: 0.5
                            }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8"
                        >
                            <button
                                style={{ background: 'linear-gradient(90deg, #EBC7DD 0%, #DB2777 100%)' }}
                                className="group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 w-full sm:w-auto text-center overflow-hidden"
                            >
                                <div
                                    style={{ background: 'linear-gradient(90deg, #DB2777 0%, #9D174D 100%)' }}
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                ></div>
                                <div className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                                    <span className="text-sm sm:text-base">Descubre lo que podemos hacer por ti</span>
                                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </div>
                            </button>

                            <button
                                className="group px-6 sm:px-8 md:px-10 py-4 sm:py-5 border-2 border-gray-600 hover:border-[#EBC7DD] text-white font-semibold rounded-full transition-all duration-500 hover:bg-[#EBC7DD]/10 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto"
                            >
                                <Play className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                                <span className="text-sm sm:text-base">Ver Nuestros Proyectos</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#EBC7DD]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EBC7DD]/3 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Confianza que se construye con resultados
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Cada proyecto es una historia que construimos juntos. Cada resultado, un paso compartido hacia algo más grande.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
                        {[
                            { label: 'Marcas que ya confían', value: '+20', icon: Users, variant: 'pink' },
                            { label: 'Campañas ejecutadas', value: '+200', icon: TrendingUp, variant: 'white' },
                            { label: 'De relaciones a largo plazo', value: '+90%', icon: Star, variant: 'pink' },
                            { label: 'Respuestas reales. Siempre.', value: '24/7', icon: MessageSquare, variant: 'white' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 relative z-10 ${stat.variant === 'pink'
                                        ? 'bg-[#EBC7DD] shadow-[0_10px_20px_rgba(235,199,221,0.2)]'
                                        : 'bg-white border-2 border-gray-300'
                                        }`}>
                                        <stat.icon className={`h-10 w-10 ${stat.variant === 'pink' ? 'text-black' : 'text-[#EBC7DD]'
                                            }`} />
                                    </div>
                                    <div className={`absolute -inset-4 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${stat.variant === 'pink' ? 'bg-[#EBC7DD]' : 'bg-white'
                                        }`}></div>
                                </div>
                                <div className="text-4xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm md:text-base font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Connection Section */}
            <section className="py-24 bg-black relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EBC7DD]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#EBC7DD]/3 rounded-full blur-2xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    Conectamos con
                                </span>
                                <br />
                                <span style={{ color: '#EBC7DD' }} className="bg-clip-text">
                                    personas reales
                                </span>
                            </h2>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                                Detrás de cada proyecto hay historias, pasiones y objetivos compartidos. Creamos conexiones que trascienden lo digital.
                            </p>
                        </div>
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/5">
                                <img
                                    src="/FotoHomepage_EncimaLogos-DoYCUdFl.jpg"
                                    alt="Equipo EAST trabajando"
                                    className="w-full h-96 md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                            </div>
                            <div className="absolute -inset-0.5 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EBC7DD] to-transparent animate-pulse"></div>
                                <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#EBC7DD] to-transparent animate-pulse delay-300"></div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#EBC7DD] to-transparent animate-pulse delay-700"></div>
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#EBC7DD] to-transparent animate-pulse delay-1000"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Logos (Marquee) */}
            < section className="py-20 bg-black/50 backdrop-blur-sm border-b border-white/5 overflow-hidden" >
                <div className="container mx-auto px-4 mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Marcas que confían en nosotros
                        </span>
                    </h2>
                </div>

                <div className="relative flex overflow-x-hidden group">
                    <div className="py-8 animate-marquee-ltr whitespace-nowrap flex items-center">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i, idx) => (
                            <div key={idx} className="mx-8 md:mx-12 min-w-[120px] flex justify-center grayscale hover:grayscale-0 transition-all duration-500">
                                <img src={`/assets/${i}-RwQrWFuB.png`.replace('1-RwQrWFuB', `${i}`).replace('2-RwQrWFuB', '1-RwQrWFuB')} alt={`Cliente ${i}`} className="h-12 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex overflow-x-hidden group mt-4">
                    <div className="py-8 animate-marquee-rtl whitespace-nowrap flex items-center">
                        {[10, 11, 12, 13, 14, 15, 16, 17, 10, 11, 12, 13, 14, 15, 16, 17].map((i, idx) => (
                            <div key={idx} className="mx-8 md:mx-12 min-w-[120px] flex justify-center grayscale hover:grayscale-0 transition-all duration-500">
                                <img src={`/assets/${i}-B2MGW41f.png`.replace('17-B2MGW41f', `${i}`)} alt={`Cliente ${i}`} className="h-12 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Process Section (Timeline) */}
            < section className="py-32 bg-black relative overflow-hidden" >
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#EBC7DD]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#EBC7DD]/3 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                ¿Cómo Trabajamos?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 mt-8 font-light leading-relaxed">
                            Nos gusta hacer las cosas con intención. Este es nuestro camino, paso a paso.
                        </p>
                    </div>

                    <div ref={containerRef} className="max-w-6xl mx-auto flex flex-col space-y-12 md:space-y-24 relative">
                        {/* Static background line */}
                        <div className="absolute h-full w-1 left-8 md:left-1/2 md:-translate-x-1/2 bg-white/10 rounded-full"></div>

                        {/* Dynamic progress line */}
                        <motion.div
                            style={{
                                scaleY,
                                originY: 0,
                                background: 'linear-gradient(to bottom, #EBC7DD, #DB2777)'
                            }}
                            className="absolute h-full w-1 left-8 md:left-1/2 md:-translate-x-1/2 z-10 rounded-full"
                        />

                        {[
                            {
                                title: 'Nos conoces',
                                desc: 'Te encuentras con EAST, por referencias, redes o nuestra web. Nuestra energía y pasión por el marketing te cautivan: sabes que haremos que tu empresa se dispare como la pólvora en las fallas de Valencia.',
                                icon: Waves,
                                align: 'right'
                            },
                            {
                                title: 'Exploramos juntos',
                                desc: 'En esta fase nos sumergimos en tu mundo para conocer a fondo tus objetivos y necesidades. Queremos entender tu visión y tu industria para ofrecerte soluciones personalizadas.',
                                icon: Search,
                                align: 'left'
                            },
                            {
                                title: 'Diseñamos tu plan',
                                desc: 'Una vez hayamos entendido tus metas y necesidades, nos pondremos manos a la obra para diseñar un plan personalizado, para ofrecerte una estrategia sólida y atractiva.',
                                icon: FileEdit,
                                align: 'right'
                            },
                            {
                                title: 'Presentamos nuestra propuesta',
                                desc: 'Es el momento de enseñarte nuestra propuesta personalizada, acompañada de la propuesta económica. Mostrándote como nuestros servicios y estrategias se alinean a tus objetivos.',
                                icon: Presentation,
                                align: 'left'
                            },
                        ].map((item, index) => {
                            // Calculate threshold for this specific item (roughly index / count)
                            const threshold = (index) / (4 - 1);

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className={`relative flex w-full items-center ${item.align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
                                >
                                    <div className={`w-[calc(100%-5rem)] md:w-1/2 ml-20 md:ml-0 ${item.align === 'right' ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                                        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-10 md:w-12 h-10 md:h-12 flex items-center justify-center z-20">
                                            {/* Static background circle */}
                                            <div className="absolute inset-0 rounded-full border-4 border-white/10 bg-black"></div>

                                            {/* Dynamic active circle */}
                                            <motion.div
                                                style={{
                                                    scale: useTransform(scrollYProgress, [threshold - 0.05, threshold], [0, 1]),
                                                    opacity: useTransform(scrollYProgress, [threshold - 0.05, threshold], [0, 1])
                                                }}
                                                className="absolute inset-0 rounded-full bg-[#EBC7DD] shadow-[0_0_15px_rgba(235,199,221,0.5)]"
                                            />

                                            <motion.div
                                                style={{
                                                    color: useTransform(scrollYProgress, [threshold - 0.05, threshold], ["#EBC7DD", "#000000"])
                                                }}
                                                className="relative z-30"
                                            >
                                                <item.icon className="w-5 h-5 transition-colors duration-300" />
                                            </motion.div>
                                        </div>
                                        <div className="bg-zinc-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 hover:border-[#EBC7DD]/50 transition-all duration-300">
                                            <h3 className="text-xl md:text-2xl font-bold text-[#EBC7DD] mb-2">{item.title}</h3>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Final Transformation Card */}
                    <div className="max-w-4xl mx-auto mt-24 relative">
                        <div className="absolute left-8 md:left-1/2 -top-8 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#EBC7DD] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(235,199,221,0.5)]">
                            <Rocket className="w-8 h-8 text-black" />
                        </div>
                        <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-[2rem] border border-[#EBC7DD]/20 text-center">
                            <h3 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-white to-[#EBC7DD] bg-clip-text text-transparent">
                                ¡Comienza la Transformación!
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                {[
                                    { value: '+100', label: 'Proyectos Exitosos', icon: Trophy },
                                    { value: '98%', label: 'Clientes Satisfechos', icon: Users },
                                    { value: '100%', label: 'Compromiso', icon: Target },
                                ].map((stat, idx) => (
                                    <div key={idx} className="flex flex-col items-center">
                                        <stat.icon className="w-8 h-8 text-[#EBC7DD] mb-2" />
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-300 text-lg mb-8">
                                Más de 50 marcas ya han confiado en nosotros. La tuya puede ser la próxima. ¿Hablamos?
                            </p>
                            <button className="px-10 py-4 bg-[#EBC7DD] rounded-full text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(235,199,221,0.3)]">
                                Comienza Tu Proyecto
                            </button>
                        </div>
                    </div>
                </div>
            </section >

        </div >
    );
};

export default Home;
