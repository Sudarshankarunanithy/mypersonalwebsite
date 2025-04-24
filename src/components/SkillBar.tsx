"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  percentage: number
  color: string
  delay: number
  inView: boolean
}

const SkillBar = ({ name, percentage, color, delay, inView }: SkillBarProps) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    let timeout: number;
    if (inView) {
      timeout = setTimeout(() => {
        setWidth(percentage)
      }, delay * 1000)
    } else {
      setWidth(0)
    }

    return () => clearTimeout(timeout)
  }, [inView, percentage, delay])

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-gray-900 font-medium">{name}</span>
        <span className="text-teal-500 font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeInOut" }}
        />
      </div>
    </div>
  )
}

export default SkillBar

