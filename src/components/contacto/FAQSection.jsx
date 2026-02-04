import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
    const faqs = [
        {
            question: "¿Ofrecéis packs o precios cerrados?",
            answer: "Preferimos trabajar con presupuestos a medida. Cada marca es un mundo, y cada proyecto tiene lo suyo. Pero si necesitáis una idea rápida del coste, estamos a un mensaje de distancia."
        },
        {
            question: "¿Trabajáis solo en Valencia o también fuera?",
            answer: "Estamos donde esté el proyecto. Hemos colaborado con marcas de toda España y también del extranjero. Si tenéis la idea, nosotros cogemos la cámara, el micro o el portátil y vamos."
        },
        {
            question: "¿Hacéis proyectos puntuales o solo trabajáis con mensualidades?",
            answer: "Podemos colaborar de forma puntual o de manera continuada. Algunos clientes solo necesitan una campaña o un vídeo, mientras que otros confían en nosotros mes a mes para llevar su estrategia digital. Nos adaptamos a lo que necesitéis."
        },
        {
            question: "¿Qué pasa si necesitamos cambios una vez entregado el proyecto?",
            answer: "Incluimos rondas de ajustes en todos nuestros servicios. Si algo no encaja, lo retocamos. Nuestro objetivo es que el resultado final os represente al 100%. Sin sorpresas, sin prisas."
        },
        {
            question: "¿Podemos combinar varios servicios en un mismo proyecto?",
            answer: "Sí, y de hecho es lo que más nos gusta. Podemos unir estrategia, vídeo, redes y diseño para crear una propuesta más completa y coherente. Cuéntanos lo que tenéis en mente y lo conectamos todo."
        }
    ];

    return (
        <section className="py-24 px-4 bg-zinc-950/50">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Preguntas Frecuentes</h2>
                    <p className="text-gray-400">Todo claro antes de empezar.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900 rounded-2xl border border-white/5 overflow-hidden"
                        >
                            <details className="group">
                                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
                                    <span className="font-medium text-lg text-white group-open:text-brand transition-colors pr-8">
                                        {faq.question}
                                    </span>
                                    <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform shrink-0" />
                                </summary>
                                <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
