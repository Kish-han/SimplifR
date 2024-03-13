"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <div id="services" className="pt-20 w-[80%] mx-auto hidden lg:block">
        <Tabs defaultValue="hrms" className="flex justify-center items-center ">
          <TabsList className="h-full flex flex-col space-y-8 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <TabsTrigger className="serviceCard space-x-8" value="hrms">
                <Image
                  className="w-[20%]"
                  src="/images/SoftwareLogo.png"
                  width={50}
                  height={50}
                  alt="acclogo"
                />
                <p className="w-[80%] font-bold text-[14px]">
                  Software Redefined
                </p>
              </TabsTrigger>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <TabsTrigger className="serviceCard space-x-8" value="account">
                <Image
                  className="w-[20%]"
                  src="/images/AccLogo.png"
                  width={50}
                  height={50}
                  alt="acclogo"
                />
                <p className="w-[80%] font-bold text-[14px]">
                  Accounting Made Simple
                </p>
              </TabsTrigger>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <TabsTrigger className="serviceCard space-x-8" value="web">
                <Image
                  className="w-[20%]"
                  src="/images/WebLogo.png"
                  width={50}
                  height={50}
                  alt="acclogo"
                />
                <p className="w-[80%] font-bold text-[14px]">Web Development</p>
              </TabsTrigger>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <TabsTrigger className="serviceCard space-x-8" value="hr">
                <Image
                  className="w-[20%]"
                  src="/images/HrLogo.png"
                  width={50}
                  height={50}
                  alt="acclogo"
                />
                <p className="w-[80%] font-bold text-[14px]">HR Soultions</p>
              </TabsTrigger>
            </motion.div>
          </TabsList>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="px-8 hidden lg:block"
          >
            <TabsContent value="hrms">
              <Image
                className="w-[250px] xl:w-[300px] mx-auto"
                src="/images/hrms.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
              <p className="text-center">
                Managing human resources has never been this easy.
                Simplifyr&#39;s HRMS software is your comprehensive solution for
                workforce management. We simplify the complexities of HR tasks,
                from employee onboarding to payroll processing. Enjoy a seamless
                experience that enables you to focus on fostering a thriving
                workplace culture.
                <span className="font-semibold">
                  &#34;Streamline Your Workforce with Simplifyr&#39;s HRMS
                  Software&#34;.
                </span>
              </p>
              <Link href="/softwareredefined" className="float-end mt-3">
                <span className="px-2 underline font-semibold">Know more</span>
              </Link>
            </TabsContent>
            <TabsContent value="account">
              <Image
                className="w-[250px] xl:w-[300px] mx-auto"
                src="/images/tax.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
              <p className="text-center">
                Say goodbye to the complexities of financial management.
                Simplifyr offers intuitive accounting solutions designed to
                streamline your financial processes. From bookkeeping to
                financial reporting, our tools are crafted to simplify every
                aspect of your accounting needs. Experience transparency and
                control like never before.
                <span className="font-semibold">
                  &#34;Simplify Your Finances with Simplifyr&#39;s Accounting
                  Expertise &#34;
                </span>
              </p>
              <Link href="/accounts" className="float-end mt-3">
                <span className="px-2 underline font-semibold">Know more</span>
              </Link>
            </TabsContent>
            <TabsContent value="hr">
              <Image
                className="w-[250px] xl:w-[300px] mx-auto"
                src="/images/hr.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
              <p className="text-center">
                Our HR services are crafted to lift the burdens of managing your
                workforce, allowing you to concentrate on what truly
                matters—strategic growth. Explore our comprehensive HR solutions
                tailored to cover critical areas and provide you with the peace
                of mind you need for your business journey.{" "}
                <span className="font-semibold">
                  “Simplify your HR experience with Simplifyr”.
                </span>
              </p>
              <Link href="/hrsolutions" className="float-end mt-3">
                <span className="px-2 underline font-semibold">Know more</span>
              </Link>
            </TabsContent>
            <TabsContent value="web">
              <Image
                className="w-[250px] xl:w-[300px] mx-auto"
                src="/images/web.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
              <p className="text-center">
                Embark on a digital journey with Simplifyr&#39;s web development
                services. Our team of experts is dedicated to creating clean,
                intuitive, and user-friendly websites. We believe in simplicity
                without compromising on functionality. Let your online presence
                shine with websites that not only look great but also deliver a
                hassle-free user experience.{" "}
                <span className="font-semibold">
                  {" "}
                  &#34;Elevate Online Success: Simplifyr&#39;s Web Development
                  Solutions&#34;.
                </span>
              </p>
              <Link href="/webdevelopment" className="float-end mt-3">
                <span className="px-2 underline font-semibold">Know more</span>
              </Link>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
      <div className="w-[80%] pt-16 mx-auto lg:hidden">
        <Tabs defaultValue="hrms" className="flex justify-center items-center ">
          <TabsList className="h-full flex flex-col space-y-8 ">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <Link href="/softwareredefined">
                <TabsTrigger className="serviceCard space-x-8" value="hrms">
                  <Image
                    className="w-[20%]"
                    src="/images/SoftwareLogo.png"
                    width={50}
                    height={50}
                    alt="acclogo"
                  />
                  <p className="w-[80%] font-bold text-[14px]">
                    Software Redefined
                  </p>
                </TabsTrigger>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/accounts">
                <TabsTrigger className="serviceCard space-x-8" value="account">
                  <Image
                    className="w-[20%]"
                    src="/images/AccLogo.png"
                    width={50}
                    height={50}
                    alt="acclogo"
                  />
                  <p className="w-[80%] font-bold text-[14px]">
                    Accounting Made Simple
                  </p>
                </TabsTrigger>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/webdevelopment">
                <TabsTrigger className="serviceCard space-x-8" value="web">
                  <Image
                    className="w-[20%]"
                    src="/images/WebLogo.png"
                    width={50}
                    height={50}
                    alt="acclogo"
                  />
                  <p className="w-[80%] font-bold text-[14px]">
                    Web Development
                  </p>
                </TabsTrigger>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/hrsolutions">
                <TabsTrigger className="serviceCard space-x-8" value="hr">
                  <Image
                    className="w-[20%]"
                    src="/images/HrLogo.png"
                    width={50}
                    height={50}
                    alt="acclogo"
                  />
                  <p className="w-[80%] font-bold text-[14px]">HR Soultions</p>
                </TabsTrigger>
              </Link>
            </motion.div>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default Services;
