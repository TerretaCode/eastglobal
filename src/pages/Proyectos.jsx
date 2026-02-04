import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/common/SEO';
import ProjectsHero from '../components/proyectos/ProjectsHero';
import ProjectFilter from '../components/proyectos/ProjectFilter';
import ProjectCard from '../components/proyectos/ProjectCard';
import SuccessCases from '../components/proyectos/SuccessCases';
import MetricsSection from '../components/proyectos/MetricsSection';

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
        image: '/assets/Caja_muestras1-mulIPn87.jpg',
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

const Proyectos = () => {
    const [filter, setFilter] = useState('Todos');

    const filteredProjects = projects.filter(p =>
        filter === 'Todos' || p.category === filter
    );

    return (
        <div className="bg-black text-white min-h-screen">
            <SEO 
                title="Proyectos"
                description="Explora nuestro portafolio de trabajos: producción audiovisual, diseño web y campañas de éxito para marcas líderes."
            />
            <ProjectsHero />

            {/* Projects Grid Section with Integrated Filter */}
            <section className="py-24 px-6">
                <div className="container mx-auto">
                    <ProjectFilter currentFilter={filter} onFilterChange={setFilter} />

                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <SuccessCases />
            <MetricsSection />
        </div>
    );
};

export default Proyectos;
