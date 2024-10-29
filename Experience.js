import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="list-disc list-inside mt-4 font-medium w-full md:text-sm">
          {work.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Experience
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Product Engineering Co-op"
              company="Bendix Commercial Vehicle Systems"
              companyLink="https://www.bendix.com/en/"
              time="Jan 2024-Aug 2024"
              address="Kalamazoo, MI"
              work={[
                "Contributed to the development and testing of braking systems for commercial vehicles.",
                "Designed components using CAD tools like SolidWorks and conducted finite element analysis (FEA) to verify performance and safety standards.",
                "Supported prototyping efforts and executed bench tests to validate the reliability of braking systems.",
                "Collaborated closely with the testing team to create detailed test plans and analyze results.",
                "Utilized data analytics tools to assess performance metrics, identifying areas for optimization.",
                "Worked cross-functionally with R&D and Quality Assurance teams to troubleshoot design issues and implement corrective measures.",
                "Maintained engineering change requests (ECRs) and documented procedures and technical reports."
              ]}
            />

            <Details
              position="Mechanical Engineering Intern"
              company="University of Washington Facilities-Engineering Services"
              companyLink="https://facilities.uw.edu/"
              time="Jul 2023-Dec 2023"
              address="Seattle, WA"
              work={[
                "Assisted in maintaining and optimizing HVAC systems for campus buildings.",
                "Performed energy audits and analyzed mechanical system efficiency.",
                "Recommended improvements to mechanical systems to reduce energy consumption.",
                "Worked closely with senior engineers to troubleshoot mechanical faults in facility systems.",
                "Conducted preventive maintenance schedules to ensure optimal operational reliability.",
                "Developed technical reports documenting findings and proposed system upgrades to enhance sustainability and efficiency."
              ]}
            />

            <Details
              position="Senior Analyst (Product and Data)"
              company="Capgemini"
              companyLink="https://www.capgemini.com/us-en/"
              time="Jul 2021-Sep 2022"
              address="Pune, India."
              work={[
                "Developed data-driven solutions to improve business operations and product offerings for clients.",
                "Conducted data analysis using SQL, Python, and Tableau to derive insights that supported strategic decision-making.",
                "Worked collaboratively with cross-functional teams to implement new features and optimize product performance.",
                "Engaged in stakeholder meetings to gather requirements and present analytical findings.",
                "Managed data pipelines and developed dashboards for business performance monitoring.",
              ]}
            />

            <Details
              position="Manufacturing Intern (International Internship Program)"
              company="Mercedes-Benz US International"
              companyLink="https://mbusi.com/"
              time="Feb 2020-Aug 2020"
              address="Vance, AL."
              work={[
                "Assisted in optimizing manufacturing processes on the assembly line for quality improvements and cycle time reduction.",
                "Supported the implementation of lean manufacturing techniques to enhance efficiency and minimize waste.",
                "Conducted time-motion studies to analyze and optimize worker tasks for increased productivity.",
                "Assisted in troubleshooting production issues and supported root cause analysis for mechanical faults.",
                "Collaborated with cross-functional engineering teams to integrate new technology and automation tools into the production line.",
                "Documented findings and created technical reports for process improvements and operational changes.",

              ]}
            />
          </ul>
        </div>
        </div>
    );
};

export default Experience;
