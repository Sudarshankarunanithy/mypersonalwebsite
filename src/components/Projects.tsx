"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  const projects = [
    {
      title: "Data Pipeline Automation",
      description: "Built scalable ETL pipelines using Apache Spark and Databricks for processing large-scale datasets, reducing processing time by 60%.",
      tags: ["Apache Spark", "Databricks", "Python", "ETL"],
      image: "/Logos_Tech/Databricks.png",
      link: "#",
      github: "#"
    },
    {
      title: "Cloud Data Migration",
      description: "Migrated on-premise data infrastructure to AWS cloud, implementing data governance and security best practices.",
      tags: ["AWS", "Data Migration", "Security", "Governance"],
      image: "/Logos_Tech/AWS.png",
      link: "#",
      github: "#"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Developed interactive dashboards using Power BI and Tableau for executive reporting and data visualization.",
      tags: ["Power BI", "Tableau", "Analytics", "Dashboard"],
      image: "/Logos_Tech/Power_BI_Logo.svg",
      link: "#",
      github: "#"
    },
    {
      title: "Real-time Data Processing",
      description: "Implemented real-time data streaming solutions using Apache Kafka and Azure Event Hubs for live analytics.",
      tags: ["Kafka", "Azure", "Real-time", "Streaming"],
      image: "/Logos_Tech/azure.svg",
      link: "#",
      github: "#"
    }
  ]

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
    <section id="projects" className="py-20 bg-white">
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
              Selected projects
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my recent data engineering and analytics projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <FiExternalLink size={16} />
                      <span className="text-sm font-medium">View Project</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <FiGithub size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition-colors"
            >
              <span>View all projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

