import React, { useState, useEffect } from 'react';
import { trackEvent } from '../utils/analytics';
import { Link, useLocation } from 'react-router-dom';
import Image from './common/Image';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    // UseRef to track lastScrollY without triggering re-renders
    const lastScrollY = React.useRef(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const location = useLocation();

    // Block body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        let ticking = false;

        const updateNavbarState = () => {
            const currentScrollY = window.scrollY;

            // Background logic
            setIsScrolled(currentScrollY > 20);

            // Visibility logic
            if (isMobileMenuOpen) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
                // Scrolling down - hide (lowered threshold to 60)
                setIsVisible(false);
            } else {
                // Scrolling up or at top - show
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateNavbarState);
                ticking = true;
            }
        };

        // Initial check
        updateNavbarState();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileMenuOpen]); // Removed lastScrollY dependency to improve performance

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Proyectos', path: '/proyectos' },
        { name: 'RRSS', path: '/rrss' },
        { name: 'Contacto', path: '/contacto' },
    ];

    const languages = [
        { code: 'ES', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
        { code: 'EN', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 border-b ${isScrolled || isMobileMenuOpen ? 'bg-black/95 backdrop-blur-lg py-4 border-white/5' : 'bg-transparent py-6 border-transparent'
                } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <nav className="flex items-center justify-between">
                    <Link to="/" className="relative z-[110] group">
                        <Image
                            src="/logo.webp"
                            alt="East Global Web Logo"
                            className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform duration-300 mix-blend-normal"
                            loading="eager"
                            width="162"
                            height="70"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => {
                                    if (link.path === '/contacto') trackEvent('click_contact_link', 'Navigation', 'Navbar');
                                }}
                                className={`text-[16px] font-[500] leading-[24px] transition-all duration-300 relative group ${location.pathname === link.path ? 'text-brand' : 'text-white hover:text-brand'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        ))}

                        {/* Language Selector */}
                        <div className="relative group/lang">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center space-x-2 text-[16px] font-[500] leading-[24px] text-white hover:text-brand transition-all duration-300 py-2"
                                aria-label="Seleccionar idioma"
                                aria-expanded={isLangMenuOpen}
                            >
                                <div className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover/lang:border-brand/50 transition-colors overflow-hidden flex items-center justify-center">
                                    <Image
                                        src={languages.find(l => l.code === 'ES')?.flag}
                                        alt="ES"
                                        className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                                        loading="eager"
                                        width="20"
                                        height="14"
                                    />
                                </div>
                                <span className="tracking-wide">ES</span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div
                                    className={`absolute right-0 mt-3 w-40 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 p-1.5 transition-all duration-200 origin-top-right ${
                                        isLangMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                                    }`}
                                >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                className={`w-full px-4 py-3 text-left text-[14px] font-[500] rounded-xl transition-all duration-300 flex items-center justify-between group/item ${lang.code === 'ES' ? 'text-brand bg-brand/5' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <Image
                                                        src={lang.flag}
                                                        alt={lang.code}
                                                        className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                                                    />
                                                    <span>{lang.name}</span>
                                                </div>
                                                {lang.code === 'ES' && (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_10px_rgb(235,199,221)]" />
                                                )}
                                            </button>
                                        ))}
                                </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-[110] w-12 h-12 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Abrir menú de navegación"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8 text-brand" aria-hidden="true" /> : <Menu className="w-8 h-8" aria-hidden="true" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 z-[105] lg:hidden bg-black w-full h-[100dvh] overflow-y-auto transition-opacity duration-300 ${
                    isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div
                    className={`flex flex-col items-center justify-start min-h-full space-y-6 px-6 pt-24 pb-12 transition-all duration-300 ${
                        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'
                    }`}
                >
                    {navLinks.map((link) => (
                        <div key={link.name} className="w-full text-center">
                            <Link
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-4xl font-bold transition-all duration-300 ${location.pathname === link.path ? 'text-brand' : 'text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}

                    <div className="flex space-x-6 pt-12 border-t border-white/10 w-full justify-center">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white font-medium group"
                            >
                                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-brand/50 transition-all">
                                    <Image
                                        src={lang.flag}
                                        alt={lang.code}
                                        className="w-8 h-5 object-cover rounded shadow-sm"
                                    />
                                </div>
                                <span className="text-xs tracking-widest">{lang.code}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
