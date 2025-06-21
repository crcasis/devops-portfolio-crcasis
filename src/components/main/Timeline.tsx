'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import { FaBriefcase, FaBuilding, FaCode, FaLaptopCode } from 'react-icons/fa'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

interface TimelineItem {
  id: number
  title: string
  company: string
  location: string
  date: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    company: 'Talent Corner HR Services Pvt. Ltd.',
    location: 'Remote',
    date: 'Apr 2025 - Present',
    description: 'Working as a full stack developer building scalable lead management systems.',
    achievements: [
      'Built lead verification & enrichment service using Node.js and MySQL.',
      'Designed reusable React components for dashboards and follow-up tracking.',
      'Implemented modular architecture with service-controller pattern and Zod validation.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-neutral-200" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-orange-400" />,
  },
  {
    id: 2,
    title: 'Architected & Deployed ShopXIndia',
    company: 'Personal Project',
    location: 'Remote',
    date: 'Feb 2024 - Sep 2025',
    description:
      'Designed a full-scale e-commerce platform using a microservices architecture and deployed via AWS ECS Fargate.',
    achievements: [
      'Used CI/CD with CodePipeline, CodeBuild, and CodeDeploy for efficient releases.',
      'Integrated AWS S3, RDS, ElastiCache, CloudFront, and Cognito.',
      'Managed containerized services via ECS Service Connect and Cloud Map.',
    ],
    icon: <FaCode className="w-6 h-6 text-neutral-200" />,
    companyIcon: <FaLaptopCode className="w-8 h-8 text-blue-400" />,
  },
]

interface TimelineElementProps {
  item: TimelineItem
  index: number
}

const TimelineElementComponent: FC<TimelineElementProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: '#1F2937',
          color: '#FFFFFF',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(75, 85, 99, 0.2)',
          borderRadius: '1rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          padding: '1.5rem',
        }}
        contentArrowStyle={{
          borderRight: index % 2 === 0 ? '10px solid rgba(31, 41, 55, 0.9)' : 'none',
          borderLeft: index % 2 !== 0 ? '10px solid rgba(31, 41, 55, 0.9)' : 'none',
        }}
        date={item.date}
        dateClassName="text-gray-200 text-base font-semibold tracking-wide"
        iconStyle={{
          background: '#1f2937',
          color: '#e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 0 4px rgba(31, 41, 55, 0.5)',
        }}
        icon={item.icon}
        position={index % 2 === 0 ? 'right' : 'left'}
      >
        <div className="p-4 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-12 h-12 bg-neutral-700 rounded-full">
              {item.companyIcon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-100">{item.title}</h3>
              <p className="text-sm text-neutral-300">
                {item.company} • {item.location}
              </p>
            </div>
          </div>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">{item.description}</p>
          <ul className="list-disc list-inside text-sm text-neutral-400 space-y-2">
            {item.achievements.map((achievement, index) => (
              <li key={index} className="leading-relaxed">
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </VerticalTimelineElement>
    </motion.div>
  )
}

const Timeline: FC = () => {
  return (
    <section id="experience" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-blue-300 tracking-tight">
            Professional Experience & Achievements
          </h1>
          <p className="text-neutral-300 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
            A curated overview of my career milestones and impactful contributions.
          </p>
        </motion.div>
        <VerticalTimeline lineColor="#6b7280">
          {timelineData.map((item, index) => (
            <TimelineElementComponent key={item.id} item={item} index={index} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Timeline
