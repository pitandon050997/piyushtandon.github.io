import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-4 flex items-center justify-between lg:flex-col lg:py-1">
        <span>piyush.tandon321@gmail.com</span>

        <div className="flex items-center lg:py-2">
          Engineering <span className="text-primary text-2xl px-1 dark:text-primaryDark">	</span> Innovation & Leadership
          
        </div>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfY_ehIInGPddJEYT1EGE0ug3fL7yj51c8T0b64xf3Cxr0rvA/viewform?usp=sf_link"
          target="_blank"
          className="underline underline-offset-2 "
        >
          Hire Me
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
