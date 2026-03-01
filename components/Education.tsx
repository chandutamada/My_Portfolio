
import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold mb-4"
        >
          Education
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto"
        >
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 lg:px-0">
        {/* Vertical Line */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-purple-900/30 -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col lg:flex-row items-start ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute left-4 lg:left-1/2 w-6 h-6 bg-purple-600 rounded-full border-4 border-[#030014] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
              ></motion.div>
              
              {/* Date Badge (as seen in video) */}
              <div className={`hidden lg:block lg:w-1/2 ${idx % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'} py-8`}>
                <span className="text-gray-400 font-medium">{item.period}</span>
              </div>

              <div className="lg:w-1/2 pl-12 lg:pl-0">
                <div className="bg-[#110D2D]/40 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(147,51,234,0.1)]">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={item.logo} alt={item.institution} className="w-12 h-12 rounded-xl object-contain bg-white p-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{item.institution}</h3>
                      <p className="text-xs text-gray-400 mt-1 lg:hidden">{item.period}</p>
                    </div>
                  </div>
                  <h4 className="text-purple-400 font-semibold mb-2">{item.degree}</h4>
                  <p className="text-sm font-bold text-gray-500 mb-3">{item.grade}</p>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-4 hover:line-clamp-none transition-all duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
