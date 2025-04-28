"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FiExternalLink, FiGithub } from "react-icons/fi"

const Projects = () => {
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

  const projects = [
    {
      title: "Azure Data Platform Migration and Optimization",
      description:
        "Successfully led the migration of over 2 million records from 15+ on-premises MySQL tables to Azure Data Lake Storage Gen2 using Azure Data Factory, ensuring efficient batch loading and strict schema consistency. Designed and orchestrated scalable ETL workflows in Databricks, implementing Medallion architecture (Bronze, Silver, Gold layers) to strengthen data quality, lineage, and traceability. Integrated Git-based CI/CD pipelines to enable reliable deployment and automated testing, while optimizing the Synapse data warehouse layer through dimensional modeling, resulting in a 30% improvement in query performance. Additionally, conducted thorough root-cause analyses and validation testing processes, reducing transformation failure rates by 40% and significantly enhancing overall system reliability.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Azure Data Factory (ADF)", "Azure Data Lake Storage Gen2", "Azure Synapse Analytics", "Databricks", "SQL", "Dimensional Modeling","Git","CI/CD Pipelines"],
      links: {
        demo: "#",
        github: "https://github.com/Sudarshankarunanithy/DE_HospitalDataBase",
      },
    },
    {
      title: "Cloud-Based Time Series Forecasting and Pipeline Optimization",
      description:
        "Deployed a custom Linux instance on AWS EC2 to host critical pipeline components, configuring secure remote access via AWS Cloud Shell. Automated data ingestion and forecasting workflows using Apache Airflow, scheduling preprocessing and modeling tasks for efficient pipeline management. Developed and integrated an ARIMA-based time series model to generate financial forecasts, with results visualized through Jupyter Notebooks in VS Code for actionable business insights. Optimized job execution through parallelism and batch processing techniques, achieving a 40% reduction in processing latency. Implemented a robust log-based monitoring system to track task success and failure rates, proactively optimizing resource utilization across the pipeline.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["AWS EC2", "AWS Cloud Shell", "Apache Airflow", "Python", "ARIMA", "VS Code", "Linux", "CloudWatch"],
      links: {
        demo: "#",
        github: "https://github.com/Sudarshankarunanithy/AWS_Pipeline_Airflow",
      },
    },
    {
      title: "Customer Segmentation Engine",
      description:
        "A machine learning-based customer segmentation engine that helps businesses identify and target different customer groups.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "Scikit-learn", "PySpark", "Tableau", "PostgreSQL"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Serverless Weather Alerting System with AWS",
      description:
        "Designed and implemented an event-driven, serverless system to automate severe weather alerting for field agents. Extracted weather data from a third-party public API using Python-based AWS Lambda functions, triggering daily workflows via AWS Glue for processing. Stored alert metadata in DynamoDB and leveraged Amazon SES to automatically notify field agents during adverse conditions. Integrated robust error handling, retry logic, and fallback mechanisms to ensure alert delivery integrity. Achieved near real-time alerting, reducing manual monitoring efforts by over 80%. The system was built with scalability in mind, allowing seamless future integration of additional notification channels such as SMS and mobile push notifications.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Python", "AWS Lambda", "Web API", "AWS Glue", "DynamoDB", "Amazon SES", "AWS Event-Driven Architecture"],
      links: {
        demo: "#",
        github: "https://github.com/YuichiNabeshima/weather-app",
      },
    },
  ]

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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Project Experience</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A selection of data engineering and analytics projects I've worked on, showcasing my skills in building
              data pipelines, analytics solutions, and data-driven applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 p-6"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-teal-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    <motion.a
                      href={project.links.demo}
                      className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.links.github}
                      className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub size={18} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="#contact"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Interested in working together?
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

