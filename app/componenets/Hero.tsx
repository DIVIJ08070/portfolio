// components/Hero.tsx
'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { NeonGrid } from './NeonGrid'
import { TechBadges } from './TechBadges'
import { Canvas } from '@react-three/fiber'

export const Hero = () => {
  // Create motion values for the breathing effect
  const pulseValue = useMotionValue(0)
  // Derive a plain number for NeonGrid intensity
  const intensityValue = useTransform(pulseValue, (value) => value)
  const backgroundColor = useTransform(
    pulseValue,
    [0, 1],
    ['rgba(17, 24, 39, 1)', 'rgba(35, 0, 60, 1)'] // From gray-900 to deep purple
  )
  const backgroundOpacity = useTransform(
    pulseValue,
    [0, 1],
    [0.3, 0.7] // Opacity pulse
  )

  useEffect(() => {
    const animation = animate(pulseValue, 1, {
      duration: 8,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    })
    return () => animation.stop()
  }, [pulseValue])

  return (
    <section 
      id="home" 
      className="h-[90vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Breathing background layer */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundColor,
          opacity: backgroundOpacity
        }}
      />
      
      {/* Subtle pulsing gradient overlay */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(126, 34, 206, 0.1) 0%, transparent 70%)`,
          opacity: useTransform(pulseValue, [0, 1], [0.2, 0.5])
        }}
      />
      
      {/* 3D Background - now with pulsing intensity */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ opacity: useTransform(pulseValue, [0, 1], [0.2, 0.4]) }}
      >
        <Canvas>
          <NeonGrid intensity={intensityValue.get()} />
        </Canvas>
      </motion.div>
      
      {/* Enhanced glowing particles with breathing effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 100 * (i % 3 === 0 ? 1 : -0.5), 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 10
            }}
            className="absolute rounded-full bg-purple-500 blur-md"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: useTransform(pulseValue, [0, 1], 
                [0.1 + Math.random() * 0.2, 0.4 + Math.random() * 0.3])
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Avatar with glitch effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-purple-500/20 shadow-lg relative group">
              <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                DP
              </div>
              <div className="absolute inset-0 bg-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </div>
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity 
              }}
              className="absolute -inset-2 border-2 border-purple-400 rounded-full pointer-events-none"
            />
          </motion.div>
          
          {/* Name with typewriter effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 overflow-hidden"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-gray-300">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 animate-text-shimmer">
                Divij Patel
              </span>
            </h1>
          </motion.div>
          
          {/* Title with floating animation */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 flex items-center"
          >
            <motion.span
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mr-2"
            >
              👨‍💻
            </motion.span>
            Full Stack Developer
            <motion.span
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="inline-block ml-2"
            >
              🚀
            </motion.span>
          </motion.h2>

          {/* Holographic Badges */}
          <TechBadges />
          
          {/* CTA Buttons with hover glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 border border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-900/30 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}