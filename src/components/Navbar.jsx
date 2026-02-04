import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
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
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Background logic
            setIsScrolled(currentScrollY > 20);

            // Visibility logic
            if (isMobileMenuOpen) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down - hide
                setIsVisible(false);
            } else {
                // Scrolling up or at top - show
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isMobileMenuOpen]);

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
                        <img
                            src="/logo.png"
                            alt="East Global Web Logo"
                            className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform duration-300 mix-blend-normal"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-[16px] font-[500] leading-[24px] transition-all duration-300 relative group ${location.pathname === link.path ? 'text-[#EBC7DD]' : 'text-white hover:text-[#EBC7DD]'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#EBC7DD] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        ))}

                        {/* Language Selector */}
                        <div className="relative group/lang">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center space-x-2 text-[16px] font-[500] leading-[24px] text-white hover:text-[#EBC7DD] transition-all duration-300 py-2"
                            >
                                <div className="p-1 rounded-lg bg-white/5 border border-white/10 group-hover/lang:border-[#EBC7DD]/50 transition-colors overflow-hidden flex items-center justify-center">
                                    <img
                                        src={languages.find(l => l.code === 'ES')?.flag}
                                        alt="ES"
                                        className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                                    />
                                </div>
                                <span className="tracking-wide">ES</span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isLangMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                                        className="absolute right-0 mt-3 w-40 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 p-1.5"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                className={`w-full px-4 py-3 text-left text-[14px] font-[500] rounded-xl transition-all duration-300 flex items-center justify-between group/item ${lang.code === 'ES' ? 'text-[#EBC7DD] bg-[#EBC7DD]/5' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                                    }`}
                                            >
                                                <div className="flex items-center space-x-3">
                                                    <img
                                                        src={lang.flag}
                                                        alt={lang.code}
                                                        className="w-5 h-3.5 object-cover rounded-sm shadow-sm"
                                                    />
                                                    <span>{lang.name}</span>
                                                </div>
                                                {lang.code === 'ES' && (
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#EBC7DD] shadow-[0_0_10px_#EBC7DD]" />
                                                )}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative z-[110] w-12 h-12 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8 text-[#EBC7DD]" /> : <Menu className="w-8 h-8" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[105] lg:hidden bg-black w-full h-screen"
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="flex flex-col items-center justify-center h-full space-y-8 px-6 pt-16"
                        >
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.05) }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-4xl font-bold transition-all duration-300 ${location.pathname === link.path ? 'text-[#EBC7DD]' : 'text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex space-x-6 pt-12 border-t border-white/10 w-full justify-center"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        className="flex flex-col items-center space-y-2 text-gray-400 hover:text-white font-medium group"
                                    >
                                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#EBC7DD]/50 transition-all">
                                            <img
                                                src={lang.flag}
                                                alt={lang.code}
                                                className="w-8 h-5 object-cover rounded shadow-sm"
                                            />
                                        </div>
                                        <span className="text-xs tracking-widest">{lang.code}</span>
                                    </button>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
