"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { FiArrowDown } from "react-icons/fi"

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    canvas.width = width
    canvas.height = height

    interface Point {
      x: number
      y: number
      size: number
      opacity: number
      vx: number
      vy: number
    }

    const points: Point[] = []
    const numPoints = 8
    const baseSize = 2

    // Create initial points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: baseSize + Math.random() * 2,
        opacity: 0.1 + Math.random() * 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, width, height)

      // Create subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, "rgba(0, 0, 0, 0.95)")
      gradient.addColorStop(0.5, "rgba(20, 20, 20, 0.95)")
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.95)")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Update points
      points.forEach((point) => {
        point.x += point.vx
        point.y += point.vy

        // Bounce off edges
        if (point.x < 0 || point.x > width) point.vx *= -1
        if (point.y < 0 || point.y > height) point.vy *= -1
      })

      // Draw connecting lines
      points.forEach((point, i) => {
        points.forEach((otherPoint, j) => {
          if (i === j) return

          const dx = point.x - otherPoint.x
          const dy = point.y - otherPoint.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 400) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 - distance / 8000})`
            ctx.lineWidth = 0.5
            ctx.moveTo(point.x, point.y)
            ctx.lineTo(otherPoint.x, otherPoint.y)
            ctx.stroke()
          }
        })
      })

      // Draw points
      points.forEach((point) => {
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${point.opacity})`
        ctx.fill()
      })
    }

    animate()

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const typingVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            <motion.h2
              className="text-white text-xl md:text-2xl font-medium mb-4"
              variants={typingVariants}
            >
              Hello, I'm
            </motion.h2>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              variants={typingVariants}
            >
              Sudarshan Karunanithy
            </motion.h1>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            <motion.h3
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={typingVariants}
            >
              Data Engineer & Analytics Specialist
            </motion.h3>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
              variants={typingVariants}
            >
              Transforming raw data into actionable insights and building robust data pipelines that drive business
              decisions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#contact"
              className="bg-white text-black px-8 py-3 rounded-full font-medium transition-colors duration-300 hover:bg-gray-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="border border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>
        </div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-gray-300 transition-colors duration-300"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <FiArrowDown size={24} />
      </motion.a>
    </section>
  )
}

export default Hero

