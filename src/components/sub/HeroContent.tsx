'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { FaGithub } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 border border-purple-600 bg-gradient-to-r from-purple-950/30 to-cyan-900/30 backdrop-blur-sm shadow-md w-fit"
          role="banner"
          aria-label="Developer Portfolio Badge"
        >
          <SparklesIcon className="h-4 w-4 text-purple-400" />
          <h1 className="text-xs font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            The Developer&apos;s Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-2 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Transforming Ideas Into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {' '}
              Digital Reality{' '}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="font-semibold italic text-gray-300 my-5 max-w-[600px]"
        >
          I&apos;m Ashlok Chaudhary, a Full Stack Software Engineer specializing in building
          performant, scalable web platforms using modern technologies like Next.js, TypeScript, and
          Node.js.
          <br />
          Dive into my projects and skillset to see how I bring ideas to life through code.
        </motion.p>

        <div className="flex gap-4 mt-4">
          <motion.a
            variants={slideInFromLeft(1)}
            href="/Ashlok_Chaudhary_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <HiDownload className="text-white text-lg" />
            Download Resume
          </motion.a>

          <motion.a
            variants={slideInFromLeft(1.2)}
            href="https://github.com/Ashlok2003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-neutral-800 border border-neutral-600 rounded-lg shadow hover:scale-105 transition-transform"
          >
            <FaGithub className="text-white text-lg" />
            GitHub
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image src="/mainIconsdark.svg" alt="work icons" height={650} width={650} />
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
