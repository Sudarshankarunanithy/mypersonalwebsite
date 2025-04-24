"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import SkillBar from "./SkillBar"

const About = () => {
  const ref = useRef(null)
  const skillsRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      },
    },
  }

  const skills = [
    {
      name: "Data Engineering",
      percentage: 95,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Python & SQL",
      percentage: 98,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Big Data Technologies",
      percentage: 90,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Cloud Platforms",
      percentage: 85,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Data Visualization",
      percentage: 88,
      color: "from-teal-500 to-teal-600",
    },
  ]

  const experienceYears = '2+'

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative flex justify-center items-center">
              <div className="absolute inset-0 -right-8 -left-8 -skew-x-12 transform">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-teal-600/30 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-[repeating-linear-gradient(110deg,transparent,transparent_10px,rgba(20,184,166,0.1)_10px,rgba(20,184,166,0.1)_20px)]"></div>
              </div>
              <div className="relative overflow-hidden rounded-2xl w-[70%] aspect-[4/5] shadow-lg">
                <img
                  src="/image/photo_01.jpg"
                  alt="Sudarshan Karunanithy"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative z-10 max-w-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Engineer & Analytics Specialist</h3>
              <p className="text-gray-600 mb-6">
                As a Data Engineer and Analyst i am passionate about designing efficient data pipelines and unlocking actionable insights from data. 
                With a strong foundation in data engineering, analytics, and business intelligence, I specialize in SQL, Python, and 
                cloud-based data solutions.
              </p>
              <p className="text-gray-600 mb-6">
                I have 3+ years of professional experience as a Data Analyst, where I worked extensively with data visualization, reporting, and 
                business intelligence tools to drive data-driven decision-making. Additionally, I have successfully completed multiple freelance projects 
                in data engineering, focusing on data migration from on-prem to cloud, ETL pipeline development, and data transformation processes.
              </p>
              <p className="text-gray-600 mb-6">
                With hands-on experience in data analytics, I transitioned into data engineering to gain a deeper understanding of the entire data lifecycle. 
                My expertise includes working with Databricks to build and optimize big data workflows, develop scalable ETL pipelines, and implement 
                machine learning solutions on distributed computing frameworks. I leverage Apache Spark within Databricks to process large-scale datasets efficiently, 
                ensuring seamless data integration and transformation.
              </p>
              <p className="text-gray-600 mb-6">
                I am always open to collaborating on innovative projects, solving complex data challenges, and exploring new opportunities in data engineering and analytics. 
                Let's connect and build data-driven solutions together!
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {["Python", "SQL", "Apache Spark", "Apache Airflow", "AWS", "Azure", "Kafka", "ETL/ELT Pipelines", "Snowflake", "Tableau", "Data Pipeline Automation"," Data Integration & Transformation", "PowerBI", "GitHub", "Data Governance & Security", "Data Quality Monitoring & Performance Tuning"].map(
                  (skill) => (
                    <span key={skill} className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm">
                      {skill}
                    </span>
                  ),
                )}
              </div>
              <motion.a
                href="#experience"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Experience
              </motion.a>
            </motion.div>
          </div>

          <motion.div ref={skillsRef} variants={itemVariants} className="mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left space-y-8">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-8xl md:text-9xl font-bold text-teal-500">5</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">+</span>
                  </div>
                  <p className="text-xl text-gray-600 mt-2">
                    Years
                    <br />
                    Working
                    <br />
                    Experience
                  </p>
                </div>
                
                <div>
                  <div className="flex items-baseline">
                    <span className="text-8xl md:text-9xl font-bold text-teal-500">3</span>
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">+</span>
                  </div>
                  <p className="text-xl text-gray-600 mt-2">
                    Years
                    <br />
                    Technological
                    <br />
                    Experience
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Tech Stack</h3>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
                  <motion.img
                    src="/Logos_Tech/Python_Logo.png"
                    alt="Python"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src="/Logos_Tech/AWS.png"
                    alt="AWS"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  />
                  <motion.img
                    src="/Logos_Tech/azure.svg"
                    alt="Azure"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                  <motion.img
                    src="/Logos_Tech/Databricks.png"
                    alt="Databricks"
                    className="w-20 h-20 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  />
                  <motion.img
                    src="/Logos_Tech/SQL.svg"
                    alt="SQL"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  />
                  <motion.img
                    src="/Logos_Tech/mongodb-svgrepo-com.svg"
                    alt="MongoDB"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  />
                  <motion.img
                    src="/Logos_Tech/docker logo.png"
                    alt="Docker"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  />
                  <motion.img
                    src="/Logos_Tech/snowflake.png"
                    alt="Snowflake"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  />
                  <motion.img
                    src="/Logos_Tech/Power_BI_Logo.svg"
                    alt="Power BI"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  />
                  <motion.img
                    src="/Logos_Tech/github-mark.svg"
                    alt="GitHub"
                    className="w-16 h-16 object-contain hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

