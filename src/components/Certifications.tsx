import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data';
import SectionTitle from './ui/SectionTitle';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and achievements" 
        />
        
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[4/3] bg-slate-50">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{cert.title}</h4>
                  <p className="text-slate-600">{cert.issuer}</p>
                  <p className="text-slate-500 text-sm mt-1">{cert.date}</p>
                  {cert.verificationLink && (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Verify Certificate →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;