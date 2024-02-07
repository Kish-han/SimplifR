"use client";
import React from "react";
import Headings from "./Headings";
import { motion } from "framer-motion";
type Props = {};

const Vision = (props: Props) => {
  return (
    <div id="ourvision" className="lg:h-[100vh] w-[100%] pb-10">
      <Headings head={"Our Vision"}/>
      <div className="hidden lg:block w-[80%] h-[70vh] mt-5 mx-auto text-center space-y-7">
        <div className="flex h-[70%] space-x-5">
          <div className="w-[70%] space-y-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              className="visionCard navcard dark:navcarddark h-[50%] group"
            >
              <h3 className="text-highlight font-bold text-[18px] group-hover:underline uppercase">
                Innovation with simplicity
              </h3>
              <p className="text-[15px]">
                We leverage cutting-edge technologies to bring you innovative
                solutions that remain accessible and easy to understand.
              </p>
            </motion.div>
            <div className="flex  h-[50%] space-x-4 ">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="visionCard w-[40%] navcard dark:navcarddark group"
              >
                <h3 className="text-highlight font-bold text-[18px] group-hover:underline uppercase">
                  Efficiency at its core
                </h3>
                <p className="text-[13px] xl:text-[15px">
                  We eliminate unnecessary complexities, allowing your business
                  to operate with increased efficiency and productivity.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="visionCard w-[60%] navcard dark:navcarddark group"
              >
                <h3 className="text-highlight font-bold text-[18px] group-hover:underline uppercase">
                  User friendly solution
                </h3>
                <p className="text-[15px]">
                  Our services are designed with simplicity in mind, ensuring a
                  user-friendly experience for both clients and end-users.
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="w-[30%] visionCard border navcard dark:navcarddark group"
          >
            <h3 className="text-highlight font-bold text-[18px] group-hover:underline uppercase">
              Tailored for you
            </h3>
            <p className="text-[15px]">
              Our solutions are customized to fit the unique needs of your
              business, ensuring that you get precisely what you need without
              unnecessary frills.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="visionCard h-[30%] navcard dark:navcarddark group"
        >
          <h3 className="text-highlight font-bold text-[18px] group-hover:underline uppercase">
            Summary
          </h3>
          <p className="text-[15px]">
            At Simplifyr, we believe in the power of simplicity to transform
            businesses. Let us simplify the way you work and empower your
            growth. Explore the ease, experience the efficiency choose Simplifyr
            for all your accounting, HRMS, and web development needs. Your
            success, simplified
          </p>
        </motion.div>
      </div>

      <div className="lg:hidden w-[80%] mt-5 mx-auto text-center space-y-7">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="visionCard py-5 navcard dark:navcarddark"
        >
          <h3 className="text-highlight font-semibold text-[20px] uppercase">
            Innovation with Simplicity
          </h3>
          <p className="text-[15px]">
            We leverage cutting-edge technologies to bring you innovative
            solutions that remain accessible and easy to understand.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="visionCard py-5 navcard dark:navcarddark"
        >
          <h3 className="text-highlight font-semibold text-[20px] uppercase">
            Efficiency at its core
          </h3>
          <p className="text-[15px]">
            We eliminate unnecessary complexities, allowing your business to
            operate with increased efficiency and productivity.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="visionCard py-5 navcard dark:navcarddark"
        >
          <h3 className="text-highlight font-semibold text-[20px] uppercase">
            User-friendly solution
          </h3>
          <p className="text-[15px]">
            Our services are designed with simplicity in mind, ensuring a
            user-friendly experience for both clients and end-users.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="visionCard py-5 navcard dark:navcarddark"
        >
          <h3 className="text-highlight font-semibold text-[20px] uppercase">
            Tailored for you
          </h3>
          <p className="text-[15px]">
            Our solutions are customized to fit the unique needs of your
            business, ensuring that you get precisely what you need without
            unnecessary frills.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="visionCard py-5 navcard dark:navcarddark"
        >
          <h3 className="text-highlight font-semibold text-[20px] uppercase">
            Summary
          </h3>
          <p className="text-[15px]">
            At Simplifyr, we believe in the power of simplicity to transform
            businesses. Let us simplify the way you work and empower your
            growth. Explore the ease, experience the efficiency choose Simplifyr
            for all your accounting, HRMS, and web development needs. Your
            success, simplified
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
