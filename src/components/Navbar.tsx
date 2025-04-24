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
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="relative block group"
                >
                  <span className="relative block px-6 py-2">
                    <motion.span 
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'bg-teal-500' 
                          : 'opacity-0 group-hover:opacity-100 group-hover:bg-teal-500'
                      }`}
                    />
                    <span 
                      className={`relative z-10 text-base font-medium transition-colors duration-300 ${
                        activeSection === item.id 
                          ? 'text-white' 
                          : 'text-gray-800 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center relative group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative block px-6 py-2">
            <motion.span 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-teal-500 transition-all duration-300"
            />
            <span className="relative z-10 font-medium text-gray-800 transition-colors duration-300 group-hover:text-white">
              Contact Me
            </span>
          </span>
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
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.id}
                    className="w-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={`#${item.id}`}
                      className="relative block group"
                      onClick={handleMenuItemClick}
                    >
                      <span className="relative block px-6 py-2">
                        <motion.span 
                          className={`absolute inset-0 rounded-full transition-all duration-300 ${
                            activeSection === item.id 
                              ? 'bg-teal-500' 
                              : 'opacity-0 group-hover:opacity-100 group-hover:bg-teal-500'
                          }`}
                        />
                        <span 
                          className={`relative z-10 text-base font-medium transition-colors duration-300 ${
                            activeSection === item.id 
                              ? 'text-white' 
                              : 'text-gray-800 group-hover:text-white'
                          }`}
                        >
                          {item.label}
                        </span>
                      </span>
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

