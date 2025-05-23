"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const Experience = () => {
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
        duration: 0.5,
      },
    },
  }

  const experiences = [
    {
      title: "Social Media Ambassador",
      company: "STEM Montessori Academy of Canada",
      period: "Aug, 2024 - Apr, 2025",
      description: [
        "Lead a team of 5 data engineers in designing and implementing data pipelines for real-time analytics",
        "Architected cloud-based data lake solution on AWS, reducing data processing costs by 40%",
        "Implemented data quality monitoring framework using Great Expectations, improving data reliability by 35%",
        "Collaborated with data science team to deploy ML models in production using MLflow and Kubernetes",
      ],
      technologies: ["Digital Marketing", "Excel", "PowerBI", "Airflow", "Snowflake", "Kubernetes"],
    },
    {
      title: "Data Engineer and Analyst",
      company: "NBCC India Limited",
      period: "May, 2022 - Dec, 2023",
      description: [
        "Developed ETL pipelines using Apache Spark and Airflow for processing 5TB+ of daily data",
        "Designed and implemented data warehouse architecture on Google BigQuery",
        "Created real-time dashboards using Tableau connected to streaming data sources",
        "Optimized SQL queries, improving performance by 60% and reducing cloud costs",
      ],
      technologies: ["Python", "Spark", "Airflow", "BigQuery", "Kafka", "Tableau"],
    },
    {
      title: "Sales and Marketing Manager",
      company: "Preonic Energy System Pvt Ltd",
      period: "Dec, 2017 - Mar, 2022",
      description: [
        "Performed data analysis and created reports for executive leadership",
        "Built  processes for integrating data from multiple sources",
        "Developed interactive dashboards using Power BI",
        "Collaborated with business teams to translate requirements into data solutions",
      ],
      technologies: ["SQL", "Python", "Power BI", "Excel", "R"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Professional Experience</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey in the data engineering field, where I've helped organizations build robust data
              infrastructure and derive valuable insights.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-teal-500 to-teal-600 transform md:-translate-x-px"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-0" : "md:pl-12 md:ml-0 md:mr-auto"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-0 ${
                    index % 2 === 0 ? "left-0 md:left-auto md:right-0 md:-mr-3.5" : "left-0 -ml-3.5"
                  } w-7 h-7 rounded-full bg-teal-500 border-4 border-white z-10`}
                ></div>

                <div className="bg-white backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10">
                  <div className="inline-block px-3 py-1 mb-4 bg-teal-50 text-teal-600 rounded-full text-sm">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{exp.title}</h3>
                  <h4 className="text-teal-500 mb-4">{exp.company}</h4>
                  <ul className={`text-gray-600 mb-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

