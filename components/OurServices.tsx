import Headings from "./Headings";
import Services from "./Services";

type Props = {};

const OurServices = (props: Props) => {
  return (
    <div className="mt-[250px] md:mt-[150px]  lg:mt-[50px] xl:mt-[0px]  ">
      <Headings head={"Our Services"} />
      <Services />
    </div>
  );
};

export default OurServices;
