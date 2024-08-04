import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { SidebarDemo } from "@/components/NavigationBar";
import SpecialOffers from "@/components/SpecialOffers";
import Image from "next/image";

export default function Home() {
  return (
    <main className='mb-5 font-permanent_marker'>
      <NavBar />
      <Hero />
      <FeaturedProduct />
      <SpecialOffers />
    </main>
  );
}
