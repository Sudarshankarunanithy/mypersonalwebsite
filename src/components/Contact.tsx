"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiLoader } from "react-icons/fi"
import SuccessDialog from "./SuccessDialog"

const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const Contact = () => {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  // Check if returning from FormSubmit redirect
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const submitted = urlParams.get("submitted")

    if (submitted === "true") {
      // Remove the query parameter
      const newUrl = window.location.pathname + window.location.hash
      window.history.replaceState({}, document.title, newUrl)

      // Show success dialog
      setShowSuccessDialog(true)

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      // Try to submit the form using JavaScript
      const formElement = formRef.current
      if (!formElement) throw new Error("Form not found")

      // Create a hidden iframe to handle the form submission
      const iframe = document.createElement("iframe")
      iframe.name = "hidden-iframe"
      iframe.style.display = "none"
      document.body.appendChild(iframe)

      // Set the form target to the iframe
      formElement.target = "hidden-iframe"
      formElement.action = `https://formsubmit.co/${contactEmail}`
      formElement.method = "POST"

      // Add a hidden field for the redirect URL
      const redirectInput = document.createElement("input")
      redirectInput.type = "hidden"
      redirectInput.name = "_next"
      redirectInput.value = `${window.location.href.split("?")[0]}?submitted=true`
      formElement.appendChild(redirectInput)

      // Add other FormSubmit configuration fields
      const subjectInput = document.createElement("input")
      subjectInput.type = "hidden"
      subjectInput.name = "_subject"
      subjectInput.value = "New message from portfolio website!"
      formElement.appendChild(subjectInput)

      const templateInput = document.createElement("input")
      templateInput.type = "hidden"
      templateInput.name = "_template"
      templateInput.value = "table"
      formElement.appendChild(templateInput)

      const captchaInput = document.createElement("input")
      captchaInput.type = "hidden"
      captchaInput.name = "_captcha"
      captchaInput.value = "false"
      formElement.appendChild(captchaInput)

      // Submit the form
      formElement.submit()

      // Show success dialog after a short delay
      setTimeout(() => {
        setShowSuccessDialog(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
        setIsSubmitting(false)

        // Clean up
        formElement.removeChild(redirectInput)
        formElement.removeChild(subjectInput)
        formElement.removeChild(templateInput)
        formElement.removeChild(captchaInput)
        document.body.removeChild(iframe)
      }, 2000)
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message)
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.")
      }
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FiMail size={20} />,
      title: "Email",
      value: "Sudarshankarunanithy7@gmail.com",
      link: "mailto:Sudarshankarunanithy7@gmail.com",
    },
    {
      icon: <FiPhone size={20} />,
      title: "Phone",
      value: "+1 236 867 7387",
      link: "tel:+12368677387",
    },
    {
      icon: <FiMapPin size={20} />,
      title: "Location",
      value: "Vancouver, BC",
      link: "#",
    },
  ]

  const socialLinks = [
    { icon: <FiLinkedin size={20} />, link: "https://www.linkedin.com/in/sudarshankaru/", label: "LinkedIn" },
    { icon: <FiGithub size={20} />, link: "https://github.com/Sudarshankarunanithy", label: "GitHub" },
    { icon: <XIcon size={20} />, link: "#", label: "X (formerly Twitter)" }
  ]

  // Replace this with the actual email you want to receive messages at
  const contactEmail = "Sudarshankarunanithy7@gmail.com"

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Let's connect
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out! I'm always open to new challenges and collaborations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h3>
                <p className="text-gray-600 mb-8">
                  Ready to start your next data project? Let's discuss how I can help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-colors duration-300"
                  >
                    <div className="text-gray-900 mt-1">{info.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-900">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white text-gray-600 rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300 border border-gray-200"
                      whileHover={{ y: -2 }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Start a project</h3>

                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                    {errorMessage}
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 rounded-lg font-medium transition-all duration-300 disabled:opacity-70 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <FiLoader className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <SuccessDialog isOpen={showSuccessDialog} onClose={() => setShowSuccessDialog(false)} />
    </section>
  )
}

export default Contact

