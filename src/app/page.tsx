'use client'
import Happening from "@/components/Happening";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import missionImg from '../../public/mission.jpg'
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  let dots = Array.from({ length: 6032 }); // gap-7px

  useEffect(() => {
    const html = document.querySelector('html')
    html?.classList.add('snap-y')
    html?.classList.add('snap-proximity')
    
  }, [])

  return (
    <section className="" id="app">
      <Hero className="snap-start snap-normal" />

      {/* mission statement */}
      <div className="snap-center lg:snap-start snap-normal dark:bg-dark dark:text-light
          py-12 xl:py-0 lg:px-10 px-10
          xl:h-screen std-duration 
          lg:flex lg:flex-col lg:justify-center items-center relative
        ">
          <div className="xl:max-w-[80em] border-2 border-dark lg:p-8 p-4 relative bg-white">
            <h2 className="font-bold text-3xl lg:text-7xl max-lg:text-center mb-4 lg:mb-10">What We Thrive On</h2>

            <div className="
              flex flex-col lg:flex-row md:items-center lg:items-stretch
              gap-4 lg:gap-10 relative z-30 
              ">

              <div className="max-w-[40rem] w-full">
                <Image src={missionImg} alt="image of a dad & daughter looking at donuts"
                  className="rounded-xl object-cover w-full"/>
              </div>

              <div className="relative max-lg:max-w-[40rem] w-full flex flex-col justify-between items-end gap-10">
                <p className=" text-lightLess dark:text-darkLess md:text-xl">JS Do-Nuts is a startup company established in 2007 with a simple yet powerful mission: 
                <span className="bg-std-yellow">
                  to craft moments of joy through irresistible donuts. 
                </span>
                  <span className="hidden sm:inline">&nbsp;We pride ourselves on using only the finest ingredients and artisanal techniques to create our delicious treats. Our donuts are made fresh daily, handcrafted with care and creativity to ensure every bite is a delight. 
                  <span className="bg-std-emerald">
                  At JS Do-Nuts, we believe in the power of donuts to bring people together and brighten their day
                  </span>
                  , and we're committed to spreading happiness one delectable treat at a time.</span>
                </p>
                <Link className="btn" href={'/about'} >Our Story
                  <svg className="bi bi-arrow-right" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="hidden border-black xl:inline absolute -z-10 top-10 left-10 w-full h-full overflow-hidden">
              <div className="flex gap-[7px] flex-wrap">
                {
                  dots.map((item, idx) => {
                    return <div key={idx} className="w-1 h-1 rounded-full bg-slate-400"></div>
                  })
                }

              </div>
            </div>
            
          </div>

      </div>      

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
