import React from 'react';
import Image from '../common/Image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="group relative bg-zinc-900/40 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-brand/30 transition-all duration-500"
        >
            <div className="aspect-video overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-brand border border-brand/20">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 bg-zinc-800/50 text-zinc-500 rounded-md border border-zinc-700/30">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="space-y-3">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Logros Clave</h4>
                    {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                            <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                            <span>{result}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
