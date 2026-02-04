import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Shield, Settings } from 'lucide-react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showConfig, setShowConfig] = useState(false);
    const [preferences, setPreferences] = useState({
        technical: true, // Always required
        analytics: false,
        marketing: false
    });

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for entrance animation
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        const allConsent = {
            technical: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(allConsent));
        setIsVisible(false);
    };

    const handleRejectAll = () => {
        const rejectConsent = {
            technical: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(rejectConsent));
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        const customConsent = {
            ...preferences,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('cookieConsent', JSON.stringify(customConsent));
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden">
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                                <div className="space-y-4 max-w-3xl">
                                    <div className="flex items-center gap-3 text-[#EBC7DD]">
                                        <Shield className="w-6 h-6" />
                                        <h3 className="font-bold text-lg">Tu privacidad es nuestra prioridad</h3>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y ofrecerte contenido personalizado.
                                        Puedes aceptar todas las cookies, rechazarlas o configurar tus preferencias.
                                        Para más información, consulta nuestra <a href="/cookies" className="text-[#EBC7DD] hover:underline">Política de Cookies</a>.
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                                    <button
                                        onClick={() => setShowConfig(!showConfig)}
                                        className="px-6 py-3 rounded-xl border border-zinc-700 text-gray-300 font-medium hover:bg-zinc-800 hover:text-white transition-colors flex items-center justify-center gap-2"
                                    >
                                        <Settings className="w-4 h-4" />
                                        Configurar
                                    </button>
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-6 py-3 rounded-xl border border-[#EBC7DD]/30 text-white font-medium hover:bg-[#EBC7DD]/10 transition-colors"
                                    >
                                        Rechazar todo
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-6 py-3 rounded-xl bg-[#EBC7DD] text-black font-bold hover:bg-[#D4AFCB] transition-colors shadow-lg shadow-[#EBC7DD]/20"
                                    >
                                        Aceptar todo
                                    </button>
                                </div>
                            </div>

                            {/* Configuration Panel */}
                            <AnimatePresence>
                                {showConfig && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-8 mt-8 border-t border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {/* Technical - Always Active */}
                                            <div className="bg-black/40 rounded-xl p-4 border border-zinc-800">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-bold text-white">Técnicas</span>
                                                    <span className="text-[10px] uppercase font-bold text-[#EBC7DD] bg-[#EBC7DD]/10 px-2 py-1 rounded-full">Necesarias</span>
                                                </div>
                                                <p className="text-xs text-gray-500">Esenciales para el funcionamiento básico del sitio. No se pueden desactivar.</p>
                                            </div>

                                            {/* Analytics */}
                                            <div className="bg-black/40 rounded-xl p-4 border border-zinc-800">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-bold text-white">Analíticas</span>
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            className="sr-only peer"
                                                            checked={preferences.analytics}
                                                            onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                                        />
                                                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#EBC7DD]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EBC7DD]"></div>
                                                    </label>
                                                </div>
                                                <p className="text-xs text-gray-500">Nos ayudan a entender cómo interactúas con la web para mejorarla.</p>
                                            </div>

                                            {/* Marketing */}
                                            <div className="bg-black/40 rounded-xl p-4 border border-zinc-800">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="font-bold text-white">Marketing</span>
                                                    <label className="relative inline-flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            className="sr-only peer"
                                                            checked={preferences.marketing}
                                                            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                                        />
                                                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#EBC7DD]/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EBC7DD]"></div>
                                                    </label>
                                                </div>
                                                <p className="text-xs text-gray-500">Permiten mostrarte contenido y anuncios relevantes para ti.</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex justify-end">
                                            <button
                                                onClick={handleSavePreferences}
                                                className="px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                                            >
                                                Guardar preferencias
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
