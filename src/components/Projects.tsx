import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import SectionTitle from './ui/SectionTitle';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Projects" 
          subtitle="Some of my recent works" 
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden card-hover border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <motion.button
                    onClick={() => setSelectedProject(project.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-600 hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-800/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                {projects.find(p => p.id === selectedProject) && (
                  <div>
                    <div className="relative">
                      <img 
                        src={projects.find(p => p.id === selectedProject)?.image} 
                        alt={projects.find(p => p.id === selectedProject)?.title}
                        className="w-full h-64 object-cover object-top"
                      />
                      <button 
                        className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-slate-800 hover:bg-white transition-colors"
                        onClick={() => setSelectedProject(null)}
                      >
                        <X size={20} />
                      </button>
                    </div>
                    
                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-slate-800 mb-2">
                        {projects.find(p => p.id === selectedProject)?.title}
                      </h2>
                      <p className="text-slate-600 mb-4">
                        {projects.find(p => p.id === selectedProject)?.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {projects.find(p => p.id === selectedProject)?.techStack.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 mb-8">
                        <motion.a
                          href={projects.find(p => p.id === selectedProject)?.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} />
                          View Code
                        </motion.a>
                        
                        {projects.find(p => p.id === selectedProject)?.liveLink && (
                          <motion.a
                            href={projects.find(p => p.id === selectedProject)?.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-slate-800 text-white rounded-full hover:bg-slate-900 transition-colors duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </motion.a>
                        )}
                      </div>

                      {/* Project Details */}
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">Overview</h3>
                          <p className="text-slate-600">{projects.find(p => p.id === selectedProject)?.overview}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">Challenges</h3>
                          <ul className="list-disc list-inside text-slate-600 space-y-1">
                            {projects.find(p => p.id === selectedProject)?.challenges.map((challenge, index) => (
                              <li key={index}>{challenge}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">Methodology</h3>
                          <p className="text-slate-600">{projects.find(p => p.id === selectedProject)?.methodology}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-slate-800 mb-2">Key Outcomes</h3>
                          <ul className="list-disc list-inside text-slate-600 space-y-1">
                            {projects.find(p => p.id === selectedProject)?.keyOutcomes.map((outcome, index) => (
                              <li key={index}>{outcome}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;