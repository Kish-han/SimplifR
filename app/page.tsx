import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import UnionShape from "@/components/UnionShape";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden ">
      <Hero />
      <UnionShape />
      <OurServices />
      <About />
      <Contact />
    </div>
  );
}
