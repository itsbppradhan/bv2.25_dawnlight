import Image from "next/image";
import { Hero } from "./components/hero-section";
import TopBar from "@/components/navigation-menu/navigation-menu-top-bar";
import { FlipWordsDemo } from "./components/intro-text";
import { Bento } from "./components/bento";

export default function Home() {
  return (
    <main className=" ">
      
      <Hero />
      <FlipWordsDemo />
      <Bento />
      
    </main>
  );
}
