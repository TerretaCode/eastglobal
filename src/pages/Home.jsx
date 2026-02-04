import React, { lazy, Suspense } from 'react';
import SEO from '../components/common/SEO';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Connection from '../components/home/Connection';
import TrustLogos from '../components/home/TrustLogos';

// Lazy load ProcessTimeline to defer framer-motion animations bundle
const ProcessTimeline = lazy(() => import('../components/home/ProcessTimeline'));

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-brand/30">
            <SEO 
                title="Agencia de Marketing Digital y Producción Audiovisual"
                description="Especialistas en producción audiovisual, desarrollo web, redes sociales y branding en Valencia. Transformamos tu visión en resultados reales."
            />
            <Hero />
            <Stats />
            <Connection />
            <TrustLogos />
            <Suspense fallback={<div className="py-32 bg-black" />}>
                <ProcessTimeline />
            </Suspense>
        </div>
    );
};

export default Home;
