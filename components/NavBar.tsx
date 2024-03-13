"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { ModeToggle } from "./ModeToggle";
type Props = {};

const NavBar = (props: Props) => {
  const [active, setActive] = useState("Home");
  const [navOpen, setNavOpen] = useState(false);
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div id="/" className="pb-[10px] ">
      <motion.nav
        initial={{ opacity: 0, y: "-200" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className={`fixed ${
          show ? "navcarddark rounded-none" : "bg-transparent"
        }  top-0 z-10 h-[10vh] w-full flex justify-between items-center px-8`}
      >
        <div className="text-[20px] text-center font-bold">
          Simply<span className="text-highlight text-[24px]">R</span>{" "}
        </div>
        <div className="w-[40%]">
          <ul
            className={`flex flex-col lg:flex-row absolute lg:relative ${
              navOpen ? "right-0 lg:right-0" : "right-[-200px] lg:right-0"
            } top-0 h-[300px]  lg:h-full justify-around items-center font-[500] text-[14px] lg:px-5 py-3 shadow-lg z-[50] navcard dark:bg-[#25232C] transition-all duration-300 ease-in-out py-4`}
          >
            <AiOutlineClose
              className="absolute top-2 right-2 h-10 text-[20px] lg:hidden"
              onClick={() => {
                setNavOpen(false);
              }}
            />
            <li
              className={`navLinks mt-8 lg:mt-0 ${
                active === "Home" && " bg-highlight text-white"
              }`}
              onClick={() => {
                setActive("Home");
                setNavOpen(false);
              }}
            >
              <Link className="font-bold text-[14px]" href="/">
                Home
              </Link>
            </li>
            <li
              className={`navLinks ${
                active === "Services" && "bg-highlight text-white"
              }`}
              onClick={() => {
                setActive("Services");
                setNavOpen(false);
              }}
            >
              <Link className="font-bold text-[14px]" href="/#services">
                Services
              </Link>
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
              <Link className="font-bold text-[14px]" href="/#about">
                About
              </Link>
            </li>
            {/* <li
              className={`navLinks ${
                active === "Vision" && "bg-highlight text-white"
              }`}
              onClick={() => {
                setActive("Vision");
                setNavOpen(false);
              }}
            >
              <Link href="#ourvision">Our Vision</Link>
            </li> */}
            <li
              className={`navLinks ${
                active === "Contact" && "bg-highlight text-white"
              }`}
              onClick={() => {
                setActive("Contact");
                setNavOpen(false);
              }}
            >
              <Link className="font-bold text-[14px]" href="#contact">
                Contact Us
              </Link>
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
      </motion.nav>
    </div>
  );
};

export default NavBar;
