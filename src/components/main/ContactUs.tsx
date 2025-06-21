/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Variants, motion } from 'framer-motion'
import { FC, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaRegCopy,
  FaSpinner,
  FaUser,
} from 'react-icons/fa'
import { FaSquarePhone } from 'react-icons/fa6'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const ContactUs: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

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

  const inputVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, delay: i * 0.1 },
    }),
  }

  return (
    <section id="contact" className="py-20 bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto bg-neutral-900/90 backdrop-blur-lg rounded-2xl p-8 sm:p-10 shadow-2xl border border-neutral-700/20"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              className="w-full md:w-1/2 space-y-6 text-neutral-100"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Connect With Me
              </h2>
              <p className="text-neutral-300 leading-relaxed text-base">
                Have a project in mind or a question to discuss? Reach out, and let&apos;s bring
                your ideas to reality with innovative solutions.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-400 text-lg" />
                  <span className="text-sm font-medium select-text">chaudharyashlok@gmail.com</span>
                  <button
                    onClick={() => copyToClipboard('chaudharyashlok@gmail.com', 'Email')}
                    className="text-neutral-400 hover:text-blue-400 transition"
                    aria-label="Copy email"
                  >
                    <FaRegCopy />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <FaSquarePhone className="text-blue-400 text-lg" />
                  <span className="text-sm font-medium select-text">+91 77670 12860</span>
                  <button
                    onClick={() => copyToClipboard('+91 7767012860', 'Phone number')}
                    className="text-neutral-400 hover:text-blue-400 transition"
                    aria-label="Copy phone number"
                  >
                    <FaRegCopy />
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400 text-lg" />
                  <span className="text-sm font-medium select-text">Mumbai, India</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-1/2 space-y-6"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact Form">
                <motion.div custom={0} variants={inputVariants} initial="hidden" animate="visible">
                  <div className="relative">
                    <FaUser className="absolute top-3.5 left-3 text-neutral-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full pl-10 pr-4 py-3 bg-neutral-800/50 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-neutral-500 transition-all duration-300"
                      required
                      aria-label="Full Name"
                    />
                  </div>
                </motion.div>
                <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible">
                  <div className="relative">
                    <FaEnvelope className="absolute top-3.5 left-3 text-neutral-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full pl-10 pr-4 py-3 bg-neutral-800/50 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-neutral-500 transition-all duration-300"
                      required
                      aria-label="Email Address"
                    />
                  </div>
                </motion.div>
                <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full pl-4 pr-4 py-3 bg-neutral-800/50 text-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-neutral-500 transition-all duration-300"
                    required
                    aria-label="Subject"
                  />
                </motion.div>
                <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full pl-4 pr-4 py-3 bg-neutral-800/50 text-neutral-200 rounded-lg h-36 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-neutral-500 transition-all duration-300"
                    required
                    aria-label="Message"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </motion.button>
                {status && (
                  <motion.p
                    className={`text-center text-sm ${
                      status.includes('successfully') ? 'text-green-400' : 'text-red-400'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status}
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactUs
