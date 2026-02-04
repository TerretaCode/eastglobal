import React from 'react';
import { trackEvent } from '../../utils/analytics';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/hero-poster.jpg"
                    className="absolute w-full h-full object-cover opacity-40"
                    aria-hidden="true"
                    tabIndex="-1"
                >
                    <source src="https://res.cloudinary.com/dfmakzema/video/upload/q_auto,f_auto/v1770219275/hero-video_mgwhoj.webm" type="video/webm" />
                    <source src="https://res.cloudinary.com/dfmakzema/video/upload/q_auto/v1770219275/hero-video_mgwhoj.mp4" type="video/mp4" />
                    <track kind="captions" src="" label="sin subtítulos" default />
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-6xl mx-auto">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-bold mb-8 sm:mb-10 leading-tight xl:leading-[96px] tracking-tight">
                        <span className="text-white block mb-2 sm:mb-3">
                            Creatividad en forma.
                        </span>
                        <span className="text-brand block">
                            Estrategia en juego.
                        </span>
                    </h1>

                    <p className="text-[18px] sm:text-[20px] md:text-[24px] text-[#D1D5DB] mb-12 sm:mb-16 max-w-4xl mx-auto leading-[32px] font-normal animate-fade-in-up">
                        Impulsamos marcas con estrategia, contenido y propósito. Así de simple.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 animate-fade-in-up-delay">
                        <button
                            onClick={() => trackEvent('click_cta_button', 'Conversion', 'Hero Discovery')}
                            className="group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-gradient-to-r from-brand to-pink-600 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-105 w-full sm:w-auto text-center overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            ></div>
                            <div className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-3">
                                <span className="text-sm sm:text-base">Descubre lo que podemos hacer por ti</span>
                                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                        </button>

                        <button
                            onClick={() => trackEvent('click_projects_button', 'Navigation', 'Hero Projects')}
                            className="group px-6 sm:px-8 md:px-10 py-4 sm:py-5 border-2 border-gray-600 hover:border-brand text-white font-semibold rounded-full transition-all duration-500 hover:bg-brand/10 flex items-center justify-center space-x-2 sm:space-x-3 w-full sm:w-auto"
                        >
                            <Play className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-sm sm:text-base">Ver Nuestros Proyectos</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
