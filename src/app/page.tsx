import Happening from "@/components/Happening";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {


  return (
    <section className="">
      <Hero />

      {/* <Promo /> */}

      <Happening />

      <Testimonials />
      
    </section>
  );
}
