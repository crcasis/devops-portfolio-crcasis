'use client'

import { CardStack } from '../ui/card-stack'
import { cn } from '@/lib/utils'

export function ProfileCard() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  )
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-blue-100 text-blue-700 dark:bg-blue-700/[0.2] dark:text-blue-400 px-1 py-0.5',
        className,
      )}
    >
      {children}
    </span>
  )
}

const CARDS = [
  {
    id: 0,
    name: 'Ashlok Chaudhary',
    designation: 'Full-Stack Developer',
    content: (
      <p>
        Passionate about building <Highlight>scalable web applications</Highlight> with clean code
        and intuitive user experience. Skilled in <Highlight>React, Node.js, Kubernetes</Highlight>{' '}
        and cloud platforms.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Mentor / Peer',
    designation: 'Software Engineer',
    content: (
      <p>
        Ashlok is a <Highlight>team player</Highlight> who thrives in collaborative environments.
        Always eager to <Highlight>learn & share knowledge</Highlight> while delivering impactful
        solutions.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Client',
    designation: 'Product Owner',
    content: (
      <p>
        Delivers <Highlight>on time</Highlight> with attention to detail. Understands business goals
        and translates them into <Highlight>robust technical solutions</Highlight> that scale.
      </p>
    ),
  },
]
