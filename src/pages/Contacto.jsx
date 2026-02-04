import React from 'react';
import SEO from '../components/common/SEO';
import ContactoHero from '../components/contacto/ContactoHero';
import ContactForm from '../components/contacto/ContactForm';
import ContactInfo from '../components/contacto/ContactInfo';
import FAQSection from '../components/contacto/FAQSection';

const Contacto = () => {
    return (
        <div className="min-h-[100dvh] bg-black text-white selection:bg-brand/30 overflow-x-hidden w-full">
            <SEO 
                title="Contacto"
                description="¿Tienes un proyecto en mente? Hablemos. Estamos listos para ayudarte a llevar tu marca al siguiente nivel."
            />
            <ContactoHero />

            <section className="relative z-10 py-12 md:py-24 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                        <article>
                            <ContactForm />
                        </article>
                        <aside>
                            <ContactInfo />
                        </aside>
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    );
};

export default Contacto;
