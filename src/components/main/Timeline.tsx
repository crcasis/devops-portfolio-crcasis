'use client'

import { FC, JSX } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaBriefcase, FaAward, FaCode } from 'react-icons/fa'
import Image from 'next/image'

interface TimelineItem {
  id: number
  title: string
  company: string
  location: string
  date: string
  description: string
  achievements: string[]
  icon: JSX.Element
  logo?: string
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    date: 'Jan 2023 - Present',
    description: 'Led development of scalable web applications using Next.js and TypeScript.',
    achievements: [
      'Architected a microservices-based platform, improving system scalability by 40%.',
      'Mentored 5 junior developers, enhancing team productivity.',
      'Received Employee of the Year award for innovation.',
    ],
    icon: <FaBriefcase className="w-5 h-5 text-neutral-200" />,
    logo: '/techcorp-logo.png',
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'Innovate Solutions',
    location: 'Remote',
    date: 'Jun 2020 - Dec 2022',
    description: 'Developed full-stack applications with React, Node.js, and MongoDB.',
    achievements: [
      'Built a real-time dashboard, reducing client response time by 30%.',
      'Implemented CI/CD pipelines, cutting deployment time by 50%.',
      'Contributed to open-source projects on GitHub.',
    ],
    icon: <FaCode className="w-5 h-5 text-neutral-200" />,
    logo: '/innovate-logo.png',
  },
  {
    id: 3,
    title: 'Junior Developer',
    company: 'StartupX',
    location: 'New York, NY',
    date: 'May 2018 - May 2020',
    description: 'Assisted in building front-end features using React and Tailwind CSS.',
    achievements: [
      'Developed a user authentication system, improving security.',
      'Optimized website performance, reducing load time by 20%.',
      'Won Hackathon for innovative feature prototype.',
    ],
    icon: <FaAward className="w-5 h-5 text-neutral-200" />,
    logo: '/startupx-logo.png',
  },
]

interface TimelineElementProps {
  item: TimelineItem
}

const TimelineElementComponent: FC<TimelineElementProps> = ({ item }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'rgba(38, 38, 38, 0.5)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(64, 64, 64, 0.5)',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(38, 38, 38, 0.5)' }}
      date={item.date}
      dateClassName="text-neutral-400 text-sm font-medium"
      iconStyle={{
        background: '#262626',
        color: '#d4d4d4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      icon={item.icon}
    >
      <div className="p-4 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-3 mb-3">
          {item.logo && (
            <div className="relative w-10 h-10">
              <Image
                src={item.logo}
                alt={`${item.company} logo`}
                fill
                className="object-contain rounded-md"
                sizes="40px"
                quality={80}
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100">{item.title}</h3>
            <p className="text-sm text-neutral-300">
              {item.company} • {item.location}
            </p>
          </div>
        </div>
        <p className="text-sm text-neutral-400 mb-3">{item.description}</p>
        <ul className="list-disc list-inside text-sm text-neutral-400">
          {item.achievements.map((achievement, index) => (
            <li key={index} className="mb-1">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  )
}

const Timeline: FC = () => {
  return (
    <section
      id="experience"
      className="py-16"
      style={{
        background: 'linear-gradient(to bottom, #171717, #262626)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-300">Work Experience & Achievements</h1>
          <p className="text-neutral-400 mt-3 max-w-xl mx-auto text-sm">
            A journey through my professional milestones and contributions.
          </p>
        </div>
        <VerticalTimeline lineColor="#404040">
          {timelineData.map((item) => (
            <TimelineElementComponent key={item.id} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Timeline
