import Contact from "@/components/Contact";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="px-6 pt-12 overflow-x-hidden">
        <h3 className="text-center heading mt-8">Web Development</h3>
        <div className="flex justify-center items-center mt-8">
          <Image
            className=" "
            src="/images/web.svg"
            width={450}
            height={450}
            alt="acclogo"
          />
        </div>
        <p className="lg:px-28 mt-4 text-center">
          At Simplifyr, we recognize the pivotal role that a robust online
          presence plays in the success of any business. That&#39;s why we offer
          comprehensive web development solutions designed to elevate your
          digital presence and enhance user experiences. Whether you need a
          brand-new website, custom web applications, or ongoing maintenance,
          Simplifyr has the expertise and resources to meet your specific
          requirements.
        </p>
        <div className="space-y-10 px-4 py-6 lg:w-[80%] mx-auto mt-8">
          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] mb-3 text-center">
                UI/UX Design
              </h3>
              <p>
                Crafting an exceptional user experience is at the heart of what
                we do. Our UI/UX design services focus on creating visually
                appealing, user-friendly interfaces that resonate with your
                brand identity and captivate your audience. From wireframing and
                prototyping to final design implementation, we ensure that every
                interaction with your website or application is a delightful and
                intuitive experience.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/UIUX.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/Webdevelopment.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] text-center ">
                Custom Website Development
              </h3>
              <p>
                Your website is often the first interaction a potential customer
                has with your brand. WebCrafters specializes in creating
                visually appealing, user-friendly websites tailored to your
                brand identity and business objectives. Our team of skilled
                developers utilizes the latest technologies and industry best
                practices to deliver websites that not only look great but also
                perform seamlessly across devices.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] text-center">
                Responsive Design
              </h3>
              <p>
                With the increasing use of mobile devices, it&#39;s crucial to
                ensure that your website is accessible and functional across
                various screen sizes. WebCrafters prioritizes responsive design,
                ensuring that your website provides a seamless experience for
                users on smartphones, tablets, and desktops.
              </p>
            </div>
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/Responsive.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/2 hidden lg:flex flex-col items-center justify-center">
              <Image
                src="/images/services/Support.svg"
                width={350}
                height={350}
                alt="acclogo"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <h3 className="text-highlight font-bold text-[24px] text-center">
                Ongoing Maintenance and Support
              </h3>
              <p>
                A successful online presence requires continuous attention and
                updates. WebCrafters offers ongoing maintenance and support
                services to ensure that your website or web application stays
                secure, up-to-date, and aligned with your evolving business
                needs.
              </p>
            </div>
          </div>
        </div>
        <p className="lg:px-28 mt-8 text-center">
          Partner with Simplifyr to unlock the potential of your online
          presence. Our web development solutions empower you to connect with
          your audience, drive business growth, and stay ahead in the digital
          landscape. Let us handle the technical aspects, so you can focus on
          what you do best, running and expanding your business. Choose
          Simplifyr for all your web development needs and embark on a journey
          of digital success today!
        </p>
        <Contact />
      </div>
    </>
  );
};

export default page;
