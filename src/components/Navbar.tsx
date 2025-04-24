"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX } from "react-icons/fi"

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleMenuItemClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="text-xl font-medium" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src="/Logo.svg" 
            alt="Logo" 
            className="h-16 w-auto"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            {navItems.map((item) => (
              <motion.li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative group py-2 px-1"
                >
                  <motion.span 
                    className={`text-black text-base relative z-10 transition-colors duration-300 ${
                      activeSection === item.id ? 'text-teal-500' : 'group-hover:text-teal-500'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                  <motion.span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-500 transform origin-left transition-all duration-300 ease-out ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                  <motion.span 
                    className={`absolute inset-0 -z-0 bg-teal-50 rounded-lg transform origin-left transition-all duration-300 ease-out ${
                      activeSection === item.id ? 'scale-100 opacity-100' : 'scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100'
                    }`}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center border-2 border-teal-500 px-5 py-2 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 rounded-lg"
          whileHover={{ scale: 1.02, boxShadow: "0 0 10px rgba(45,212,191,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Contact Me
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-2xl text-black hover:text-teal-500 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-sm z-40 md:hidden pt-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="container mx-auto px-6">
              <ul className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.id}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className={`block text-lg transition-colors duration-300 ${
                        activeSection === item.id ? "text-teal-500" : "text-black hover:text-teal-500"
                      }`}
                      onClick={handleMenuItemClick}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar

