import React from 'react';
import Image from '../common/Image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SuccessCases = () => {
    const successCases = [
        {
            title: 'Padel Courts Deluxe',
            description: 'Posicionamos al líder mundial en pistas de pádel como referente digital a nivel internacional. Una estrategia B2B que combina estética, visibilidad y resultados reales.',
            image: '/assets/PORTADAPCDLX-B8ddVZYT.jpg',
            tags: ['Web', 'Content Strategy', 'SEO Internacional', 'RRSS'],
            metrics: [
                { label: 'Tráfico orgánico', value: '+57%' },
                { label: 'Leads B2B', value: '1000+' },
                { label: 'ROI', value: '2x' }
            ]
        },
        {
            title: 'GreenSet Worldwide',
            description: 'Impulsamos la presencia digital del mayor fabricante de pistas de tenis del mundo, reforzando su posicionamiento en torneos como el Australian Open.',
            image: '/assets/PORTADAGREENSET-CbzeRQ4M.jpg',
            tags: ['Web', 'Content Strategy', 'SEO Internacional', 'RRSS'],
            metrics: [
                { label: 'Tráfico cualificado', value: '+80%' },
                { label: 'Engagement redes', value: '+60%' },
                { label: 'Torneos WTA', value: 'ATP' }
            ]
        },
        {
            title: 'Orven',
            description: 'Campaña de crecimiento internacional para una marca de palas de pádel premium. Llevamos su identidad y propuesta a nuevos mercados con una estrategia 360º.',
            image: '/assets/PORTADAORVEN-RQyJuE7R.jpg',
            tags: ['SEO Internacional', 'RRSS', 'Content Strategy'],
            metrics: [
                { label: 'Mercados abiertos', value: '5' },
                { label: 'Visibilidad', value: '+200%' },
                { label: 'Distribuidores', value: '50+' }
            ]
        }
    ];

    return (
        <section className="py-32 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Casos de Éxito</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Profundizamos en las estrategias que marcaron un antes y un después para nuestros clientes más exigentes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {successCases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900/20 border border-zinc-800 rounded-[2rem] overflow-hidden group"
                        >
                            <div className="h-48 overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors">{item.title}</h3>
                                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{item.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="text-[10px] px-3 py-1 bg-zinc-800 rounded-full text-zinc-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-3 gap-4 py-6 border-t border-zinc-800">
                                    {item.metrics.map((metric, i) => (
                                        <div key={i} className="text-center">
                                            <div className="text-lg font-bold text-brand">{metric.value}</div>
                                            <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full mt-6 py-4 rounded-xl bg-brand text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-dark transition-all group/btn">
                                    Leer Caso Completo
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessCases;
