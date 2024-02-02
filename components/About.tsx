import React from "react";
import Services from "./Services";
import Headings from "./Headings";

type Props = {};

const About = (props: Props) => {
  return (
    <div id="about" className="h-[80vh] mt-[340px] md:mt-[200px] lg:mt-[100px] xl:mt-5">
      <Headings head={"About Us"} subhead={"WHO ARE WE"} />
    </div>
  );
};

export default About;
