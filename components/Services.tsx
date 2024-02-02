"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
type Props = {};

const Services = (props: Props) => {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px] flex ">
        <TabsList className="h-full flex flex-col space-y-10">
          <TabsTrigger className="serviceCard" value="account">
            Accounting Made Simple
          </TabsTrigger>
          <TabsTrigger className="serviceCard" value="hrms">
            HRMS Software
          </TabsTrigger>
          <TabsTrigger className="serviceCard" value="hr">
            HR Soultions
          </TabsTrigger>
          <TabsTrigger className="serviceCard" value="web">
            Webdevelopment
          </TabsTrigger>
        </TabsList>
        <div className="">
          <TabsContent value="account">
            Say goodbye to the complexities of financial management. Simplifyr
            offers intuitive accounting solutions designed to streamline your
            financial processes. From bookkeeping to financial reporting, our
            tools are crafted to simplify every aspect of your accounting needs.
            Experience transparency and control like never before.
            `&#34;`Simplify Your Finances with Simplifyr`&#39;`s Accounting
            Expertise`&#34;`
          </TabsContent>
        </div>
        <TabsContent value="hrms">
          Managing human resources has never been this easy. Simplifyr`&#39;`s
          HRMS software is your comprehensive solution for workforce management.
          We simplify the complexities of HR tasks, from employee onboarding to
          payroll processing. Enjoy a seamless experience that enables you to
          focus on fostering a thriving workplace culture. `&#34;`Streamline
          Your Workforce with Simplifyr`&#39;`s HRMS Software`&#34;`.
        </TabsContent>
        <TabsContent value="hr">
          Welcome to Simplifyr, where strategic growth meets simplified
          workforce management. As a small business or a growing enterprise, our
          HR services are crafted to lift the burdens of managing your
          workforce, allowing you to concentrate on what truly matters—strategic
          growth. Explore our comprehensive HR solutions tailored to cover
          critical areas and provide you with the peace of mind you need for
          your business journey. “Simplify your HR experience with Simplifyr”.
        </TabsContent>
        <TabsContent value="web">
          Embark on a digital journey with Simplifyr`&#39;`s web development
          services. Our team of experts is dedicated to creating clean,
          intuitive, and user-friendly websites. We believe in simplicity
          without compromising on functionality. Let your online presence shine
          with websites that not only look great but also deliver a hassle-free
          user experience. `&#34;`Elevate Online Success: Simplifyr`&#39;`s Web
          Development Solutions`&#34;`.
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Services;
