import React from 'react';
import { motion } from 'framer-motion';
import ProcessStep from './ProcessStep';

const ProcessSection = () => {
    return (
        <section className="py-32 px-4 md:px-6 bg-gradient-to-b from-black to-gray-900/20 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-24 max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8"
                    >
                        Nuestro proceso tiene guion,<br />
                        <span className="text-brand">pero no es ficción.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                    >
                        Como en toda gran historia, seguimos una estructura clara. Porque cuando cada paso está bien construido, el resultado impacta como una buena peli: te atrapa, te emociona y se queda contigo.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
                    <ProcessStep
                        number="01"
                        title="Análisis & Estrategia"
                        description="Como el primer acto de una película: entendemos el contexto, investigamos el mercado y definimos la dirección."
                        delay={0}
                    />
                    <ProcessStep
                        number="02"
                        title="Diseño & Desarrollo"
                        description="Creamos la identidad visual y las herramientas necesarias para que tu marca brille en pantalla."
                        delay={0.1}
                    />
                    <ProcessStep
                        number="03"
                        title="Implementación"
                        description="Lanzamos al mundo con precisión, cuidando cada detalle como si estuviéramos rodando la escena más importante."
                        delay={0.2}
                    />
                    <ProcessStep
                        number="04"
                        title="Optimización"
                        description="El montaje final: medimos, ajustamos y mejoramos para que el resultado no solo guste, sino que funcione."
                        delay={0.3}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
