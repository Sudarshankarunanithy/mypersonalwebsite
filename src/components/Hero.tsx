"use client"

import { motion } from "framer-motion"
import { FiArrowDown } from "react-icons/fi"

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Image Background - Centered like Martha template */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-black/20 z-10"></div>
        <img
          src="/image/photo_01.jpg"
          alt="Sudarshan Karunanithy"
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>

      {/* Content - Positioned at bottom like Martha template */}
      <div className="relative z-20 container mx-auto px-6 h-screen flex items-end pb-20">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-left relative"
          >
            {/* Subtitle - Smaller text like Martha template */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-base md:text-lg font-normal text-white/90 tracking-wide">
                Data Engineering & Analytics Specialist
              </h2>
            </motion.div>

            {/* Main Title - Large and bold like Martha template */}
            <motion.div variants={itemVariants} className="mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                Sudarshan Karunanithy
              </h1>
            </motion.div>

            {/* CTA Buttons - Positioned like Martha template */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-100 hover:scale-105 inline-flex items-center justify-center text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a project
              </motion.a>
              <motion.a
                href="#projects"
                className="text-white hover:text-gray-300 px-6 py-3 rounded-full font-medium transition-colors duration-300 border border-white hover:bg-white hover:text-black inline-flex items-center justify-center text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors duration-300 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <FiArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  )
}

export default Hero



