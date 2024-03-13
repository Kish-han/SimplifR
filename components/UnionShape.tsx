"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const UnionShape = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "200" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className=" relative w-full "
    >
      <div className=" absolute h-[360px] xl:h-[400px] -z-10 left-0 right-0 top-5 lg:rounded-t-[50px] lg:top-7 bottom-7 blur-3xl bgBlur "></div>
      <div className="w-full relative ">
        <svg
          className="w-full fill-white dark:fill-[#25232C]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 450"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1440 251.359C1459.53 233.871 1470 215.371 1470 196.232C1470 87.856 1134.21 0 720 0C305.786 0 -30 87.856 -30 196.232C-30 215.371 -19.5275 233.871 0 251.359V653H1440V251.359Z"
          />
        </svg>
        <div className="absolute w-[100%] mx-auto top-[65%] lg:top-[45%] xl:top-[40%] space-y-5 bg-white dark:bg-[#25232C] pb-10">
          {/* <h2 className="text-[30px] z-[1000]">Our clients</h2> */}
          <div className=" font-bold md:text-[20px] w-[80%] md:w-[50%] mx-auto text-center">
            <p>
              At Simplifyr we pride ourselves on delivering exceptional solutions
              that drive real results for our clients.
            </p>
            <div className="flex flex-col md:flex-row items-center w-[100%] mx-auto text-center md:text-left space-y-4 md:space-x-4">
              <div className="w-[100px] md:w-[300px]">
                <Image
                  src="/images/seal.png"
                  className="-rotate-12"
                  width={150}
                  height={150}
                  sizes="10vw "
                  style={{ width: "100%", height: "auto" }}
                  alt="Seal image"
                />
              </div>
              <div className="text-[14px]">
                <p>
                  Our team of talented people work hand-in-hand with clients to
                  create impactful results that resonate with their needs. We
                  strive to exceed expectations and deliver a fabulous result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UnionShape;
