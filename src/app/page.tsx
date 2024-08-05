import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import { SidebarDemo } from "@/components/NavigationBar";
import ServiceHighlight from "@/components/ServiceHighlight";
import SpecialOffers from "@/components/SpecialOffers";
import Image from "next/image";

export default function Home() {
  return (
    <main className=' font-permanent_marker'>
      <Hero />
      <FeaturedProduct />
      <SpecialOffers />
      <ServiceHighlight />
    </main>
  );
}
