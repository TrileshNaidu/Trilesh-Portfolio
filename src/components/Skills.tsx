import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import SectionTitle from './ui/SectionTitle';

const Skills: React.FC = () => {
  const getIconClass = (name: string): string => {
    const iconMap: { [key: string]: string } = {
      JavaScript: "devicon-javascript-plain colored",
      Python: "devicon-python-plain colored",
      Java: "devicon-java-plain colored",
      "C++": "devicon-cplusplus-plain colored",
      SQL: "devicon-mysql-plain colored",
      HTML: "devicon-html5-plain colored",
      CSS: "devicon-css3-plain colored",
      React: "devicon-react-original colored",
      "Spring Boot": "devicon-spring-plain colored",
      Maven: "devicon-maven-plain colored",
      Bootstrap: "devicon-bootstrap-plain colored",
      MySQL: "devicon-mysql-plain colored",
      Git: "devicon-git-plain colored",
      GitHub: "devicon-github-original colored",
      Docker: "devicon-docker-plain colored",
    };
    return iconMap[name] || "devicon-devicon-plain";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="Continuously expanding my expertise in software development" 
        />

        <div className="mt-16 grid gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <i className={`${getIconClass(skill.name)} text-4xl mb-3`}></i>
                    <span className="text-gray-800 font-medium text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;