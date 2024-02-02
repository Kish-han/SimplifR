import About from "@/components/About";
import Hero from "@/components/Hero";
import UnionShape from "@/components/UnionShape";
import Image from "next/image";
import { Scrollbar } from "react-scrollbars-custom";

export default function Home() {
  return (
    <div className="relative customNavbar overflow-x-hidden">
      <Hero />
      <UnionShape />
      <About />
    </div>
  );
}
