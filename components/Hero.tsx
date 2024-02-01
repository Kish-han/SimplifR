import React from "react";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div id="/" className="h-[500px] flex items-center justify-center">
      <div className="px-14 text-center">
        <h1 className="heading leading-[58px]">
          Welcome to <span className="text-highlight">Simplifyr</span>,
          <br />
          where complexity meets simplicity
        </h1>
        <h3 className="mt-3">
          we&apos;re dedicated to streamlining your business operations and
          enhancing efficiency across various domains.
        </h3>
        <button className="group btn items-center justify-center text-sm font-medium leading-5 text-white mt-6 hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-2">
            <p>Get Started</p>
            <HiOutlineArrowSmallRight className="text-[20px] group-hover:-rotate-45 transition-all duration-300" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
