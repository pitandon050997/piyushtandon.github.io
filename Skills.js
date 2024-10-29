import { motion } from "framer-motion";
import React, { useState } from "react";

const skillsData = [
  { name: "CAD (SolidWorks, CREO, CATIA, NX)", level: 100, experience: "I've worked on designing complex mechanical systems, creating detailed 3D models, and generating precise technical drawings. I used these tools for product development, mechanical component design, and system integration. Specifically, I used SolidWorks and CREO for parametric modeling, CATIA for automotive projects, and NX for advanced surface modeling and assembly management during my work at Mercedes and Bendix." },
  { name: "Project Management (CAPM Certified)", level: 100, experience: "I have applied my project management skills, leveraging my CAPM certification, in various engineering and product development projects. My experience includes planning project timelines, resource allocation, risk assessment, and coordinating cross-functional teams. I led project phases from initiation to closure, ensuring on-time delivery and adherence to quality standards. In my roles at Capgemini and Bendix, I managed project schedules, tracked milestones, and facilitated communication among stakeholders, ensuring alignment and timely resolution of issues. My CAPM certification has equipped me with structured approaches to managing project constraints, resulting in efficient project execution and enhanced team productivity." },
  { name: "Process Capability Management", level: 100, experience: "I have experience in Process Capability Management, primarily focusing on ensuring manufacturing processes meet quality and consistency standards. At Bendix, I used statistical tools such as Cp and Cpk to evaluate the capability of production processes for brake systems. At Capgemini, I worked on analyzing process data to identify variability and implement corrective actions, improving process reliability. I also facilitated capability studies to ensure that new product designs were manufacturable to required specifications with minimal defects, maintaining Six Sigma quality levels in production environments." },
  { name: "Prototyping(3D Printing, CNC, GD&T, ASME Y14.5)", level: 100, experience: "I worked closely with CNC machinists to produce precise prototypes of automotive subsystems, ensuring manufacturability and refining designs as needed.Applied GD&T standards extensively at Mercedes to define tolerances for body-in-white (BIW) components, ensuring precise assembly and function. This included ensuring the parts met tight tolerance requirements and communicated fit, form, and function clearly across manufacturing teams." },
  { name: "Six Sigma methodologies", level: 100, experience: "At Bendix, I used DMAIC (Define, Measure, Analyze, Improve, Control) to enhance manufacturing processes for brake systems, focusing on defect reduction and cycle time optimization. I led root cause analyses using Fishbone diagrams and 5-Why techniques at Capgemini to identify sources of inefficiency in production workflows, followed by process improvements that reduced defects and increased yield." },
  { name: "5S, Lean Manufacturing, 8D, APQP, PPAP", level: 100, experience: "Applied lean principles at Bendix to streamline assembly line processes, minimize non-value-added activities, and reduce lead times. Used the 8D problem-solving approach at Mercedes to address quality issues in BIW components, collaborating with cross-functional teams to develop root cause solutions and prevent recurrence. Managed APQP stages for new product introductions at Bendix, ensuring alignment with customer requirements and quality standards throughout development. Prepared and reviewed PPAP documentation for component approvals at Mercedes, ensuring products met quality and safety requirements before mass production." },
  {name: "ERP, QMS, MRP, DFM", level: 100, experience: "Implemented ERP systems for production tracking, developed QMS strategies to maintain ISO standards, managed MRP planning for optimized inventory levels, and applied DFM principles to improve product manufacturability during the design phase."},
  {name: "Kaizen and Agile Methodologies", level: 100, experience: "Led Kaizen initiatives at Capgemini to improve workflow efficiency, and used Agile methodologies to manage product development at Bendix, focusing on iterative improvements and stakeholder engagement."},
  {name: "SQL (MongoDB)", level: 100, experience: "Developed data-driven applications using SQL for relational databases, and utilized MongoDB for NoSQL data storage, focusing on efficient retrieval, storage optimization, and query design."},
  {name: "Python", level: 100, experience: "Used Python for data analysis, automation scripts, and backend development, including working on database integration and data visualization for engineering and data science applications."},
  {name: "MATLAB", level: 100, experience: "Applied MATLAB for engineering simulations and data analysis, including signal processing and control systems for automotive projects at Bendix and Mercedes."},
  {name: "Data Visualization (Power BI, Tableau, Seaborn)", level: 100, experience: "Created dashboards with Power BI and Tableau for real-time performance tracking, and used Seaborn to visualize engineering and operational data to gain insights into key metrics."},
  {name: "Cloud and Big Data (AWS, GCP, Azure)", level: 90, experience: "Managed cloud infrastructure on AWS and GCP for data storage and analytics, and implemented Azure services to support machine learning workloads and data processing."},
  {name: "Hardware Engineering", level: 80, experience: "Designed hardware solutions including raspberry PI, PCB layouts, integrated sensor systems and GPR for NASA JPL project, and collaborated with mentors and team members to ensure compatibility"},
  {name: "Embedded Systems", level: 80, experience: "Developed embedded software for automotive control systems for my school projects, and worked with microcontrollers to optimize real-time system performance while working with Machine Learning model for GPR."},
  {name: "Machine Learning and AI (TensorFlow, Keras, Scikit-Learn, PyTorch, LLMs, Random Forest, SVM, NLP)", level: 70, experience: "Implemented machine learning models for NASA JPL project using Scikit-Learn, developed neural networks with TensorFlow and Keras, and worked on NLP tasks using transformer-based models for insights."},
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (skill, event) => {
    setHoveredSkill(skill);
    const { target } = event;
    const rect = target.getBoundingClientRect();
    setHoverPosition({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  return (
    <section className="w-full py-20 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-center mb-16 text-gray-800 dark:text-gray-100">
        Skills
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 relative">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 sm:p-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer transform transition-transform sm:mb-4"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={(e) => handleMouseEnter(skill, e)}
            onMouseLeave={() => setHoveredSkill(null)}
            onTouchStart={(e) => handleMouseEnter(skill, e)}
            onTouchEnd={() => setHoveredSkill(null)}
          >
            <span className="text-base sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4 text-center">
              {skill.name}
            </span>
            <div className="w-full bg-gray-300 rounded-full h-3 sm:h-2 dark:bg-gray-700">
              <div
                className="bg-blue-500 h-3 sm:h-2 rounded-full dark:bg-blue-400"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm sm:text-xs text-gray-600 dark:text-gray-400 mt-2">
              Proficiency: {skill.level}%
            </span>
          </motion.div>
        ))}

        {hoveredSkill && (
          <motion.div
            className="fixed p-4 sm:p-2 w-[240px] sm:w-[180px] bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center z-50"
            style={{ top: hoverPosition.y - 100, left: hoverPosition.x - 120 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-base sm:text-sm font-bold text-gray-700 dark:text-gray-200 mb-2">
              {hoveredSkill.name}
            </h3>
            <p className="text-xs sm:text-xs text-gray-600 dark:text-gray-400">
              {hoveredSkill.experience}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
