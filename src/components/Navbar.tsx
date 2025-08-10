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

  const handleMenuItemClick = () => {
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo - Left side like Martha template */}
        <motion.a 
          href="#hero" 
          className={`text-lg font-bold transition-colors duration-300 ${
            scrolled ? "text-gray-900" : "text-white"
          }`}
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Sudarshan Karunanithy
        </motion.a>

        {/* Desktop Navigation - Center like Martha template */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative block font-medium text-sm transition-colors duration-300 ${
                    scrolled 
                      ? (activeSection === item.id ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900')
                      : (activeSection === item.id ? 'text-white' : 'text-white/80 hover:text-white')
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 transition-colors duration-300 ${
                        scrolled ? 'bg-gray-900' : 'bg-white'
                      }`}
                      layoutId="activeSection"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA Button - Right side like Martha template */}
        <motion.a
          href="#contact"
          className={`hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
            scrolled 
              ? "bg-gray-900 text-white hover:bg-gray-800" 
              : "bg-white text-black hover:bg-gray-100"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Get in touch</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
          </svg>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            scrolled ? "text-gray-900 hover:text-gray-700" : "text-white hover:text-white/80"
          }`}
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
                      className={`block py-3 font-medium transition-colors duration-300 ${
                        activeSection === item.id 
                          ? 'text-gray-900' 
                          : 'text-gray-600 hover:text-gray-900'
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

