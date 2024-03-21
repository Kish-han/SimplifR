import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="px-6 pt-10 overflow-x-hidden">
        <h3 className="text-center heading mt-8">HR solutions</h3>
        <div className="flex justify-center items-center mt-8 ">
          <Image
            className=" "
            src="/images/hr.svg"
            width={450}
            height={450}
            alt="acclogo"
          />
        </div>
        <p className="lg:px-28 mt-4 text-center">
          At Simplifyr, we understand that finding the right talent is crucial
          for the success of any business. That&#39;s why we offer comprehensive
          HR solutions designed to connect you with top-quality resources and
          streamline your recruitment process. Whether you need assistance with
          sourcing candidates or managing the entire recruitment lifecycle,
          Simplifyr has the expertise and resources to meet your needs.
        </p>
        <div className="space-y-10 px-4 py-6 lg:w-[80%] mx-auto mt-8">
          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Candidate Sourcing
              </h3>
              <p>
                Finding qualified candidates can be a time-consuming and
                challenging task. Simplifyr takes the hassle out of recruitment
                by leveraging our extensive network and industry expertise to
                source top talent for your organization. Our team employs a
                multi-channel approach to identify and attract candidates with
                the right skills and experience to match your requirements. From
                job boards and social media platforms to professional networks
                and referrals, we leave no stone unturned in our quest to find
                the perfect fit for your team.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HR.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HR2.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Quality Resources
              </h3>
              <p>
                We understand that finding quality resources goes beyond just
                matching skills and qualifications. It&#39;s about finding
                candidates who not only have the right technical expertise but
                also align with your company culture and values. Simplifyr goes
                the extra mile to ensure that every candidate we present to you
                meets our high standards of excellence. Our rigorous screening
                process includes comprehensive assessments, thorough background
                checks, and in-depth interviews to ensure that only the best
                candidates make it through to the final selection stage.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Recruitment Management
              </h3>
              <p>
                Managing the recruitment process can be overwhelming, especially
                when you&#39;re juggling multiple job openings and competing
                priorities. Simplifyr streamlines the entire recruitment
                lifecycle, from job posting and candidate screening to interview
                scheduling and offer management. Our intuitive recruitment
                management platform provides real-time visibility into your
                hiring pipeline, allowing you to track progress, collaborate
                with your team, and make informed decisions every step of the
                way.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HR3.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/HR4.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                Customized Solutions
              </h3>
              <p>
                We understand that every organization is unique, with its own
                set of challenges and requirements. That&#39;s why we offer
                customized HR solutions tailored to meet your specific needs.
                Whether you&#39;re a small startup looking to build your team
                from scratch or a large corporation seeking to scale your
                workforce, Simplifyr can design a personalized solution that
                fits your budget, timeline, and objectives
              </p>
            </div>
          </div>
        </div>
        <p className="lg:px-28 mt-8 text-center">
          With Simplifyr&#39;s HR solutions, you can streamline your recruitment
          process, attract top talent, and build a high-performing team that
          drives business success. Let us take the stress out of hiring so you
          can focus on what you do best – growing your business. Partner with
          Simplifyr for all your HR needs and unlock the power of quality
          resources today!
        </p>
        <Contact />
      </div>
    </>
  );
};

export default page;
