import About from "@/components/About";
import Hero from "@/components/Hero";
import UnionShape from "@/components/UnionShape";
import OurServices from "@/components/OurServices";
import Vision from "@/components/Vision";


export default function Home() {
  return (
    <div className="relative overflow-x-hidden ">
      <Hero />
      <UnionShape />
      <About />
      <OurServices />
      <Vision />
    </div>
  );
}
