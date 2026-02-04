import React from 'react';
import SEO from '../components/common/SEO';
import ServiceCard from '../components/servicios/ServiceCard';
import ServicesHero from '../components/servicios/ServicesHero';
import ProcessSection from '../components/servicios/ProcessSection';
import ServicesCTA from '../components/servicios/ServicesCTA';
import { Video, Globe, Share2, Palette, TrendingUp, Megaphone, Target } from 'lucide-react';

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
            <SEO 
                title="Servicios"
                description="Descubre cómo podemos potenciar tu marca: Producción Audiovisual, Desarrollo Web, RRSS, Branding y Consultoría Estratégica."
            />
            <ServicesHero />

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

            <ProcessSection />
            <ServicesCTA />
        </div>
    );
};

export default Servicios;
