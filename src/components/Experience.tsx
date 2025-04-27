import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import SectionTitle from './ui/SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Experience" 
          subtitle="My professional journey and work experience"
        />

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3">
                      {exp.companyLogo && (
                        <img 
                          src={exp.companyLogo} 
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 object-contain"
                        />
                      )}
                      <div>
                        <h4 className="text-xl font-semibold text-slate-800">{exp.role}</h4>
                        <p className="text-blue-600">{exp.company}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 mt-3">{exp.description}</p>
                    {exp.technologies && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="md:text-right">
                    <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                    <p className="text-slate-500 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;