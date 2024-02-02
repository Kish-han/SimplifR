"use client";
import Services from "./Services";
import Headings from "./Headings";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <div
      id="about"
      className=" h-[100vh] lg:pt-[100px] mt-[340px] md:mt-[200px] lg:mt-[100px] xl:mt-0"
    >
      <Headings head={"About Us"} subhead={"WHO ARE WE"} />
      <div className="flex  justify-center items-center">
        <div className="w-[80%] xl:w-[60%] space-y-8 mt-[35px] lg:mt-[60px]">
          <motion.p
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[14px]"
          >
            In the realm of accounting, we take the intricacies out of your
            financial management, offering intuitive solutions that bring
            clarity to your numbers. Our HRMS software is designed to simplify
            the complexities of human resouhrce management, ensuring efficiency
            in every aspect of your workforce administration. Additionally, our
            web development services are crafted to meet your unique needs,
            delivering solutions that are not only cutting-edge but also
            user-friendly.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[14px]"
          >
            Our commitment goes beyond just simplifying tasks; we aim to empower
            your business with straightforward solutions that cut through the
            clutter, allowing you to concentrate on your core objectives. At
            Simplifyr, we understand that your success lies in the ability to
            focus on what truly matters. That`&#39;`s why our suite of services
            is geared towards enhancing efficiency, reducing complexities, and
            ultimately, boosting your overall productivity.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 1.3, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-[14px] hidden md:block"
          >
            Join us on a journey where complexity meets simplicity, and let
            Simplifyr be your trusted partner in achieving operational
            excellence. Your success is our priority, and we are here to
            simplify the path to it.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
