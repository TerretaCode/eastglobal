import React from 'react';
import { trackEvent } from '../../utils/analytics';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        // Track form submission
        trackEvent('submit_contact_form', 'Conversion', 'Contact Page Form');
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // Ejemplo de implementación con una API o servicio configurado en .env
            const apiUrl = import.meta.env.VITE_API_URL;
            
            if (apiUrl && apiUrl !== 'https://api.eastglobal.es') {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                if (!response.ok) throw new Error('Error en el envío');
            } else {
                // Simulación si no hay API configurada
                await new Promise(resolve => setTimeout(resolve, 1500));
            }
            
            setStatus('success');
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-10 border border-brand/20 shadow-2xl text-center space-y-6"
            >
                <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-brand" />
                </div>
                <h2 className="text-3xl font-bold text-white">¡Mensaje enviado!</h2>
                <p className="text-gray-400">Gracias por contactar con nosotros. Te responderemos en menos de 24 horas.</p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="text-brand hover:underline font-medium"
                >
                    Enviar otro mensaje
                </button>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-white/5 shadow-2xl"
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Cuéntanos tu proyecto</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Nombre</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Tu nombre o empresa"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand transition-all outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="tu@email.com"
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand transition-all outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-400 ml-1">Servicio Interés</label>
                    <div className="relative">
                        <select 
                            id="service"
                            name="service"
                            required
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand focus:ring-1 focus:ring-brand transition-all outline-none appearance-none cursor-pointer"
                        >
                            <option value="" className="text-gray-500">Selecciona un servicio</option>
                            <option value="audiovisual">Producción Audiovisual</option>
                            <option value="web">Desarrollo Web</option>
                            <option value="rrss">Redes Sociales</option>
                            <option value="branding">Branding y Diseño</option>
                            <option value="consultoria">Consultoría</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="5"
                        placeholder="¿Qué tienes en mente?"
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand transition-all outline-none resize-none"
                    ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                    <a
                        href="https://wa.me/34699984661"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_whatsapp', 'Conversion', 'Contact Form')}
                        className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 font-semibold py-4 rounded-xl transition-all"
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                    </a>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="bg-brand hover:bg-brand/90 text-black font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === 'loading' ? (
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                        ) : status === 'error' ? (
                            <div className="flex items-center gap-2">
                                <AlertCircle className="w-5 h-5" />
                                <span>Error</span>
                            </div>
                        ) : 'Enviar'}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default ContactForm;
