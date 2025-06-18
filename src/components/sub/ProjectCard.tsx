import { motion } from 'framer-motion'
import Image from 'next/image'
import type { FC } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  github: string
  live: string
  tags: string[]
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
          priority={false}
          quality={75}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-purple-600 text-white text-xs rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
            aria-label={`View ${project.title} on GitHub`}
          >
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
            aria-label={`View live demo of ${project.title}`}
          >
            <FaExternalLinkAlt size={20} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 border-4 border-purple-500 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default ProjectCard
