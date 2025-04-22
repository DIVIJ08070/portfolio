'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

import contriflow from '../../public/assets/contriflow.png'
import scetTnp from '../../public/assets/scetTnp.png'
import trafficDen from '../../public/assets/trafficDen.jpg'
import NGO from '../../public/assets/NGO.png'
import foodDil from '../../public/assets/foodDil.png'
import HumanVSAi from '../../public/assets/HumanVSAi.png'

const projects = [
  {
    title: "ContriFlow - Reward Services for Contributors on GitHub",
    description: "Created a decentralized reward service for repo owners to help manage funding to contributors. Built on Ethereum Blockchain with Clerk for user session management, NeonDB and Prisma for database, and Next.js as the framework.",
    tags: ["Next.js", "Blockchain", "Prisma", "Ethereum"],
    github: "https://github.com/DIVIJ08070/Git-Rewards",
    live: "#",
    image: contriflow
  },
  {
    title: "Training and Placement Portal for SCET College",
    description: "A TnP portal for college with advanced placement data visualization. Helps the TnP department provide information to students more effectively.",
    tags: ["MERN Stack", "MongoDB", "REST API", "Data Visualization"],
    github: "https://github.com/DIVIJ08070/ScetTnP_Frontend",
    live: "#",
    image: scetTnp
  },
  {
    title: "Density Detection System",
    description: "Vehicle density detection web app that identifies vehicle density on roads for smart traffic signal projects. Uses image processing and a fine-tuned YOLO v8 model.",
    tags: ["YOLOv8n", "Image Processing", "Streamlit", "Python"],
    github: "https://github.com/MannPatel1207",
    live: "#",
    image: trafficDen
  },
  {
    title: "NGO Funding Platform",
    description: "Ethereum blockchain-based platform for NGOs to receive funding. Donors can track donations, and NGOs must provide proof of spending. Built with MERN stack and Solidity contracts.",
    tags: ["React", "Blockchain", "Ethereum", "Solidity"],
    github: "https://github.com/DIVIJ08070/NGO",
    live: "#",
    image: NGO
  },
  {
    title: "Gamified Food Delivery App",
    description: "Food delivery application with gamification elements like leaderboards, reward missions, and badge systems. Won the Net Code award at VCET Hackathon.",
    tags: ["React", "MongoDB", "REST API", "Gamification"],
    github: "https://github.com/DIVIJ08070/Gamified-food-delivery-app---VCET-Hackthonn",
    live: "#",
    image: foodDil
  },
  {
    title: "Human VS AI Gameplaying Platform",
    description: "A gameplaying platform for human vs AI matches. Uses MERN stack for the web app and Python for the AI models.",
    tags: ["Django", "AI", "React", "Python"],
    github: "https://github.com/DIVIJ08070/HUMANVSAI",
    live: "#",
    image: HumanVSAi
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            My <span className="gradient-text bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-300">
            Here are some of my featured projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800"
            >
              <div className="h-48 relative">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/DIVIJ08070?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400/10 transition-all duration-300"
          >
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}