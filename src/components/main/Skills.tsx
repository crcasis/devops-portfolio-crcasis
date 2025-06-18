'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill,
  Skill_data,
} from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'

const allSkills = [
  ...Skill_data,
  ...Frontend_skill,
  ...Backend_skill,
  ...Full_stack,
  ...Other_skill,
]
  .reduce((map, skill) => {
    if (!map.has(skill.skill_name)) {
      map.set(skill.skill_name, { ...skill, width: 40, height: 40 })
    }
    return map
  }, new Map<string, Skill>())
  .values()

const uniqueSkills = Array.from(allSkills).sort((a, b) => a.skill_name.localeCompare(b.skill_name))

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-12 py-16 px-4 sm:px-8 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white min-h-[600px]"
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 z-[-1] opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,_rgba(59,130,246,0.2),_transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_80%_80%,_rgba(59,130,246,0.15),_transparent_70%)]" />
      </div>

      <div className="text-center max-w-3xl">
        <h2
          id="skills-heading"
          className="text-3xl sm:text-4xl font-bold text-blue-300 tracking-tight"
        >
          Technical Skills
        </h2>
        <p className="mt-2 text-neutral-400 text-lg sm:text-xl">
          A curated selection of my expertise in modern web and software development
        </p>
      </div>

      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {uniqueSkills.map((skill, index) => (
            <motion.div
              key={skill.skill_name}
              className="group relative flex flex-col items-center p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/30 hover:bg-neutral-700/70 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1"
              role="listitem"
              aria-label={skill.skill_name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SkillDataProvider
                src={skill.Image}
                width={40}
                height={40}
                index={index}
                className="group-hover:scale-110 transition-transform duration-200"
              />
              <span className="absolute top-full mt-2 text-xs font-medium text-neutral-200 bg-neutral-900/90 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {skill.skill_name}
              </span>
              <div className="absolute inset-0 rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-blue-500/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
