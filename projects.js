import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/project1.png";
import proj2 from "../../public/images/projects/project2.png";
import proj3 from "../../public/images/projects/project3.png";
import proj4 from "../../public/images/projects/project4.png";
import proj5 from "../../public/images/projects/project5.png";
import proj6 from "../../public/images/projects/project6.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label=""
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Piyush Tandon | Projects Page</title>
        <meta
          name="description"
          content="Discover Piyush's Projects"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Capstones and Projects"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Graduate Capstone Project"
                title="Machine learning model for multistatic lunar GPR"
                summary=" Led a team of Computer Science professionals to develop a Machine Learning model for Multi-Static Lunar Ground-Penetrating Radar (GPR). My role encompassed overseeing data acquisition, where I coordinated with engineers and scientists to gather both structured and unstructured sensor data from lunar GPR systems, including hardware logs, telemetry, and operational reports. I built preprocessing pipelines in Python, using Pandas and NumPy, to clean, normalize, and format this raw data for training. I integrated diverse data sources such as satellite telemetry, radar scans, and maintenance logs to form a comprehensive dataset, then expanded it through data augmentation, generating synthetic samples with Generative Adversarial Networks (GANs) to address the limitation of real-world data. Additionally, I automated data collection from remote databases and cloud storage to enable continuous data ingestion, supporting real-time model updates. Conducting Exploratory Data Analysis (EDA) allowed me to assess data quality and select key features impacting equipment failures. Throughout, I collaborated with domain experts to improve data labeling accuracy, ensuring precise tagging of anomalies and system malfunctions for supervised learning."
                img={proj1}
                link="https://docs.google.com/presentation/d/1ZjlxouixK3IjReOlQYZYOiM4sRFbREBx/edit?usp=sharing&ouid=101096870189112347961&rtpof=true&sd=true"
                github="https://github.com/Mrtandon97/Machine-Learning-Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Control model for automated traffic navigation"
                img={proj2}
                link="https://drive.google.com/file/d/1ZebRKc0D-iVD1MPSt4T9TkkLmqoEhgbl/view?usp=sharing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="Evaluation of Traditional Control Techniques w.r.t
Modern Reinforcement Learning Techniques in ROS
Environment"
                img={proj3}
                link="https://drive.google.com/file/d/1CgetTKF0Qql_kxuqYu4fi6rXtoM-Y016/view?usp=sharing"
              />
            </div>
            
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                img={proj5}
                title="Slope Estimation for Lower Limb Wearable Robots"
                link="https://drive.google.com/file/d/17D7OSIewrKiDzWMfrqCQxKOvg0sBxDoQ/view?usp=sharing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                img={proj6}
                title="Voice-Activated smart wearable for enhanced patient accessibility and safety using Tiny ML"
                link="https://drive.google.com/file/d/1mQvXH_q-u5iFPCqdwEhkQCszgRvLQgDS/view?usp=sharing"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Undergraduate Capstone Project"
                title="Automated grain dispensing mechanism with quality control"
                summary="This project aims to address hygiene, convenience, and efficiency issues in traditional loose cereal and pulse purchasing methods, especially highlighted during the pandemic. The core problem identified was the unsanitary handling of pulses and cereals in open containers, which can lead to contamination and a decline in customer trust and safety. 

The key components of Grainer include a packing machine, labeling section, control system, and multiple storage compartments. It allows customers to easily select the quantity they need through a simple interface, improving convenience while minimizing contact.

Surveys conducted revealed significant support from both consumers and retail managers for such a solution. Consumers favored automation for convenience and reduced germ exposure, while store managers viewed it as a way to revitalize the sales of loose products and improve operational efficiency. The Grainer project includes detailed design processes, CAD analysis, various dispensing mechanisms, and sensor integrations for quality control. It promises to address pandemic-related challenges and improve overall customer experience in grocery shopping.

"
                img={proj4}
                link="https://sites.google.com/view/grainer/home"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
