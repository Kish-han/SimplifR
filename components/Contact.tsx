"use client";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Headings from "./Headings";

type Props = {};

const Contact = (props: Props) => {
  // const formRef = useRef();
  const formRef = React.useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [written, setWritten] = useState(false);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  useEffect(() => {
    if (
      form.name === "" ||
      form.email === "" ||
      form.message === "" ||
      form.phone === ""
    ) {
      setWritten(false);
    } else {
      setWritten(true);
    }

    return () => {
      setWritten(false);
    };
  }, [form.name, form.email, form.message, form.phone]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_v38xqb6",
        "template_fjfb4hz",
        {
          from_name: form.name,
          to_name: "Kishan",
          from_email: form.email,
          from_phone: form.phone,
          to_email: "Kishanprasad0901@gmail.com",
          message: form.message,
        },
        "te5OTmCDa_eNPatGp"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className=" px-2 pt-[-30px]">
      <Headings head="Contact" />
      <div className="flex flex-col lg:flex-row justify-between py-5">
        <div className=" w-[100%] lg:w-[40%]  mx-auto lg:mx-8 mt-12 lg:mt-5 px-5 py-6 navcard dark:navcarddark shadow-lg order-2">
          <form ref={formRef} onSubmit={handleSubmit} className=" ">
            <label className="flex flex-col mb-5">
              <span className="mb-3">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name ?"
                className="bg-[#fafaff] dark:bg-[#25232C] py-2 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50"
              />
            </label>
            <label className="flex flex-col mb-5">
              <span className="mb-3">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address ?"
                className="bg-[#fafaff] dark:bg-[#25232C] py-2 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50"
              />
            </label>
            <label className="flex flex-col mb-5">
              <span className="mb-3">Your Phone number</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="What's your ph number ?"
                className="bg-[#fafaff] dark:bg-[#25232C] py-2 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50"
              />
            </label>
            <label className="flex flex-col mb-5">
              <span className="mb-3">Your Message</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say ?"
                className="bg-[#fafaff] dark:bg-[#25232C] py-2 rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-opacity-50"
              />
            </label>
            <div className="flex justify-end">
              {written ? (
                <button
                  type="submit"
                  className="bgBlur py-3 px-8 rounded-xl outline-none font-bold shadow-md"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              ) : (
                <div
                  className="cursor-not-allowed py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-sm shadow-primary "
                  onClick={() => alert("Please fill all the fields")}
                >
                  Send
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="w-[100%] lg:w-[60%] mt-10 h-full flex justify-center items-center order-1">
          <Image
            className="object-fit"
            src="/images/contact.svg"
            alt="contact"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
