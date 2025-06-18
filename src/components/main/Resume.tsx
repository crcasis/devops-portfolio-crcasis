'use client'

import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import dynamic from 'next/dynamic'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const Viewer = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Viewer), {
  ssr: false,
})
const Worker = dynamic(() => import('@react-pdf-viewer/core').then((mod) => mod.Worker), {
  ssr: false,
})

const ResumeSection = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  return (
    <section
      id="resume"
      className="bg-gradient-to-b from-neutral-100 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 text-neutral-800 dark:text-white px-4 py-24 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-2">
          My Resume
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-xl mx-auto">
          Explore my full-stack development journey through a clean and interactive resume preview.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-neutral-800/40 shadow-xl backdrop-blur-md"
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          <div className="h-[85vh] overflow-auto custom-scrollbar select-text">
            <Viewer fileUrl="/resume.pdf" plugins={[defaultLayoutPluginInstance]} />
          </div>
        </Worker>
      </motion.div>

      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium shadow-lg hover:shadow-cyan-500/40 transition-all"
      >
        <FaDownload className="text-lg" />
        Download Resume
      </motion.a>
    </section>
  )
}

export default ResumeSection
