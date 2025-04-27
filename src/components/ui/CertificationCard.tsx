import React from 'react';
import { motion } from 'framer-motion';
import { Certification } from '../../types';

interface CertificationCardProps {
  certification: Certification;
  delay: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, delay }) => {
  return (
    <motion.div 
      className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
        <img 
          src={certification.logo} 
          alt={certification.issuer} 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{certification.title}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <span>{certification.issuer}</span>
          <span className="mx-2">•</span>
          <span>{certification.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationCard;