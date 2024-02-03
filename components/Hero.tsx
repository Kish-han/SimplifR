"use client";
import React from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="relative scrollbar w-full h-[85vh] md:h-[76vh] flex items-center justify-center"
    >
      <div className="px-14 text-center space-y-[25px] pt-[80px]">
        <h1 className="heading">
          Welcome to <span className="text-highlight">Simplifyr</span>,
          <br />
          where complexity meets simplicity
        </h1>
        <h3 className="text-[13px] md:text-[16px] lg:text-[20px]">
          we&apos;re dedicated to streamlining your business operations and
          enhancing efficiency across various domains.
        </h3>
        <button className="group btn items-center justify-center text-sm font-medium leading-5 text-white hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-2">
            <p>Get Started</p>
            <HiOutlineArrowSmallRight className="text-[20px] group-hover:-rotate-45 transition-all duration-300" />
          </div>
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
