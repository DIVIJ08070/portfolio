'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'MERN Stack', level: 85 },
  { name: 'Next.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'Java/C++', level: 70 },
  { name: 'SQL/MongoDB', level: 85 },
]

export const SkillsVisualization = () => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6 text-center">Skills Proficiency</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}