import React from 'react';
import { Filter } from 'lucide-react';

const ProjectFilter = ({ currentFilter, onFilterChange }) => {
    const categories = ['Todos', 'Producción Audiovisual', 'Diseño Gráfico'];

    return (
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-16 p-4 md:p-2 rounded-full bg-zinc-900/40 backdrop-blur-md border border-zinc-800/50">
            <div className="hidden md:flex items-center gap-3 pl-6 text-brand">
                <Filter className="w-4 h-4" />
                <span className="font-bold uppercase tracking-[0.2em] text-[10px] whitespace-nowrap">Filtrar</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onFilterChange(cat)}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 ${currentFilter === cat
                            ? 'bg-brand text-black shadow-[0_10px_30px_rgba(235,199,221,0.2)] scale-105'
                            : 'bg-zinc-800/40 text-zinc-500 hover:bg-zinc-800 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProjectFilter;
