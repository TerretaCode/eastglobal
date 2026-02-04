import React from 'react';
import { trackEvent } from '../../utils/analytics';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="space-y-8 lg:pt-10">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-8"
            >
                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">Llámanos</h3>
                        <a 
                            href="tel:+34699984661"
                            onClick={() => trackEvent('click_contact_phone', 'Conversion', 'Contact Page Info')}
                            className="text-xl text-white font-medium hover:text-brand transition-colors"
                        >
                            +34 699 984 661
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">Escríbenos</h3>
                        <a 
                            href="mailto:contacto@eastglobal.es"
                            onClick={() => trackEvent('click_contact_email', 'Conversion', 'Contact Page Info')}
                            className="text-xl text-white font-medium hover:text-brand transition-colors"
                        >
                            contacto@eastglobal.es
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-1">Visítanos</h3>
                        <p className="text-xl text-white font-medium">Calle ARZOBISPO MAYORAL, 16</p>
                        <p className="text-gray-400">Valencia, España</p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <h3 className="text-lg font-bold text-white mb-4">Síguenos en redes</h3>
                    <div className="flex gap-4">
                        <a href="https://instagram.com/eastglobal" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-400 hover:text-brand hover:scale-105 transition-all border border-white/5 hover:border-brand/50">
                            <Instagram className="w-7 h-7" />
                        </a>
                        <a href="https://linkedin.com/company/eastglobal" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-400 hover:text-[#0077b5] hover:scale-105 transition-all border border-white/5 hover:border-[#0077b5]/50">
                            <Linkedin className="w-7 h-7" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactInfo;
