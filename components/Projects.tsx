
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

type FilterType = 'all' | 'web' | 'android' | 'ml';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredProjects = PROJECTS.filter(p => filter === 'all' || p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 text-lg">
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { label: 'All', value: 'all' },
          { label: "WEB APP'S", value: 'web' },
          { label: "ANDROID APP'S", value: 'android' },
          { label: 'MACHINE LEARNING', value: 'ml' }
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value as FilterType)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              filter === btn.value 
                ? 'bg-purple-600 border-purple-600 text-white' 
                : 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <div 
            key={idx} 
            className="group bg-[#110D2D]/60 rounded-3xl border border-purple-500/20 overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-purple-900/30 text-purple-400 border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-1 text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-xs text-gray-500 mb-3 font-medium uppercase tracking-widest">{project.period}</p>
              <p className="text-gray-400 text-sm line-clamp-3 mb-6">
                {project.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <a 
                  href={project.sourceLink} 
                  className="text-purple-400 text-sm font-semibold hover:text-purple-300 transition-colors"
                >
                  Source Code &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
