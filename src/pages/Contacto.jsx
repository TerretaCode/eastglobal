import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Linkedin, MessageSquare, ChevronDown } from 'lucide-react';

const Contacto = () => {
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
        <div className="min-h-[100dvh] bg-black text-white selection:bg-[#EBC7DD]/30 overflow-x-hidden w-full">
            {/* 
               Mobile-First Hero Section 
               - Removed 'h-screen' to prevent cutoff on small screens
               - Added generous pt-32 (mobile) and pt-48 (desktop) to clear fixed navbar
            */}
            <section className="relative w-full pt-32 pb-12 md:pt-48 md:pb-24 px-4 overflow-hidden">
                {/* Background Decor - Fixed positioning to stay out of flow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#EBC7DD]/10 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
                    <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#EBC7DD]/5 rounded-full blur-[80px] opacity-30 mix-blend-screen" />
                </div>

                <div className="container mx-auto relative z-10 max-w-5xl">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
                        >
                            <span className="block text-white">Definamos tu</span>
                            <span className="block text-white">próximo paso,</span>
                            <span className="block text-[#EBC7DD]">juntos.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
                        >
                            Queremos entender tu marca, tus objetivos y tus retos.
                            Desde la idea hasta la ejecución, estamos aquí para crear.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Main Content Form & Info */}
            <section className="relative z-10 py-12 md:py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/5 shadow-2xl"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Cuéntanos tu proyecto</h2>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Nombre</label>
                                        <input
                                            type="text"
                                            placeholder="Tu nombre o empresa"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#EBC7DD] focus:ring-1 focus:ring-[#EBC7DD] transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="tu@email.com"
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#EBC7DD] focus:ring-1 focus:ring-[#EBC7DD] transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Servicio Interés</label>
                                    <div className="relative">
                                        <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#EBC7DD] focus:ring-1 focus:ring-[#EBC7DD] transition-all outline-none appearance-none cursor-pointer">
                                            <option value="" className="text-gray-500">Selecciona un servicio</option>
                                            <option value="audiovisual">Producción Audiovisual</option>
                                            <option value="web">Desarrollo Web</option>
                                            <option value="rrss">Redes Sociales</option>
                                            <option value="branding">Branding y Diseño</option>
                                            <option value="consultoria">Consultoría</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Mensaje</label>
                                    <textarea
                                        rows="5"
                                        placeholder="¿Qué tienes en mente?"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-[#EBC7DD] focus:ring-1 focus:ring-[#EBC7DD] transition-all outline-none resize-none"
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <a
                                        href="https://wa.me/34699984661"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 font-semibold py-4 rounded-xl transition-all"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        <span className="hidden sm:inline">WhatsApp</span>
                                    </a>
                                    <button
                                        type="submit"
                                        className="bg-[#EBC7DD] hover:bg-[#EBC7DD]/90 text-black font-bold py-4 rounded-xl transition-all"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </motion.div>

                        {/* Contact Info Side */}
                        <div className="space-y-8 lg:pt-10">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                    <div className="w-12 h-12 bg-[#EBC7DD]/10 rounded-full flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-[#EBC7DD]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-400 mb-1">Llámanos</h3>
                                        <p className="text-xl text-white font-medium">+34 699 984 661</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                    <div className="w-12 h-12 bg-[#EBC7DD]/10 rounded-full flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6 text-[#EBC7DD]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-400 mb-1">Escríbenos</h3>
                                        <p className="text-xl text-white font-medium">contacto@eastglobal.es</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                                    <div className="w-12 h-12 bg-[#EBC7DD]/10 rounded-full flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-[#EBC7DD]" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-medium text-gray-400 mb-1">Visítanos</h3>
                                        <p className="text-xl text-white font-medium">Calle ARZOBISPO MAYORAL, 16</p>
                                        <p className="text-gray-400">Valencia, España</p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <h3 className="text-lg font-bold text-white mb-4">Síguenos en redes</h3>
                                    <div className="flex gap-4">
                                        <a href="https://instagram.com/eastglobal" target="_blank" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-400 hover:text-[#EBC7DD] hover:scale-105 transition-all border border-white/5 hover:border-[#EBC7DD]/50">
                                            <Instagram className="w-7 h-7" />
                                        </a>
                                        <a href="https://linkedin.com/company/eastglobal" target="_blank" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:scale-105 transition-all border border-white/5 hover:border-[#0077b5]/50">
                                            <Linkedin className="w-7 h-7" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
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
                                        <span className="font-medium text-lg text-white group-open:text-[#EBC7DD] transition-colors pr-8">
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
        </div>
    );
};

export default Contacto;
