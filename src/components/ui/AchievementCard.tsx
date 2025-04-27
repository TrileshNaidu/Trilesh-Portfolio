import React from 'react';
import { motion } from 'framer-motion';
import { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
  delay: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={achievement.image} 
          alt={achievement.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-800">{achievement.title}</h3>
          <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
            {achievement.period}
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          {achievement.description}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;