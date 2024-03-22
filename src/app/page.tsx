'use client'
import Happening from "@/components/Happening";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const html = document.querySelector('html')
    html?.classList.add('snap-y')
    html?.classList.add('snap-proximity')
    
  }, [])

  return (
    <section className="" id="app">
      <Hero className="snap-start snap-normal" />

      <Overview className="" />

      <div className="relative snap-center snap-normal">
        <Happening />
        <p className="absolute -bottom-6 left-2 text-lightLess dark:text-lightLess">
          <span className="hidden lg:inline">scroll</span>
          <span className="inline lg:hidden">swipe</span>&nbsp;right
        </p>
      </div>

      <Testimonials className="snap-start snap-normal" />
      
    </section>
  );
}
