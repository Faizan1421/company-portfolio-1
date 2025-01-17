import AiSection from "@/components/AiSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { InfiniteMovingCardsDemo } from "@/components/HeroBelowCard";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <InfiniteMovingCardsDemo/>
    <AiSection/>
    <Footer/>
    </>
  );
}
