'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import type { FC, JSX } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import {
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si'

// Map tags to their corresponding icons
const tagIcons: Record<string, JSX.Element> = {
  'Next.js': <SiNextdotjs className="w-4 h-4" />,
  TypeScript: <SiTypescript className="w-4 h-4" />,
  'Tailwind CSS': <SiTailwindcss className="w-4 h-4" />,
  React: <SiReact className="w-4 h-4" />,
  CSS: <SiCss3 className="w-4 h-4" />,
  'Three.js': <SiThreedotjs className="w-4 h-4" />,
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  github: string
  live: string
  tags: string[]
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'Next.js Portfolio',
    description:
      'A high-performance portfolio built with Next.js, showcasing dynamic content and SEO optimization.',
    image: '/NextWebsite.png',
    github: 'https://github.com/your-repo/next-portfolio',
    live: 'https://your-live-site.com',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Interactive Card Components',
    description: 'Reusable card components with smooth hover effects and responsive design.',
    image: '/CardImage.png',
    github: 'https://github.com/your-repo/interactive-cards',
    live: 'https://your-live-site.com',
    tags: ['React', 'CSS', 'TypeScript'],
  },
  {
    id: 3,
    title: 'Space Themed Website',
    description: 'A visually engaging space-themed website with immersive UI and animations.',
    image: '/SpaceWebsite.png',
    github: 'https://github.com/your-repo/space-website',
    live: 'https://your-live-site.com',
    tags: ['Next.js', 'Three.js', 'Tailwind CSS'],
  },
]

// ProjectCard component
interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateY: index % 2 === 0 ? -30 : 30,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: index * 0.15,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: index % 2 === 0 ? 5 : -5,
      rotateX: -5,
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      className="relative group bg-neutral-900/60 backdrop-blur-lg rounded-2xl border border-neutral-700/30 overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          quality={90}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80 group-hover:bg-gradient-to-b group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-neutral-100">{project.title}</h3>
        <p className="text-neutral-300 text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <motion.span
              key={idx}
              className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-neutral-100 text-xs font-medium rounded-full"
              whileHover={{
                scale: 1.1,
                background:
                  'linear-gradient(to right, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))',
              }}
            >
              {tagIcons[tag] || null}
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-neutral-700/50 text-neutral-200 text-sm font-medium rounded-full transition-all hover:bg-blue-600/70 hover:text-white"
            whileHover={{ scale: 1.1 }}
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <FaGithub className="w-5 h-5" />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-neutral-700/50 text-neutral-200 text-sm font-medium rounded-full transition-all hover:bg-purple-600/70 hover:text-white"
            whileHover={{ scale: 1.1 }}
            aria-label={`View live demo of ${project.title}`}
          >
            <FaExternalLinkAlt className="w-5 h-5" />
            Live
          </motion.a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500" />
    </motion.div>
  )
}

// Projects component
const Projects: FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section
      id="projects"
      className="py-20"
      style={{
        background: 'linear-gradient(to bottom, #171717, #262626)', // Neutral-900 to Neutral-800
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neutral-100 to-blue-300 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Discover my collection of innovative projects showcasing technical expertise and
            creativity.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
