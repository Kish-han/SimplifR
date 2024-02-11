"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ["Accounting", "Software Redefined", "HR Solutions", "WebDevelopment"],
    loop: 0,
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="relative scrollbar py-16 pt-24"
    >
      <div className="px-14 text-center space-y-[25px] pt-[80px] ">
        <h1 className="heading">
          Welcome to <span className="">SimplifyR</span>,
          <br />
          where complexity meets simplicity
          <br />
          in <span className="text-highlight">{text}</span>
          <Cursor cursorColor='#b140ff' />
        </h1>
        <h3 className="text-[13px] md:text-[16px] lg:text-[20px]">
          we&apos;re dedicated to streamlining your business operations and
          enhancing efficiency across various domains.
        </h3>
        <button className="group btn items-center justify-center text-sm font-medium leading-5 text-white hover:scale-105 transition-all duration-300">
          <Link href="#contact">
            <div className="flex items-center space-x-2">
              <p>Get Started</p>
              <HiOutlineArrowSmallRight className="text-[20px] group-hover:-rotate-45 transition-all duration-300" />
            </div>
          </Link>
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
