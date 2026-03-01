
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills</h2>
        <p className="text-gray-400 text-lg">
          Here are some of my skills on which I have been working on for the past 2 years.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div 
            key={category.title} 
            className="bg-[#110D2D]/40 border border-purple-500/20 rounded-3xl p-8 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="flex items-center gap-2 px-4 py-2 bg-[#030014] border border-gray-700/50 rounded-xl hover:bg-purple-900/20 transition-all group cursor-default"
                >
                  <img src={skill.icon} alt={skill.name} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
