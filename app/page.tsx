import About from "@/components/About";
import Hero from "@/components/Hero";
import UnionShape from "@/components/UnionShape";
import OurServices from "@/components/OurServices";


export default function Home() {
  return (
    <div className="relative overflow-x-hidden ">
      <Hero />
      <UnionShape />
      <About />
      <OurServices />
    </div>
  );
}
