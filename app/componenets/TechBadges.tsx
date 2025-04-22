'use client'

import { motion, useAnimation } from 'framer-motion'
import { FiCode, FiCpu, FiDatabase, FiLayers, FiZap } from 'react-icons/fi'
import { useEffect } from 'react'

const badges = [
  { 
    icon: <FiCode size={24} />, 
    name: 'Frontend', 
    color: 'from-purple-500 to-pink-500',
    tech: ['React', 'Next.js', 'Tailwind']
  },
  { 
    icon: <FiCpu size={24} />, 
    name: 'Backend', 
    color: 'from-blue-500 to-cyan-500',
    tech: ['Node.js', 'Express', 'Python']
  },
  { 
    icon: <FiDatabase size={24} />, 
    name: 'Database', 
    color: 'from-emerald-500 to-teal-500',
    tech: ['MongoDB', 'PostgreSQL', 'Firebase']
  },
  { 
    icon: <FiLayers size={24} />, 
    name: 'Full Stack', 
    color: 'from-amber-500 to-orange-500',
    tech: ['MERN', 'TypeScript', 'REST APIs']
  },
  {
    icon: <FiZap size={24} />,
    name: 'DevOps',
    color: 'from-red-500 to-yellow-500',
    tech: ['Docker', 'AWS', 'CI/CD']
  }
]

export const TechBadges = () => {
  const controls = useAnimation()
  
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await controls.start({
          scale: [1, 1.05, 1],
          transition: { duration: 3 }
        })
      }
    }
    sequence()
  }, [controls])

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-12 relative">
      {/* Floating tech particles background */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          initial={{
            opacity: 0,
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            opacity: [0, 0.8, 0],
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-sm"
          style={{
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
          }}
        />
      ))}
      
      {badges.map((badge, i) => (
        <div key={i} className="relative group">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className={`bg-gradient-to-br ${badge.color} p-0.5 rounded-xl shadow-2xl hover:shadow-glow hover:shadow-purple-500/50 transition-all duration-300 relative overflow-hidden`}
          >
            {/* Front side */}
            <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center w-40 h-40">
              <div className="mb-3 text-3xl">{badge.icon}</div>
              <span className="font-bold text-lg mb-2">{badge.name}</span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '80%' }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-transparent via-white to-transparent my-2"
              />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className="text-xs text-gray-400"
              >
                Hover for details
              </motion.span>
            </div>
            
            {/* Continuous pulse animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-xl border-2 pointer-events-none"
              style={{
                borderImage: `linear-gradient(to right, ${badge.color.split(' ')[1]}, ${badge.color.split(' ')[3]}) 1`
              }}
            />
          </motion.div>

          {/* Hologram effect on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ opacity: 1, y: -60 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-48 p-4 bg-gradient-to-b from-blue-500/20 to-transparent rounded-lg shadow-lg backdrop-blur-sm border border-blue-500/30 pointer-events-none"
          >
            <h3 className="text-center font-bold text-blue-300 mb-2">{badge.name}</h3>
            <ul className="text-center space-y-1">
              {badge.tech.map((tech, techIndex) => (
                <li key={techIndex} className="text-sm text-blue-100">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="absolute inset-0 bg-blue-500/10 animate-pulse" />
          </motion.div>
        </div>
      ))}
      
      {/* Floating connector lines */}
      {badges.slice(0, -1).map((_, i) => (
        <motion.div
          key={`connector-${i}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="absolute top-1/2 h-px bg-gradient-to-r from-purple-500 to-pink-500"
          style={{
            width: '80px',
            left: `calc(${(i + 1) * 20}% - 40px)`,
            transform: 'translateY(-50%)'
          }}
        />
      ))}
    </div>
  )
}