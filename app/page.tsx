import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OurServices from "@/components/OurServices";
import UnionShape from "@/components/UnionShape";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden ">
      <NavBar />
      <Hero />
      <UnionShape />
      <OurServices />
      <About />
      {/* <Vision /> */}
      <Contact />
    </div>
  );
}
