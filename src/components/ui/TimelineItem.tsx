import React from 'react';
import { motion } from 'framer-motion';
import { Education } from '../../types';

interface TimelineItemProps {
  education: Education;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ education, index }) => {
  return (
    <motion.div 
      className="flex mb-12 relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline Line */}
      <div className="absolute left-14 top-0 bottom-0 w-px bg-emerald-200 -z-10"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-14 top-10 w-3 h-3 rounded-full bg-emerald-400 transform -translate-x-1.5 z-10"></div>
      
      {/* Logo */}
      <div className="mr-8 flex-shrink-0">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-emerald-100 shadow-md">
          <img 
            src={education.logo} 
            alt={education.institution} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-grow pt-2">
        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full mb-2">
          {education.period}
        </span>
        <h3 className="text-xl font-bold mb-1 text-gray-800">{education.degree}</h3>
        <p className="text-gray-600 mb-1">{education.institution}, {education.location}</p>
        <p className="text-gray-600 text-sm">{education.grade}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;