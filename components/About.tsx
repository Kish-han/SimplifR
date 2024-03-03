"use client";
import Services from "./Services";
import Headings from "./Headings";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="py-4">
      <Headings head={"About Us"} />
      <div className="flex justify-center items-center">
        <div className="w-[80%] xl:w-[60%] space-y-8 mt-[35px] lg:mt-[50px]">
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[14px] md:text-[16px]"
          >
            In the realm of business solutions, we specialize in providing
            comprehensive services to streamline your operations. From
            end-to-end accounting to customized software development, web
            development, and HR solutions, we offer intuitive and tailored
            solutions to meet your unique needs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[14px] md:text-[16px]"
          >
            Our suite of services is designed to simplify complexities and
            enhance efficiency across all aspects of your business. Whether you
            need assistance with accounting, software development, web design,
            or human resource administration, we are here to empower your
            business with straightforward solutions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-[14px] md:text-[16px]"
          >
            At Simplifyr, we understand the importance of focusing on your core
            objectives. That&#39;s why our commitment goes beyond just simplifying
            tasks; we aim to boost your overall productivity and help you
            achieve operational excellence. Join us on a journey where
            complexity meets simplicity, and let Simplifyr be your trusted
            partner in unlocking your business&#39;s full potential. Your success is
            our priority, and we are dedicated to simplifying the path.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
