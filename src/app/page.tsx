import FeaturedProduct from "@/components/FeaturedProduct";
import Hero from "@/components/Hero";

import ServiceHighlight from "@/components/ServiceHighlight";
import SpecialOffers from "@/components/SpecialOffers";

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
