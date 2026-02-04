import React from 'react';
import { motion } from 'framer-motion';
import { Video, Globe, Share2, Palette, TrendingUp, Megaphone, Target, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features, imageAlt, imageSrc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-[#EBC7DD]/50 transition-all duration-500 overflow-hidden"
    >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/90 to-black z-10" />
            <div className="absolute inset-0 bg-[#EBC7DD]/5 group-hover:bg-[#EBC7DD]/10 transition-colors z-20" />
        </div>

        <div className="relative z-20">
            <div className="w-16 h-16 bg-[#EBC7DD]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-[#EBC7DD]/5 border border-[#EBC7DD]/20">
                <Icon className="w-8 h-8 text-[#EBC7DD]" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#EBC7DD] transition-colors">
                {title}
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-4 mb-10">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-5 h-5 text-[#EBC7DD] mr-3 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-sm font-semibold text-gray-400">Solicita tu presupuesto</span>
                <button className="flex items-center space-x-2 text-[#EBC7DD] hover:text-[#E9B7CE] transition-all group/btn">
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
            <div className="w-20 h-20 bg-[#EBC7DD]/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-xl shadow-[#EBC7DD]/5 border border-[#EBC7DD]/20 relative z-10">
                <span className="text-2xl font-bold text-[#EBC7DD]">{number}</span>
            </div>
            <div className="absolute inset-0 bg-[#EBC7DD]/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-[#EBC7DD] transition-colors">
            {title}
        </h4>
        <p className="text-gray-400 leading-relaxed max-w-sm mx-auto group-hover:text-gray-300 transition-colors">
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
            imageSrc: "/ContenidoAudiovisual-BG24RDQD.png",
            features: [
                "Guion, rodaje y edición profesional",
                "Contenido para redes, campañas y web",
                "Dirección creativa personalizada",
                "Sesiones fotográficas"
            ],
        },
        {
            icon: Globe,
            title: "Desarrollo Web",
            description: "Tu marca necesita un espacio propio. Diseñamos webs que comunican, funcionan y representan.",
            imageSrc: "/development-HJ7R4B-K.png",
            features: [
                "Diseño personalizado (UX/UI)",
                "Desarrollo responsive y rápido",
                "Integración con herramientas clave",
                "Dirección de arte y copywriting opcional"
            ],
        },
        {
            icon: Share2,
            title: "Gestión de Redes Sociales",
            description: "Construimos una presencia con intención, estética y consistencia. No solo posteamos: generamos conexión.",
            imageSrc: "/broadcasting-BSk3K8yQ (1).png",
            features: [
                "Community management diario",
                "Calendario visual + editorial",
                "Creatividades adaptadas por canal",
                "Informes mensuales y análisis"
            ],
        },
        {
            icon: Palette,
            title: "Diseño Gráfico & Branding",
            description: "Diseños con carácter. Marcas con identidad. Creamos desde lo visual, construimos desde el propósito.",
            imageSrc: "/branding-5eY4-Uy7.png",
            features: [
                "Diseño de logotipo y sistema visual",
                "Manual de identidad completo",
                "Piezas gráficas para campañas y redes",
                "Aplicaciones de marca adaptadas"
            ],
        },
        {
            icon: TrendingUp,
            title: "Consultoría Creativa & Estratégica",
            description: "Aterrizamos ideas, definimos dirección y te acompañamos con visión.",
            imageSrc: "/ConsultoriaDigital-CN1dPiVG.png",
            features: [
                "Auditoría de marca y canales",
                "Estrategia de contenido y posicionamiento",
                "Definición de tono, pilares y enfoque",
                "Acompañamiento creativo mensual"
            ],
        },
        {
            icon: Megaphone,
            title: "Broadcasting & Streaming",
            description: "Formatos en directo que conectan, convierten y posicionan tu marca en tiempo real. Desde podcasts hasta retransmisiones multicanal. Powered By Gobo.",
            imageSrc: "/broadcasting-BSk3K8yQ.png",
            features: [
                "Producción y realización de streaming profesional",
                "Emisión en plataformas como YouTube, Twitch o LinkedIn",
                "Formatos adaptados: entrevistas, webinars, eventos o podcasts",
                "Diseño de overlays, banners y materiales de emisión"
            ],
        },
        {
            icon: Target,
            title: "Paid Media – Meta & Google",
            description: "Diseñamos y gestionamos publicidad digital en Meta Ads (Instagram y Facebook) y Google Ads para que tu marca llegue justo donde tiene que llegar.",
            imageSrc: "/PaidMedia-HfjsM50U.png",
            features: [
                "Estrategia, configuración y segmentación de campañas",
                "Creatividades adaptadas a cada formato y plataforma",
                "Optimización continua y análisis de resultados",
                "Informes claros y enfocados a conversión real"
            ],
        }
    ];

    return (
        <div className="bg-black">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/servicios-DwMsQcYr.jpg"
                        alt="Servicios Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">
                            <span className="block text-white">Lo que tu marca merece.</span>
                            <span className="block text-[#EBC7DD]">
                                Así de simple.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                            Estrategia, creatividad y acción. Así llevamos tu marca al siguiente nivel.
                        </p>
                        <button className="px-12 py-6 bg-[#EBC7DD] hover:bg-[#E9B7CE] text-zinc-950 font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(235,199,221,0.2)]">
                            Ver proyectos
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-4 md:px-6 bg-black relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.slice(0, 3).map((service, index) => (
                            <ServiceCard key={index} {...service} delay={index * 0.1} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                        {allServices.slice(3, 5).map((service, index) => (
                            <ServiceCard key={index + 3} {...service} delay={(index + 3) * 0.1} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
                        {allServices.slice(5, 7).map((service, index) => (
                            <ServiceCard key={index + 5} {...service} delay={(index + 5) * 0.1} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 px-4 md:px-6 bg-gradient-to-b from-black to-gray-900/20 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="text-center mb-24 max-w-6xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold text-white mb-8"
                        >
                            Nuestro proceso tiene guion,<br />
                            <span className="text-[#EBC7DD]">pero no es ficción.</span>
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

            {/* CTA Section */}
            <section className="py-32 px-4 md:px-6 relative overflow-hidden">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-[#EBC7DD]/20 glass-effect shadow-2xl shadow-[#EBC7DD]/5"
                    >
                        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EBC7DD]/30 to-transparent" />

                        <div className="relative z-10 flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="w-16 h-16 bg-[#EBC7DD]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#EBC7DD]/20 shadow-[0_0_20px_rgba(235,199,221,0.1)]"
                            >
                                <MessageSquare className="w-8 h-8 text-[#EBC7DD]" />
                            </motion.div>

                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
                                Todo gran proyecto empieza con una <span className="text-[#EBC7DD]">conversación.</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                Hablemos. Lo tuyo tiene potencial. Nosotros, las herramientas.
                            </p>

                            <Link
                                to="/contacto"
                                className="group relative px-12 py-6 bg-[#EBC7DD] text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(235,199,221,0.3)] hover:shadow-[0_0_50px_rgba(235,199,221,0.5)] overflow-hidden"
                            >
                                <span className="relative z-10">Quiero empezar</span>
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Background Blobs for the section */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EBC7DD]/5 rounded-full blur-[120px] pointer-events-none" />
            </section>
        </div>
    );
};

export default Servicios;
