import React from 'react';
import SEO from '../components/common/SEO';
import NosotrosHero from '../components/nosotros/NosotrosHero';
import AboutContent from '../components/nosotros/AboutContent';
import TeamSection from '../components/nosotros/TeamSection';
import ValuesSection from '../components/nosotros/ValuesSection';

const Nosotros = () => {
    return (
        <div className="bg-black text-white selection:bg-brand/30">
            <SEO 
                title="Sobre Nosotros"
                description="Conoce al equipo de EAST. Somos arquitectos de experiencias digitales, creadores de historias y estrategas que transforman visiones en realidades."
            />
            <NosotrosHero />
            <AboutContent />
            <TeamSection />
            <ValuesSection />
        </div>
    );
};

export default Nosotros;
