/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { FC, FormEvent, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { FaEnvelope, FaUser, FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const ContactUs: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setStatus('Failed to send message. Please try again.')
    }
    setTimeout(() => setStatus(''), 3000)
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' } as const,
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 } as const,
    },
  }

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        background: 'linear-gradient(to bottom, #171717, #262626)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto bg-neutral-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-700/30 flex flex-col md:flex-row gap-8"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div
            className="w-full md:w-1/2 space-y-6 text-neutral-200"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-neutral-400 leading-relaxed">
              I&apos;d love to hear from you! Whether you have a project in mind, a question, or
              just want to connect, feel free to reach out. I&apos;m here to help bring your ideas
              to life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-sm">ashlok@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <span className="text-sm">+91-123-456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-neutral-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-700/50 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 transition-all duration-200"
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-neutral-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-700/50 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 transition-all duration-200"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full pl-4 pr-4 py-3 bg-neutral-700/50 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 transition-all duration-200"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full pl-4 pr-4 py-3 bg-neutral-700/50 text-neutral-200 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-neutral-400 transition-all duration-200"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
              {status && <p className="text-center text-sm text-neutral-300">{status}</p>}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs
