import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import { Github } from 'lucide-react';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, delay }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden h-48">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <Button outlined onClick={onClick}>
            View Details
          </Button>
          
          <motion.a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 text-gray-600 hover:text-emerald-500 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;