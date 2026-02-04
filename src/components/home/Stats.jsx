import React from 'react';
import { Users, TrendingUp, Star, MessageSquare } from 'lucide-react';

const Stats = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand/3 rounded-full blur-3xl"></div>
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
                                    ? 'bg-brand shadow-[0_10px_20px_rgba(235,199,221,0.2)]'
                                    : 'bg-white border-2 border-gray-300'
                                    }`}>
                                    <stat.icon className={`h-10 w-10 ${stat.variant === 'pink' ? 'text-black' : 'text-brand'
                                        }`} />
                                </div>
                                <div className={`absolute -inset-4 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${stat.variant === 'pink' ? 'bg-brand' : 'bg-white'
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
        </section>
    );
};

export default Stats;
