import About from "@/components/About";
import Hero from "@/components/Hero";
import UnionShape from "@/components/UnionShape";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-20 relative">
      <Hero />
      <UnionShape />
      <About />
    </div>
  );
}
