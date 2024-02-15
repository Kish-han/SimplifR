"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Accounting",
      "Software Redefined",
      "HR Solutions",
      "WebDevelopment",
    ],
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
          <Cursor cursorColor="#b140ff" />
        </h1>
        <h3 className="text-[13px] md:text-[16px] lg:text-[20px]">
          we&apos;re dedicated to streamlining your business operations and
          enhancing efficiency across various domains.
        </h3>
        <button className="group btn items-center justify-center text-sm font-medium leading-5 text-white hover:scale-105 transition-all duration-300 mb-10">
          <Link href="#contact">
            <div className="flex items-center space-x-2">
              <p>Get Started</p>
              <HiOutlineArrowSmallRight className="text-[20px] group-hover:-rotate-45 transition-all duration-300" />
            </div>
          </Link>
        </button>
        <div className="w-full py-8">
          <p className="text-18px font-bold">Our Clients</p>
          <div className="w-[70%] mx-auto flex justify-around items-center">
            <Image
              src="/images/logo.webp"
              width={120}
              height={100}
              alt="logo"
            />
            <Image
              src="/images/logo1.png"
              width={120}
              height={100}
              alt="logo"
            />
            <Image
              src="/images/logo2.png"
              width={120}
              height={100}
              alt="logo"
            />
            <Image
              src="/images/logo3.png"
              width={120}
              height={100}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
