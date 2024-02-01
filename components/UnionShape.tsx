"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const UnionShape = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100"}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.8 }}
      className=" relative w-full "
    >
      <div className=" absolute -z-10 left-0 right-0 top-5 lg:rounded-t-[50px] lg:top-7 bottom-7 blur-3xl bgBlur">
        Heello
      </div>
      <div className="w-full relative">
        <svg
          className="w-full fill-white dark:fill-[#25232C]"
          xmlns="http://www.w3.org/2000/svg"
          //   width="1440"
          //   height="653"
          viewBox="0 0 1440 550"
          // fill="#25232C"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1440 251.359C1459.53 233.871 1470 215.371 1470 196.232C1470 87.856 1134.21 0 720 0C305.786 0 -30 87.856 -30 196.232C-30 215.371 -19.5275 233.871 0 251.359V653H1440V251.359Z"
            // fill="none"
          />
        </svg>
        <h1 className="absolute top-[50%]">Broo Where are uou</h1>
      </div>
    </motion.div>
  );
};

export default UnionShape;
