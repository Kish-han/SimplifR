"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

type Props = {};

const NavBar = (props: Props) => {
  const [active, setActive] = useState("Home");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed z-10 h-20 w-full flex justify-between items-center py-4 px-8">
      <div className="">SimplyR</div>
      <div className="w-[50%] ">
        <ul
          className={`flex flex-col lg:flex-row absolute lg:relative ${
            navOpen ? "right-0 lg:right-0" : "right-[-200px] lg:right-0"
          } top-0 h-[300px] lg:h-full justify-around items-center navcard dark:navcarddark  font-[500] text-[14px] px-8 py-3 shadow-lg z-[50] transition-all duration-300 ease-in-out`}
        >
          <AiOutlineClose
            className="absolute top-2 right-2 h-10 text-[20px] lg:hidden"
            onClick={() => {
              setNavOpen(false);
            }}
          />
          <li
            className={`navLinks mt-8 lg:mt-0 ${
              active === "Home" && "bg-highlight text-white"
            }`}
            onClick={() => {
              setActive("Home");
              setNavOpen(false);
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`navLinks ${
              active === "About" && "bg-highlight text-white"
            }`}
            onClick={() => {
              setActive("About");
              setNavOpen(false);
            }}
          >
            <Link href="#about">About</Link>
          </li>
          <li
            className={`navLinks ${
              active === "Serices" && "bg-highlight text-white"
            }`}
            onClick={() => {
              setActive("Serices");
              setNavOpen(false);
            }}
          >
            <Link href="#services">Services</Link>
          </li>
          <li
            className={`navLinks ${
              active === "Vision" && "bg-highlight text-white"
            }`}
            onClick={() => {
              setActive("Vision");
              setNavOpen(false);
            }}
          >
            <Link href="#ourvision">Our Vision</Link>
          </li>
          <li
            className={`navLinks ${
              active === "Contact" && "bg-highlight text-white"
            }`}
            onClick={() => {
              setActive("Contact");
              setNavOpen(false);
            }}
          >
            <Link href="#contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="z-[10]">
        <div className="space-x-5 flex items-center">
          <ModeToggle />
          <RxHamburgerMenu
            className="text-[30px] lg:hidden"
            onClick={() => {
              setNavOpen(true);
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
