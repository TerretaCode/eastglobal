import React from 'react';
import Image from '../common/Image';

const TrustLogos = () => {
    return (
        <section className="py-20 bg-black/50 backdrop-blur-sm border-b border-white/5 overflow-hidden">
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
                            <Image
                                src={`/assets/${i}-RwQrWFuB.png`.replace('1-RwQrWFuB', `${i}`).replace('2-RwQrWFuB', '1-RwQrWFuB')}
                                alt={`Cliente ${i}`}
                                className="h-12 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group mt-4">
                <div className="py-8 animate-marquee-rtl whitespace-nowrap flex items-center">
                    {[10, 11, 12, 13, 14, 15, 16, 17, 10, 11, 12, 13, 14, 15, 16, 17].map((i, idx) => (
                        <div key={idx} className="mx-8 md:mx-12 min-w-[120px] flex justify-center grayscale hover:grayscale-0 transition-all duration-500">
                            <Image
                                src={`/assets/${i}-B2MGW41f.png`.replace('17-B2MGW41f', `${i}`)}
                                alt={`Cliente ${i}`}
                                className="h-12 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustLogos;
