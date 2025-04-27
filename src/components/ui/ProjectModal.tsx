import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github } from 'lucide-react';
import { Project } from '../../types';
import Button from './Button';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  // Close modal when pressing escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 my-4">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-6 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Overview</h3>
                  <p className="text-gray-600">{project.overview}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Challenges</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Methodology</h3>
                  <p className="text-gray-600">{project.methodology}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-700">Key Outcomes</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {project.keyOutcomes.map((outcome, index) => (
                      <li key={index}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <Button 
                  href={project.githubLink}
                  className="flex items-center gap-2"
                >
                  <Github size={18} />
                  View on GitHub
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;