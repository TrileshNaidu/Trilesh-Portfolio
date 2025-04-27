import React from 'react';
import { motion } from 'framer-motion';
import { aboutMe } from '../data';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Let me introduce myself" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden">
              <motion.img 
                src={aboutMe.image}
                alt={aboutMe.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300/80 to-transparent"></div>
            </div>
            <div className="absolute inset-0 border-2 border-primary-500/20 rounded-2xl transform rotate-6 -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-100">
                Who am I?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {aboutMe.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-100">
                Education
              </h3>
              <p className="text-gray-400">
                Currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University
              </p>
            </div>

            <div>
              <motion.a
                href={aboutMe.generalCV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;