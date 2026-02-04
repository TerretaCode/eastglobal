import React, { useRef } from 'react';
import { trackEvent } from '../../utils/analytics';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Waves, Search, FileEdit, Presentation, Trophy, Users, Target, Rocket } from 'lucide-react';

const ProcessTimeline = () => {
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
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/3 rounded-full blur-3xl"></div>
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
                            background: 'linear-gradient(to bottom, rgb(235, 199, 221), #DB2777)'
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
                                            className="absolute inset-0 rounded-full bg-brand shadow-brand/50"
                                        />

                                        <motion.div
                                            style={{
                                                color: useTransform(scrollYProgress, [threshold - 0.05, threshold], ["rgb(235, 199, 221)", "#000000"])
                                            }}
                                            className="relative z-30"
                                        >
                                            <item.icon className="w-5 h-5 transition-colors duration-300" />
                                        </motion.div>
                                    </div>
                                    <div className="bg-zinc-900/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 hover:border-brand/50 transition-all duration-300">
                                        <h3 className="text-xl md:text-2xl font-bold text-brand mb-2">{item.title}</h3>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Final Transformation Card */}
                <div className="max-w-4xl mx-auto mt-24 relative">
                    <div className="absolute left-8 md:left-1/2 -top-8 transform -translate-x-1/2 w-16 h-16 rounded-full bg-brand flex items-center justify-center z-20 shadow-brand/50">
                        <Rocket className="w-8 h-8 text-black" />
                    </div>
                    <div className="bg-gradient-to-br from-zinc-900 to-black p-8 md:p-12 rounded-[2rem] border border-brand/20 text-center">
                        <h3 className="text-3xl md:text-4xl font-black mb-8 bg-gradient-to-r from-white to-brand bg-clip-text text-transparent">
                            ¡Comienza la Transformación!
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            {[
                                { value: '+100', label: 'Proyectos Exitosos', icon: Trophy },
                                { value: '98%', label: 'Clientes Satisfechos', icon: Users },
                                { value: '100%', label: 'Compromiso', icon: Target },
                            ].map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center">
                                    <stat.icon className="w-8 h-8 text-brand mb-2" />
                                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-300 text-lg mb-8">
                            Más de 50 marcas ya han confiado en nosotros. La tuya puede ser la próxima. ¿Hablamos?
                        </p>
                        <button 
                            onClick={() => trackEvent('click_cta_button', 'Conversion', 'Process Timeline End')}
                            className="px-10 py-4 bg-brand rounded-full text-black font-bold text-lg hover:scale-105 transition-all duration-300 shadow-brand/30"
                        >
                            Comienza Tu Proyecto
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
