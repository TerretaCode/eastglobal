import React from 'react';
import { trackEvent } from '../../utils/analytics';
import Image from '../common/Image';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features, imageAlt, imageSrc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-brand/50 transition-all duration-500 overflow-hidden"
    >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
                src={imageSrc}
                alt={imageAlt || title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/90 to-black z-10" />
            <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors z-20" />
        </div>

        <div className="relative z-20">
            <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-brand/5 border border-brand/20">
                <Icon className="w-8 h-8 text-brand" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                {title}
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-4 mb-10">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-5 h-5 text-brand mr-3 shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-sm font-semibold text-gray-400">Solicita tu presupuesto</span>
                <button 
                    onClick={() => trackEvent('click_budget_button', 'Conversion', `Service: ${title}`)}
                    className="flex items-center space-x-2 text-brand hover:text-[#E9B7CE] transition-all group/btn"
                >
                    <span className="font-bold">Solicitar</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </motion.div>
);

export default ServiceCard;
