import React from 'react';
import { motion } from 'framer-motion';
import { Video, Globe, Megaphone, Palette, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features, imageAlt, imageSrc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-pink-500/50 transition-all duration-500 overflow-hidden"
    >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-gray-900/80 to-gray-900 z-10" />
            {/* Fallback color if image is missing */}
            <div className="absolute inset-0 bg-pink-500/5" />
        </div>

        <div className="relative z-20">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-pink-500/20">
                <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
                {title}
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-4 mb-10">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-5 h-5 text-pink-500 mr-3 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-sm font-semibold text-gray-400">Solicita tu presupuesto</span>
                <button className="flex items-center space-x-2 text-pink-500 hover:text-pink-400 transition-all group/btn">
                    <span className="font-bold">Solicitar</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </motion.div>
);

const ProcessStep = ({ number, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="text-center group"
    >
        <div className="relative mb-8 inline-block">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-xl shadow-pink-500/20 relative z-10">
                <span className="text-2xl font-bold text-white">{number}</span>
            </div>
            <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
            {title}
        </h4>
        <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">
            {description}
        </p>
    </motion.div>
);

const Servicios = () => {
    const allServices = [
        {
            icon: Video,
            title: "Producción Audiovisual",
            description: "Visuales que cuentan, emocionan y elevan tu marca. Desde la idea hasta la última edición.",
            features: ["Guion, rodaje y edición profesional", "Contenido para redes sociales", "Spots publicitarios y corporativos"],
        },
        {
            icon: Globe,
            title: "Desarrollo Web",
            description: "Tu web no es solo un sitio: es tu oficina 24/7. Hacemos que sea rápida, bonita y vendedora.",
            features: ["Diseño UX/UI de alto impacto", "Webs corporativas y landing pages", "E-commerce y soluciones a medida"],
        },
        {
            icon: Megaphone,
            title: "Gestión de RRSS",
            description: "No solo publicamos contenido: construimos comunidades y generamos ruido del bueno.",
            features: ["Estrategia de contenidos", "Gestión de comunidades acticas", "Publicidad pagada (Ads)"],
        },
        {
            icon: TrendingUp,
            title: "Growth Marketing",
            description: "Escalamos tu negocio con estrategias basadas en datos y resultados reales.",
            features: ["Embudos de venta optimizados", "SEO y posicionamiento", "Análisis de métricas y KPI's"],
        },
        {
            icon: Palette,
            title: "Branding & Identidad",
            description: "Le damos alma a tu marca. Diseño que conecta y perdura en la mente del consumidor.",
            features: ["Creación de logotipos", "Manual de identidad visual", "Rediseño de marca (Rebranding)"],
        },
        {
            icon: Users,
            title: "Eventos & Activaciones",
            description: "Creamos experiencias memorables que acercan tu marca a las personas.",
            features: ["Organización integral", "Activaciones de marca", "Cobertura audiovisual en vivo"],
        }
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/70 z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                    {/* Background decoration */}
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                            <span className="block text-white">Lo que tu marca merece.</span>
                            <span className="block bg-gradient-to-r from-pink-500 via-pink-600 to-pink-400 bg-clip-text text-transparent">
                                Así de simple.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Estrategia, creatividad y acción. Así llevamos tu marca al siguiente nivel.
                            No vendemos humo, vendemos impacto.
                        </p>
                        <button className="px-10 py-5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white font-bold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300">
                            Ver proyectos
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-4 md:px-6 bg-black relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, index) => (
                            <ServiceCard
                                key={index}
                                {...service}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-4 md:px-6 bg-gradient-to-b from-black to-gray-900/20 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Nuestro Proceso</h2>
                        <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
                        <ProcessStep
                            number="01"
                            title="Análisis & Estrategia"
                            description="Entendemos el contexto, investigamos el mercado y definimos la dirección ganadora."
                            delay={0}
                        />
                        <ProcessStep
                            number="02"
                            title="Diseño & Desarrollo"
                            description="Damos forma a la idea con creatividad y técnica, puliendo cada detalle."
                            delay={0.1}
                        />
                        <ProcessStep
                            number="03"
                            title="Implementación"
                            description="Lanzamos al mundo con precisión, asegurando que todo funcione a la perfección."
                            delay={0.2}
                        />
                        <ProcessStep
                            number="04"
                            title="Optimización"
                            description="Medimos, analizamos y mejoramos. El éxito es un proceso continuo."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-pink-500 to-pink-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-pink-500/20"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight">
                                ¿Listo para elevar tu marca?
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
                                No esperes más para tener la presencia digital que mereces.
                                Hablemos y hagámoslo realidad.
                            </p>
                            <button className="px-12 py-6 bg-white text-pink-600 rounded-full font-black text-xl hover:scale-105 hover:bg-gray-100 transition-all shadow-2xl">
                                Contáctanos ahora
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Servicios;
