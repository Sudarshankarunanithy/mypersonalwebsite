"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" />
        ) : (
          <>
            <Navbar activeSection={activeSection} />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Education />
              <Contact />
            </main>
            <footer className="py-8 text-center text-sm text-gray-500 bg-gray-50">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center space-y-2"
              >
                <p className="flex items-center justify-center gap-2">
                  Crafted with ❤️ by{" "}
                  <a 
                    href="https://www.linkedin.com/in/sudarshankaru/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-700 inline-flex items-center gap-1 font-medium"
                  >
                    Sudarshan Karunanithy
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  Design inspiration from{" "}
                  <a 
                    href="https://martha-template.framer.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-gray-700 inline-flex items-center gap-1 font-medium"
                  >
                    Martha Template
                  </a>
                </p>
                <p>© {new Date().getFullYear()}</p>
              </motion.div>
            </footer>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

