import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">


        <Details
            type="University of Oxford "
            time="June 2019-July 2019"
            place="Summer School Abroad"
            info="Completed coursework in advanced mathematics topics such as Advanced Calculus, Differential Equations, Number Theory, Abstract Algebra, Linear Algebra, Algebraic Structures, Statistics, Numerical Analysis, Theory of Interest, College Geometry, Non-Euclidean Geometry"
          />
          <Details
            type="Thapar University"
            time="Jul 2017- Jul 2021"
            place="BE Mechanical Engineering"
            info="Relevant courses included Engineering Mathematics, Engineering Physics, Engineering Mechanics, Material Science and Metallurgy, Thermodynamics, Fluid Mechanics, Strength of Materials, Heat and Mass Transfer, Machine Design, Manufacturing Processes, Control Systems and Robotics, Automobile Engineering, Renewable Energy Systems, Finite Element Analysis (FEA),
                 Hydraulics and Pneumatics"
          />

          <Details
            type="University of Washington"
            time="Sep 2022-Aug 2024"
            place="MS in Mechnaical Engineering with Data engineering specialization"
            info=" Relevant courses included Artificial Intelligence, Advanced Energy, Mechanical Engineering Analysis, Linear multivariable Systems, State Estimation & Kalman Filtering, Linear Multivariable Control, Database Systems, Machine Learning, Computational Techniques in Mechanical Engineering, Machine Learning Control, Data Driven optimization, Machining of composites "
          />

          
        </ul>
      </div>
    </div>
  );
};

export default Education;
