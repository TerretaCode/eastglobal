import React from 'react';
import { trackEvent } from '../utils/analytics';
import { Link } from 'react-router-dom';
import Image from './common/Image';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Logo & Slogan */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link to="/" className="inline-block group">
                            <Image
                                src="/logo.png"
                                alt="EAST"
                                className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
                                loading="eager"
                                width="162"
                                height="70"
                            />
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                            Convertimos visión en acción. Y acción, en resultados.
                            Hazlo simple. Hazlo bien. Hazlo con EAST.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/eastglobal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300 text-gray-400 hover:text-black group"
                                aria-label="Síguenos en Instagram"
                            >
                                <Instagram className="w-6 h-6" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/eastglobal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300 text-gray-400 hover:text-black group"
                                aria-label="Síguenos en LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" aria-hidden="true" />
                            </a>
                            {/* TikTok Icon (SVG) */}
                            <a
                                href="https://www.tiktok.com/@eastglobal"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-gray-900 border border-white/5 rounded-2xl flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300 text-gray-400 hover:text-black group"
                                aria-label="Síguenos en TikTok"
                            >
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.77-4.6V7.5a8.28 8.28 0 0 0 4.26 1.2v-3.4a4.84 4.84 0 0 1-.6-.61z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-white font-bold text-xl">Enlaces</h4>
                        <nav className="flex flex-col space-y-4">
                            <Link to="/" className="text-gray-400 hover:text-brand transition-colors">Inicio</Link>
                            <Link to="/servicios" className="text-gray-400 hover:text-brand transition-colors">Servicios</Link>
                            <Link to="/proyectos" className="text-gray-400 hover:text-brand transition-colors">Proyectos</Link>
                            <Link to="/nosotros" className="text-gray-400 hover:text-brand transition-colors">Sobre nosotros</Link>
                            <Link to="/contacto" className="text-gray-400 hover:text-brand transition-colors">Contacto</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-white font-bold text-xl">Contacto</h4>
                        <div className="flex flex-col space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-300">Email</p>
                                    <a href="mailto:contacto@eastglobal.es" className="text-gray-400 hover:text-white transition-colors">
                                        contacto@eastglobal.es
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-300">Teléfono</p>
                                    <a 
                                        href="tel:+34699984661" 
                                        onClick={() => trackEvent('click_contact_phone', 'Conversion', 'Footer')}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        +34 699 984 661
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-brand" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-300">Ubicación</p>
                                    <p className="text-gray-400">
                                        Calle ARZOBISPO MAYORAL, 16,<br />
                                        Valencia (España)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Created by <span className="text-brand font-semibold">EAST</span>
                    </p>
                    <div className="flex space-x-8">
                        <Link to="/privacidad" className="text-gray-400 hover:text-brand text-sm transition-colors">Privacidad</Link>
                        <Link to="/terminos" className="text-gray-400 hover:text-brand text-sm transition-colors">Términos</Link>
                        <Link to="/cookies" className="text-gray-400 hover:text-brand text-sm transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
