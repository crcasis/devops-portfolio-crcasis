'use client'

import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { RxGithubLogo } from 'react-icons/rx'

const Footer: FC = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0)

  useEffect(() => {
    const savedCount = localStorage.getItem('visitorCount')
    const lastVisit = localStorage.getItem('lastVisit')
    const today = new Date().toDateString()

    let count = savedCount ? parseInt(savedCount, 10) : 0

    if (!lastVisit || lastVisit !== today) {
      count += 1
      localStorage.setItem('visitorCount', count.toString())
      localStorage.setItem('lastVisit', today)
    }

    setVisitorCount(count)
  }, [])

  const socialLinks = [
    {
      href: 'https://github.com/Ashlok2003',
      icon: <RxGithubLogo className="w-5 h-5" />,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/ashlok2003/',
      icon: <FaLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
    },
    {
      href: 'https://x.com/ashlok2003',
      icon: <FaTwitter className="w-5 h-5" />,
      label: 'Twitter',
    },
  ]

  const quickLinks = ['About', 'Skills', 'Projects']

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <footer
      className="relative w-full px-6 py-12 mt-20 bg-neutral-900/60 backdrop-blur-lg border-t border-neutral-700/30"
      style={{
        background: 'linear-gradient(to bottom, #171717, #262626)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-neutral-300"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={childVariants}>
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ashlok Chaudhary
            </h1>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Crafting scalable web apps, open-source tools, and innovative digital experiences.
            </p>
          </motion.div>

          <motion.div className="space-y-4" variants={childVariants}>
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="space-y-4" variants={childVariants}>
            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">
              Connect
            </h2>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-neutral-700/50 rounded-full text-neutral-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  aria-label={`Visit my ${link.label} profile`}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 text-center space-y-2"
          variants={childVariants}
          initial="hidden"
          animate="visible"
        >
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Built with ❤️ by Ashlok Chaudhary.
          </p>
          <p className="text-xs text-neutral-400">
            Visitors:{' '}
            <span className="font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {visitorCount.toLocaleString()}
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
