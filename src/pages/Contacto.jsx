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
        <div className="min-h-screen bg-black text-white selection:bg-[#EBC7DD]/30">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EBC7DD]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#EBC7DD]/5 rounded-full blur-2xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center">
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
                                Definamos tu próximo
                            </span>
                            <span style={{ color: '#EBC7DD' }} className="block">
                                paso, juntos.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                        >
                            Queremos entender tu marca, tus objetivos y tus retos para construir contigo una estrategia que realmente funcione. Desde la idea hasta la ejecución, estamos aquí para pensar, crear y acompañarte en cada paso.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="py-24 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Form Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
                            >
                                <h2 className="text-3xl font-bold text-white mb-8">Cuéntanos sobre tu proyecto</h2>
                                <form className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Nombre o Empresa</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#EBC7DD] focus:outline-none focus:ring-2 focus:ring-[#EBC7DD]/20 text-white placeholder-gray-400 transition-all duration-300"
                                                placeholder="Tu nombre o empresa"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#EBC7DD] focus:outline-none focus:ring-2 focus:ring-[#EBC7DD]/20 text-white placeholder-gray-400 transition-all duration-300"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Servicio de Interés</label>
                                        <div className="relative">
                                            <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#EBC7DD] focus:outline-none focus:ring-2 focus:ring-[#EBC7DD]/20 text-white transition-all duration-300 appearance-none cursor-pointer">
                                                <option value="">Selecciona un servicio</option>
                                                <option value="Producción Audiovisual">Producción Audiovisual</option>
                                                <option value="Desarrollo Web">Desarrollo Web</option>
                                                <option value="Gestión de Redes Sociales">Gestión de Redes Sociales</option>
                                                <option value="Diseño Gráfico & Branding">Diseño Gráfico & Branding</option>
                                                <option value="Consultoría Creativa & Estratégica">Consultoría Creativa & Estratégica</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Mensaje</label>
                                        <textarea
                                            rows="6"
                                            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-[#EBC7DD] focus:outline-none focus:ring-2 focus:ring-[#EBC7DD]/20 text-white placeholder-gray-400 transition-all duration-300 resize-none"
                                            placeholder="Cuéntanos sobre tu proyecto..."
                                        ></textarea>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <a
                                            href="https://api.whatsapp.com/send/?phone=34699984661"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-4 bg-[#25D366] hover:bg-[#075E54] text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                                        >
                                            <MessageSquare className="h-5 w-5" />
                                            <span>WhatsApp</span>
                                        </a>
                                        <button className="px-6 py-4 bg-[#EBC7DD] hover:bg-[#d8b0c8] text-black font-semibold rounded-lg transition-all duration-300">
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            </motion.div>

                            {/* Info Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                                    <h3 className="text-2xl font-bold text-white mb-8">Información de Contacto</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-[#EBC7DD]/10 rounded-xl flex items-center justify-center group-hover:bg-[#EBC7DD]/20 transition-colors duration-300 shrink-0">
                                                <Phone className="w-6 h-6 text-[#EBC7DD]" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm mb-1">Teléfono / WhatsApp</p>
                                                <p className="text-white font-medium text-lg">+34 699 984 661</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-[#EBC7DD]/10 rounded-xl flex items-center justify-center group-hover:bg-[#EBC7DD]/20 transition-colors duration-300 shrink-0">
                                                <Mail className="w-6 h-6 text-[#EBC7DD]" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm mb-1">Email</p>
                                                <p className="text-white font-medium text-lg">contacto@eastglobal.es</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-[#EBC7DD]/10 rounded-xl flex items-center justify-center group-hover:bg-[#EBC7DD]/20 transition-colors duration-300 shrink-0">
                                                <MapPin className="w-6 h-6 text-[#EBC7DD]" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm mb-1">Ubicación</p>
                                                <p className="text-white font-medium text-lg">Calle ARZOBISPO MAYORAL, 16,<br />Valencia, España</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 group">
                                            <div className="w-12 h-12 bg-[#EBC7DD]/10 rounded-xl flex items-center justify-center group-hover:bg-[#EBC7DD]/20 transition-colors duration-300 shrink-0">
                                                <Clock className="w-6 h-6 text-[#EBC7DD]" />
                                            </div>
                                            <div>
                                                <p className="text-gray-400 text-sm mb-1">Horario</p>
                                                <p className="text-white font-medium text-lg">Lun - Vie: 9:00 - 18:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                                    <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
                                    <div className="flex space-x-4">
                                        <a href="https://instagram.com/eastglobal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-[#EBC7DD] rounded-xl flex items-center justify-center transition-all duration-300 group">
                                            <Instagram className="h-6 w-6 text-gray-400 group-hover:text-white" />
                                        </a>
                                        <a href="https://linkedin.com/company/eastglobal" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 group">
                                            <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-24 bg-gray-900/30 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h2>
                            <p className="text-xl text-gray-400">Lo importante es tener respuestas claras antes de empezar.</p>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden"
                                >
                                    <details className="group">
                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                            <span className="text-lg font-bold text-white group-open:text-[#EBC7DD] transition-colors">
                                                {faq.question}
                                            </span>
                                            <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </details>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacto;
