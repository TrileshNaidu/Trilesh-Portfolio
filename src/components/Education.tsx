import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import SectionTitle from './ui/SectionTitle';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and qualifications that have shaped my knowledge and skills." 
        />
        
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
          
          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-500 shadow-lg"></div>
                
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <motion.div 
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-slate-800 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-emerald-600 font-medium mb-1">
                          {edu.institution}
                        </p>
                        <p className="text-sm text-slate-600 mb-1">
                          {edu.location}
                        </p>
                      </div>
                      {edu.logo && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0 ml-4"
                        >
                          <img 
                            src={edu.logo} 
                            alt={edu.institution}
                            className="w-16 h-16 object-contain rounded-lg"
                          />
                        </motion.div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-slate-500 font-medium">
                        {edu.period}
                      </p>
                      <p className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block">
                        {edu.grade}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 