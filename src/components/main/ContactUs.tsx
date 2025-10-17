'use client'

import { Variants, motion } from 'framer-motion'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { FaEnvelope, FaMapMarkerAlt, FaRegCopy } from 'react-icons/fa'
import { FaSquarePhone } from 'react-icons/fa6'

const ContactUs: FC = () => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    toast.success(`${label} copied!`)
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="contact" className="py-20 bg-background text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto bg-muted/50 backdrop-blur-lg rounded-none p-8 sm:p-10 shadow-2xl border border-border"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div
            className="space-y-6"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl font-extrabold">Connect With Me</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Have a project in mind or a question? Reach out and let&apos;s turn your ideas into
              reality.
            </p>

            <div className="space-y-5 text-foreground">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary text-lg" />
                <span className="text-sm font-medium select-text">crcasis@proton.me</span>
                <button
                  onClick={() => copyToClipboard('crcasis@proton.me', 'Email')}
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label="Copy email"
                >
                  <FaRegCopy />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <FaSquarePhone className="text-primary text-lg" />
                <span className="text-sm font-medium select-text">+34 629 785 212</span>
                <button
                  onClick={() => copyToClipboard('+34 629785212', 'Phone number')}
                  className="text-muted-foreground hover:text-primary transition"
                  aria-label="Copy phone number"
                >
                  <FaRegCopy />
                </button>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary text-lg" />
                <span className="text-sm font-medium select-text">Madrid, Spain</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs
