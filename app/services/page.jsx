"use client";

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";


const services = [
  {
    num: "01",
    title: "Software Developer",
    description: "Proficient in using programming and design knowledge to build software that meets the needs of users",
    href: ""
  },
  {
    num: "02",
    title: "Web Development",
    description: "I am passionate about creating robust and user-friendly web applications. Proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js and many more... (Check my Resume)...",
    href: ""
  },
  {
    num: "03",
    title: "Electronics - Hardware Engineer",
    description: "I design and develop electronics components, doing reasearch, testing and debugging of the components and profiecent in Hardware descirption languages.",
    href: ""
  },
  {
    num: "04",
    title: "Financial Adviser",
    description: "Available at specific time for Financial Advising. Basically consult the client to effiecntly invest their aseets and money.",
    href: ""
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link 
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-whilte/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services
