"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Description - Large text like Martha template */}
          <motion.div variants={itemVariants} className="mb-20">
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-4xl font-normal">
              I build the data plumbing for companies.
            </p>
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed max-w-4xl font-normal mt-6">
              I make sure the right data shows up in the right place - clean, fast, and on time - so teams can trust it and use it.
            </p>
          </motion.div>

          {/* Profile Information - Larger photo and text like Martha template */}
          <motion.div variants={itemVariants} className="flex items-center space-x-8 mb-20">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src="/image/photo_01.jpg"
                alt="Sudarshan Karunanithy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Sudarshan Karunanithy
              </h3>
              <p className="text-xl text-gray-600 font-normal">
                Data Engineer & Analytics Specialist
              </p>
            </div>
          </motion.div>

          {/* Statistics - Larger numbers and better spacing like Martha template */}
          <motion.div variants={itemVariants} className="flex space-x-20">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                3+
              </div>
              <div className="text-base text-gray-600 font-medium">
                Years industry experience
              </div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                15+
              </div>
              <div className="text-base text-gray-600 font-medium">
                Projects completed
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

