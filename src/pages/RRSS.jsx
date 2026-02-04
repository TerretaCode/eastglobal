import React from 'react';
import SEO from '../components/common/SEO';
import RRSSHero from '../components/rrss/RRSSHero';
import SocialStatsGrid from '../components/rrss/SocialStatsGrid';
import InstagramFeed from '../components/rrss/InstagramFeed';
import LinkedInFeed from '../components/rrss/LinkedInFeed';
import TikTokFeed from '../components/rrss/TikTokFeed';
import CommunitySection from '../components/rrss/CommunitySection';

const RRSS = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-brand/30">
            <SEO 
                title="Redes Sociales"
                description="Conéctate con EAST en redes sociales. Descubre nuestro contenido en Instagram, LinkedIn y TikTok."
            />
            <RRSSHero />
            <SocialStatsGrid />
            <InstagramFeed />
            <LinkedInFeed />
            <TikTokFeed />
            <CommunitySection />
        </div>
    );
};

export default RRSS;
