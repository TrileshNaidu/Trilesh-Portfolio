import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'R', icon: 'devicon-r-original' },
      { name: 'SQL', icon: 'devicon-mysql-plain colored' }
    ]
  },
  {
    category: 'Frameworks & Libraries',
    items: [
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Maven', icon: 'devicon-maven-plain' },
      { name: 'HTML/CSS', icon: 'devicon-html5-plain colored' }
    ]
  },
  {
    category: 'Databases & Tools',
    items: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original colored' },
      { name: 'Tomcat', icon: 'devicon-tomcat-line colored' }
    ]
  },
  {
    category: 'Data Analysis & Visualization',
    items: [
      { name: 'Tableau Desktop', icon: 'devicon-tableau-plain colored' },
      { name: 'Tableau Prep', icon: 'devicon-tableau-plain colored' },
      { name: 'Excel', icon: 'devicon-excel-plain' },
      { name: 'R', icon: 'devicon-r-original' },
      { name: 'SQL', icon: 'devicon-mysql-plain colored' }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="A comprehensive overview of my technical expertise and tools I work with"
        />
        
        <div className="mt-16 space-y-16">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  {index + 1}
                </span>
                {skillGroup.category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="flex flex-col items-center gap-4 p-6 bg-slate-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-slate-100"
                  >
                    <i className={`${skill.icon} text-5xl`}></i>
                    <span className="text-lg font-semibold text-slate-800">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-800 text-lg max-w-3xl mx-auto">
            I'm constantly learning and expanding my skill set to stay current with the latest technologies and best practices in software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;