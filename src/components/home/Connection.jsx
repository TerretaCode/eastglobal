import React from 'react';
import Image from '../common/Image';

const Connection = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand/3 rounded-full blur-2xl"></div>
            </div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                Conectamos con
                            </span>
                            <br />
                            <span className="text-brand bg-clip-text">
                                personas reales
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
                            Detrás de cada proyecto hay historias, pasiones y objetivos compartidos. Creamos conexiones que trascienden lo digital.
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/5 aspect-[3/2]">
                            <Image
                                src="/FotoHomepage_EncimaLogos-DoYCUdFl.jpg"
                                alt="Equipo EAST trabajando"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                width="1008"
                                height="672"
                                style={{
                                    aspectRatio: '3/2',
                                    width: '100%',
                                    height: 'auto'
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>
                        </div>
                        <div className="absolute -inset-0.5 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-brand to-transparent animate-pulse delay-300"></div>
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand to-transparent animate-pulse delay-700"></div>
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-brand to-transparent animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Connection;
