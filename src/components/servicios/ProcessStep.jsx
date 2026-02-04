import React from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="text-center group"
    >
        <div className="relative mb-8 inline-block">
            <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-xl shadow-brand/5 border border-brand/20 relative z-10">
                <span className="text-2xl font-bold text-brand">{number}</span>
            </div>
            <div className="absolute inset-0 bg-brand/10 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
            {title}
        </h4>
        <p className="text-gray-400 leading-relaxed max-w-sm mx-auto group-hover:text-gray-300 transition-colors">
            {description}
        </p>
    </motion.div>
);

export default ProcessStep;
