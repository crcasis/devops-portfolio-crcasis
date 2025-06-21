'use client'

import { FC } from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { FaGithub } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import Image from 'next/image'

const HeroContent: FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-20 pt-12 md:pt-16 w-full z-[20] min-h-screen mt-5"
    >
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work icons illustration"
          height={850}
          width={850}
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] h-auto"
          priority
        />
      </motion.div>

      <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center m-auto text-start order-2 md:order-1">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-purple-500 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-md shadow-md w-fit"
          role="banner"
          aria-label="Developer Portfolio Badge"
        >
          <SparklesIcon className="h-4 w-4 text-purple-300" />
          <h1 className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
            The Developer&apos;s Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight"
        >
          <span>
            Transforming Ideas Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              {' '}
              Digital Reality{' '}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="font-medium italic text-gray-200 text-base sm:text-lg md:text-xl my-4 max-w-[600px] leading-relaxed"
        >
          I&apos;m Ashlok Chaudhary, a Full Stack Software Engineer specializing in building
          performant, scalable web platforms using modern technologies like Next.js, TypeScript, and
          Node.js.
          <br />
          Explore my projects and skills to see how I bring ideas to life through code.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg shadow-lg hover:scale-105 focus:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Download Resume"
          >
            <HiDownload className="text-white text-lg" />
            Download Resume
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1.2)}
            href="https://github.com/Ashlok2003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 text-sm sm:text-base font-medium text-white bg-neutral-800 border border-neutral-600 rounded-lg shadow-lg hover:scale-105 focus:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Visit GitHub Profile"
          >
            <FaGithub className="text-white text-lg" />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroContent
