"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { ModeToggle } from "./ModeToggle";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

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
        }  top-0 z-10 h-[10vh] w-full flex justify-between items-center pr-8 `}
      >
        <div className="text-[20px] text-center font-bold ">
          <Link href="/">
            <Image
              className="object-contain hidden dark:block"
              src={"/images/mainlogo.png"}
              width={300}
              height={300}
              alt="logo"
            />
            <Image
              className="object-contain dark:hidden"
              src={"/images/mainlogodark.png"}
              width={300}
              height={300}
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-[45%]">
          <ul
            className={`flex flex-col lg:flex-row absolute lg:relative  ${
              navOpen
                ? "right-0 lg:right-0 dark:mobilenavbar mt-4"
                : "right-[-200px] lg:right-0 dark:bg-[#25232C]"
            } top-0  h-[300px] lg:h-full items-center font-[500] lg:px-5 xl:pl-16 py-3 shadow-lg z-[50] navcard dark:bg-[#25232C]  transition-all duration-300 ease-in-out justify-around`}
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
              <Link className=" text-[12px] lg:text-[13px]" href="/">
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
              <Link className=" text-[12px] lg:text-[13px]" href="/#services">
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
              <Link className=" text-[12px] lg:text-[13px]" href="/#about">
                About
              </Link>
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
              <Link className=" text-[12px] lg:text-[13px]" href="#contact">
                Contact Us
              </Link>
            </li>
            <li>
              <div className="socials lg:hidden">
                <div className="space-x-3">
                  {/* <SocialIcon
                    url="https://twitter.com/KishanPras62098"
                    bgColor="#585858"
                    style={{ width: 30, height: 30 }}
                  /> */}
                  <SocialIcon
                    url="https://twitter.com/simplifyr_in"
                    bgColor="#585858"
                    style={{ width: 30, height: 30 }}
                  />
                  <SocialIcon
                    url="https://www.instagram.com/simplifyr_in"
                    bgColor="#585858"
                    style={{ width: 30, height: 30 }}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="z-[10]">
          <div className="space-x-5 flex items-center">
            <div className="socials hidden lg:flex">
              <div className="space-x-2 ">
                {/* <SocialIcon
                  url="https://twitter.com/KishanPras62098"
                  bgColor="#585858"
                  style={{ width: 30, height: 30 }}
                /> */}
                <SocialIcon
                  url="https://twitter.com/simplifyr_in"
                  bgColor="#585858"
                  style={{ width: 30, height: 30 }}
                />
                <SocialIcon
                  url="https://www.instagram.com/simplifyr_in"
                  bgColor="#585858"
                  style={{ width: 30, height: 30 }}
                />
              </div>
            </div>
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
