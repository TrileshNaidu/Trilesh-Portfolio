import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div 
      ref={ref}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      variants={{
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            delay: delay * 0.1
          } 
        }
      }}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-1 text-gray-800">{skill.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{skill.category}</p>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <motion.div 
          className="bg-gradient-to-r from-emerald-300 to-emerald-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.progress}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
        />
      </div>
      <div className="flex justify-end">
        <p className="text-xs text-gray-600">{skill.progress}%</p>
      </div>
    </motion.div>
  );
};

export default SkillCard;