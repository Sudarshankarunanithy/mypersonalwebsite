"use client"

import { motion, AnimatePresence } from "framer-motion"
import { FiCheckCircle, FiX } from "react-icons/fi"

interface SuccessDialogProps {
  isOpen: boolean
  onClose: () => void
}

const SuccessDialog = ({ isOpen, onClose }: SuccessDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 300,
                duration: 0.3 
              }}
              className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <motion.button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close dialog"
                >
                  <FiX size={24} />
                </motion.button>
              </div>

              <motion.div 
                className="text-center mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-900 mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                    delay: 0.2
                  }}
                >
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <FiCheckCircle size={32} />
                  </motion.div>
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold mb-2 text-gray-900"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Message Sent!
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </motion.p>
              </motion.div>

              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-lg"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default SuccessDialog

