import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight, ExternalLink, Play, CheckCircle2 } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Colaboración Padel Courts Deluxe x Martín Di Nenno',
        category: 'Producción Audiovisual',
        description: 'Pieza audiovisual para lanzar la nueva colaboración entre Martín Di Nenno y Padel Courts Deluxe.',
        image: '/assets/Di%20Nenno%20Frames%20Video_1.33.3-BtlZLUDb.jpg',
        tags: ['Vídeo', 'Deporte', 'Pádel'],
        results: [
            'Producción completa en un día: grabación, sonido y dirección creativa',
            'Uso en canales oficiales y medios especializados',
            'Impacto orgánico en redes + alto engagement en las primeras 48h'
        ]
    },
    {
        id: 2,
        title: 'Padel Courts Deluxe - Cajas de Presentación',
        category: 'Diseño Gráfico',
        description: 'Diseño de packaging exclusivo para mostrar piezas clave de las pistas de pádel de forma elegante, minimalista y premium.',
        image: '/assets/Caja_muestras1-mulIPn87.jpg',
        tags: ['Packaging', 'Diseño Gráfico', 'Pádel', 'Experiencia de Marca'],
        results: [
            'Diseño de cajas a medida para destacar el valor del producto físico',
            'Concepto visual alineado con la estética de marca',
            'Aplicación de materiales, acabados y layout funcional',
            'Herramienta clave para ventas y reuniones con distribuidores'
        ]
    },
    {
        id: 3,
        title: 'Aspresso - El club deportivo para ti',
        category: 'Producción Audiovisual',
        description: 'Pieza audiovisual proyectada en los cines Kinepolis para presentar el universo de Aspresso: deporte, bienestar y comunidad.',
        image: '/assets/DSC03747-Crqj848U.jpg',
        tags: ['Deporte', 'Club Deportivo', 'Reconocimiento'],
        results: [
            'Producción audiovisual diseñada para proyección en salas de cine',
            'Campaña enfocada en transmitir los valores y el ambiente de Aspresso',
            'Estética visual dinámica, natural y emocional'
        ]
    },
    {
        id: 4,
        title: 'Daniel "Sanyo" Gutiérrez x Set Sport',
        category: 'Producción Audiovisual',
        description: 'Anuncio en formato vertical para comunicar la nueva colaboración entre Sanyo y Set Sport.',
        image: '/assets/_DSC5530-CaNxFfWD.jpg',
        tags: ['Pádel', 'Colaboración', 'Contenido Vertical', 'Set Sport'],
        results: [
            'Producción en formato vertical adaptado a redes sociales',
            'Anuncio breve de alto impacto visual',
            'Pieza diseñada para visibilidad y alcance digital'
        ]
    },
    {
        id: 5,
        title: 'Orven x Selección Española',
        category: 'Producción Audiovisual',
        description: 'Campaña visual para anunciar la colaboración entre Orven y la Selección Española. Tono épico que celebra la unión entre pádel y fútbol.',
        image: '/assets/IMG_8381-Cq9vIWhS.jpeg',
        tags: ['Deporte', 'Pádel', 'Fútbol', 'Colaboración', 'Selección Española'],
        results: [
            'Producción de vídeo teaser para redes sociales',
            'Narrativa visual que conecta el espíritu competitivo',
            'Contenido adaptado a distintos formatos y plataformas'
        ]
    },
    {
        id: 6,
        title: 'Set Sport - Feel the Power of Enjoy',
        category: 'Producción Audiovisual',
        description: 'Una pieza que respira lo que Set Sport representa: deporte que se disfruta, comunidad que conecta y energía.',
        image: '/assets/_DSC3745-COvlYc4W.jpg',
        tags: ['Deporte', 'Pádel', 'Lifestyle', 'Brand Mood'],
        results: [
            'Producción audiovisual con enfoque lifestyle y deportivo',
            'Grabación en exteriores con personas reales',
            'Contenido creado para conectar desde la emoción'
        ]
    },
    {
        id: 7,
        title: 'Global Padel Court - Pista Oficial Stupa',
        category: 'Producción Audiovisual',
        description: 'Presentamos la nueva pista oficial de Franco Stupa con planos dinámicos, ritmo visual y una narrativa impactante.',
        image: '/assets/Caja_muestras1-mulIPn87.jpg', // Using same placeholder as in .bak if needed
        tags: ['Pádel', 'Producto', 'Lanzamiento', 'Global Padel Court', 'Stupa'],
        results: [
            'Producción audiovisual para lanzamiento de producto',
            'Planos dinámicos que realzan diseño y funcionalidad',
            'El montaje, clave en esta pieza'
        ]
    },
    {
        id: 8,
        title: 'Set Sport - Catálogo de Producto',
        category: 'Diseño Gráfico',
        description: 'Diseño editorial del catálogo oficial de Set Sport, con una estética clara, deportiva y funcional.',
        image: '/assets/Free_Landscape_Brochure_Mockup_03%20copia-8277pEKB.jpg',
        tags: ['Diseño Gráfico', 'Editorial', 'Producto', 'Pádel', 'Set Sport'],
        results: [
            'Diseño y maquetación del catálogo completo de productos',
            'Enfoque visual limpio y estructurado, orientado a venta',
            'Adaptación del contenido para uso físico y digital'
        ]
    }
];

