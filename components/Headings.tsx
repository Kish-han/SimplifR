"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Headings = ({ head }: { head: string}) => {
  return (
    <div className="pt-[70px]">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="heading text-center"
      >
        <h2>{head}</h2>
      </motion.div>
    </div>
  );
};

export default Headings;
