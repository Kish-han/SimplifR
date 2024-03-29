import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="px-6 pt-10 overflow-x-hidden">
        <h3 className="text-center heading mt-8">Software</h3>
        <div className="flex justify-center items-center mt-8 ">
          <Image
            className=" "
            src="/images/hrms.svg"
            width={450}
            height={450}
            alt="acclogo"
          />
        </div>
        <p className="lg:px-28 mt-4 text-center">
          At Simplifyr, we believe in harnessing the power of technology to
          simplify your business operations. Our range of software solutions is
          meticulously crafted to streamline your processes, enhance efficiency,
          and drive growth. Whether you&#39;re looking for HRMS software,
          project management tools, inventory management systems, vehicle
          tracking solutions, or custom-built software tailored to your specific
          needs, Simplifyr has you covered.
        </p>
        <div className="space-y-10 px-4 py-6 lg:w-[80%] mx-auto mt-8">
          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                HRMS Software
              </h3>
              <p>
                Say goodbye to manual paperwork and complex HR processes. Our
                HRMS software automates tasks such as employee onboarding,
                attendance tracking, leave management, payroll processing, and
                performance evaluations. With intuitive interfaces and
                customizable features, managing your workforce has never been
                easier.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HRMS1.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HRMS3.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Project Management Software
              </h3>
              <p>
                Keep your projects on track and within budget with our project
                management software. From task assignment and progress tracking
                to resource allocation and budget management, our tools provide
                real-time insights into your project&#39;s status. Collaborate
                seamlessly with your team and stakeholders, ensuring timely
                delivery of every project.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Inventory Management Software
              </h3>
              <p>
                Efficiently manage your inventory levels, reduce stockouts, and
                optimize order fulfilment with our inventory management
                software. Track stock movements, monitor inventory levels in
                real-time, and streamline the procurement process. With features
                such as barcode scanning and automated replenishment, you&#39;ll
                never miss a sale or overstock again.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HRMS2.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HRMS4.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Vehicle Tracking Software
              </h3>
              <p>
                Gain visibility and control over your fleet operations with our
                vehicle tracking software. Monitor vehicle locations, track
                routes, and analyse driver behaviour to improve efficiency and
                safety. With real-time alerts and comprehensive reporting, you
                can optimize routes, minimize fuel costs, and ensure timely
                deliveries.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Custom-Built Software
              </h3>
              <p>
                Sometimes, off-the-shelf software may not fully meet your unique
                business requirements. That&#39;s where our custom-built
                software solutions come in. Our team of experienced developers
                works closely with you to understand your business needs and
                create tailored software solutions that address your specific
                challenges. From CRM systems to enterprise resource planning
                (ERP) solutions, we leverage cutting-edge technologies to build
                scalable and future-proof software applications.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HRMS.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>
        </div>
        <p className="lg:px-28 mt-8 text-center">
          With Simplifyr&#39;s software solutions, you can simplify complex
          processes, increase productivity, and drive business growth.
          Experience the power of technology to transform your business
          operations. Simplify your workflows with Simplifyr&#39;s software
          solutions today!
        </p>
        <Contact />
      </div>
    </>
  );
};

export default page;
