'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import Image from 'next/image'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaBriefcase, FaBuilding, FaCode, FaLaptopCode } from 'react-icons/fa'

export interface TimelineItem {
  id: number
  type: 'work' | 'project'
  title: string
  company: string
  location: string
  date: string
  imageURL: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'AWS & Azure Kubernetes Architect',
    company: 'Alpega TMS ',
    location: 'Remote, Hybrid Vienna, Austria',
    date: 'Jan 2021 - 2024',
    imageURL: '/alpega-tms.png',
    description:
      'Designing and implementing scalable, secure, and high-performance kubernetes clusters under AWS cloud using terraform, bash, go and python.',
    achievements: [
      'Built and optimized microservices architecture with terraform, bash, go and python.',
      'Implemented pipelines using github actions and gitlab.',
      'Integrate ELK stack for logging and monitoring with prometheus and grafana.',
      'Organize and manage resources with terraform and ansible.',
      'Implement security best practices using IAM.',
      'Implement ROSA and ARO clusters in AWS and Azure.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    type: 'work',
    title: 'AWS DevOps Engineer',
    company: 'Viesure - Vienna Insurance Group',
    location: 'Remote, Hybrid Vienna, Austria',
    date: '2019 - 2021',
    imageURL: '/viesure.png',
    description: 'Built infrastructure as code and implemented CI/CD pipelines in AWS provider.',
    achievements: [
      'Migrate infrastructure to AWS using terraform and cloudformation.',
      'Implement CI/CD pipelines using github actions and gitlab pipelines.',
      'Create from scratch microservices with environments - infrastructure aligned with microservices environments.',
      'Create a deployment plan to release microservices.',
      'Implement security tests to be able to fix issues.',
      'Work with agile methodologies and create a operations team.',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-orange-500" />,
  },
  {
    id: 3,
    type: 'project',
    title: 'DevOps Engineer Consultant',
    company: 'Ebcont gmbh',
    location: 'Remote',
    imageURL: '/shopxindia.png',
    date: '2017 - 2019',
    description: 'E-commerce platform using microservices and Azure.',
    achievements: [
      'Implemented CI/CD with Azure DevOps.',
      'Integrated Azure Key Vault, Azure Monitor, and Azure Log Analytics.',
      'Deploy infrastructure to Azure using terraform and automate deployments.',
      'Orchestrated containerized services on Azure with Service Connect & Cloud Map.',
      'Implement Azure App Service, Azure Functions, Azure AD, Load Balancing, Azure Container Registry, Azure Container Service, Azure Kubernetes Service, etc.',
      'Use Jenking pipelines to build and deploy microservices.',
      'Worked with AWS infrastructure as Code, load balancing, cloudfront, s3, rds, etc .',
    ],
    icon: <FaCode className="w-6 h-6 text-primary" />,
    companyIcon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 4,
    type: 'project',
    title: 'AWS DevOps Engineer',
    company: 'Lilly farma company',
    location: 'Remote',
    imageURL: '',
    date: '2024',
    description: 'Freelancer',
    achievements: [
      'Implemented CI/CD with AWS.',
      'Deploy kafka clusters with terraform and create automate pipelines',
      'Connect kafka clusters with kubernetes microservices in EKS',
      'Align with team in India to be able to fix issues',
    ],
    icon: <FaBriefcase className="w-6 h-6 text-primary" />,
    companyIcon: <FaBuilding className="w-8 h-8 text-blue-500" />,
  },
]

export const TimelineElement: FC<{ item: TimelineItem; index: number }> = ({ item, index }) => (
  <div className="space-y-6" key={index}>
    <div className="flex items-center gap-4">
      {item.type === 'work' && (
        <Image
          src={item.imageURL}
          alt={`${item.company} Logo`}
          width={48}
          height={48}
          className="rounded-md shadow bg-muted p-1"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">
          {item.company} • {item.location}
        </p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground">{item.description}</p>

    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach) => (
        <li key={ach}>{ach}</li>
      ))}
    </ul>

    {item.type === 'project' && (
      <div className="w-full mt-4">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-md bg-background">
          <Image
            src={item.imageURL}
            alt={`${item.title} Architecture`}
            className="object-contain"
            loading="lazy"
            fill
          />
        </div>
      </div>
    )}
  </div>
)

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} index={item.id} />,
  }))

  return (
    <section id="experience" className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Professional Experience & Projects
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base">
            Highlights of my career and key projects showcasing my skills & impact.
          </p>
        </motion.div>

        <div className="relative w-full">
          <TimelineComponent data={timelineContent} />
        </div>
      </div>
    </section>
  )
}

export default Timeline