'use client'
import { motion } from 'framer-motion'
import { SkillsVisualization } from './SkillsVisualization'

export const About = () => {
  const languages = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'Python']
  const frameworks = ['MERN Stack', 'Next.js', 'Bootstrap CSS', 'Tailwind CSS', 'Clerk', 'Git & GitHub']
  const databases = ['SQL', 'MongoDB']

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* ... (keep the existing header) ... */}
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm <strong className="text-purple-600 dark:text-purple-400">Divij Patel</strong>, a passionate Full Stack Developer with expertise across multiple programming languages and frameworks. I thrive on solving complex problems and building elegant, efficient solutions.
              </p>
              <p>
                My journey in technology began with curiosity about how things work, which evolved into a love for creating digital experiences. I enjoy the entire development process, from conceptualizing ideas to deploying production-ready applications.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe continuous learning is key to staying at the forefront of technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">🛠️</span> {lang}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, index) => (
                  <motion.div
                    key={framework}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">⚙️</span> {framework}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-3">
                {databases.map((db, index) => (
                  <motion.div
                    key={db}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">🗃️</span> {db}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <SkillsVisualization />
      </div>
    </section>
  )
}