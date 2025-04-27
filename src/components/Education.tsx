import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import SectionHeader from './ui/SectionHeader';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Education" 
          subtitle="My academic journey and qualifications" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
                  <p className="text-blue-600 font-medium">{edu.institution}</p>
                  <p className="text-slate-600 text-sm mt-1">{edu.location}</p>
                  <p className="text-slate-500 text-sm mt-1">{edu.period}</p>
                  <p className="text-slate-700 mt-3">Grade: {edu.grade}</p>
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