const successCases = [
    {
        title: 'Padel Courts Deluxe',
        description: 'Posicionamos al líder mundial en pistas de pádel como referente digital a nivel internacional. Una estrategia B2B que combina estética, visibilidad y resultados reales.',
        image: '/assets/PORTADAPCDLX-B8ddVZYT.jpg',
        tags: ['Web', 'Content Strategy', 'SEO Internacional', 'RRSS'],
        metrics: [
            { label: 'Tráfico orgánico', value: '+57%' },
            { label: 'Leads B2B', value: '1000+' },
            { label: 'ROI', value: '2x' }
        ]
    },
    {
        title: 'GreenSet Worldwide',
        description: 'Impulsamos la presencia digital del mayor fabricante de pistas de tenis del mundo, reforzando su posicionamiento en torneos como el Australian Open.',
        image: '/assets/PORTADAGREENSET-CbzeRQ4M.jpg',
        tags: ['Web', 'Content Strategy', 'SEO Internacional', 'RRSS'],
        metrics: [
            { label: 'Tráfico cualificado', value: '+80%' },
            { label: 'Engagement redes', value: '+60%' },
            { label: 'Torneos WTA', value: 'ATP' }
        ]
    },
    {
        title: 'Orven',
        description: 'Campaña de crecimiento internacional para una marca de palas de pádel premium. Llevamos su identidad y propuesta a nuevos mercados con una estrategia 360º.',
        image: '/assets/PORTADAORVEN-RQyJuE7R.jpg',
        tags: ['SEO Internacional', 'RRSS', 'Content Strategy'],
        metrics: [
            { label: 'Mercados abiertos', value: '5' },
            { label: 'Visibilidad', value: '+200%' },
            { label: 'Distribuidores', value: '50+' }
        ]
    }
];

const Proyectos = () => {
    const [filter, setFilter] = useState('Todos');

    const filteredProjects = projects.filter(p =>
        filter === 'Todos' || p.category === filter
    );

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/proyectos-DA6ZUqQq.jpg"
                        alt="Proyectos Hero"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                            Proyectos en{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBC7DD] to-[#EBC7DD]">
                                Acción
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                            Nuestro enfoque, puesto en práctica: así llevamos a marcas reales hacia sus próximos logros.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid Section with Integrated Filter */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    {/* Integrated Filter atop cards - Centered and Narrower */}
                    <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-16 p-4 md:p-2 rounded-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50">
                        <div className="hidden md:flex items-center gap-3 pl-6 text-[#EBC7DD]">
                            <Filter className="w-4 h-4" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px] whitespace-nowrap">Filtrar</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                            {['Todos', 'Producción Audiovisual', 'Diseño Gráfico'].map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 ${filter === cat
                                        ? 'bg-[#EBC7DD] text-black shadow-[0_10px_30px_rgba(235,199,221,0.2)] scale-105'
                                        : 'bg-zinc-800/40 text-zinc-500 hover:bg-zinc-800 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-[#EBC7DD]/30 transition-all duration-500"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-[#EBC7DD] border border-[#EBC7DD]/20">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-xl font-bold mb-4 group-hover:text-[#EBC7DD] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-1 bg-zinc-800/50 text-zinc-500 rounded-md border border-zinc-700/30">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="space-y-3">
                                            <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Logros Clave</h4>
                                            {project.results.map((result, idx) => (
                                                <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                                                    <CheckCircle2 className="w-4 h-4 text-[#EBC7DD] shrink-0 mt-0.5" />
                                                    <span>{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Success Cases Section */}
            <section className="py-32 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Casos de Éxito</h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Profundizamos en las estrategias que marcaron un antes y un después para nuestros clientes más exigentes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {successCases.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-zinc-900/20 border border-zinc-800 rounded-[2rem] overflow-hidden group"
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/40"></div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#EBC7DD] transition-colors">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{item.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[10px] px-3 py-1 bg-zinc-800 rounded-full text-zinc-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 py-6 border-t border-zinc-800">
                                        {item.metrics.map((metric, i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-lg font-bold text-[#EBC7DD]">{metric.value}</div>
                                                <div className="text-[10px] text-zinc-500 uppercase tracking-tighter">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full mt-6 py-4 rounded-xl bg-[#EBC7DD] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#D4AFCB] transition-all group/btn">
                                        Leer Caso Completo
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#EBC7DD]/5 rounded-full blur-[120px]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 tracking-tighter">Impacto Medible</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="text-6xl md:text-7xl font-bold text-[#EBC7DD] mb-4"
                                >
                                    500+
                                </motion.div>
                                <div className="text-xl font-bold mb-2">Proyectos Exitosos</div>
                                <p className="text-zinc-500 text-sm">Cada uno superando expectativas</p>
                            </div>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-6xl md:text-7xl font-bold text-[#EBC7DD] mb-4"
                                >
                                    300%
                                </motion.div>
                                <div className="text-xl font-bold mb-2">Crecimiento Promedio</div>
                                <p className="text-zinc-500 text-sm">ROI promedio de nuestros clientes</p>
                            </div>
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-6xl md:text-7xl font-bold text-[#EBC7DD] mb-4"
                                >
                                    98%
                                </motion.div>
                                <div className="text-xl font-bold mb-2">Satisfacción</div>
                                <p className="text-zinc-500 text-sm">Clientes que recomiendan nuestros servicios</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Proyectos;
