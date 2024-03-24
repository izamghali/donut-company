'use client'
import React from "react"
import Image, { StaticImageData } from "next/image"
import NavigateBtn from "./NavigateBtn"

export default function Overview({ className, src, heading, text } : { className: string, src : StaticImageData, heading: string, text: any }) {

    let dots = Array.from({ length: 6800 }); // gap-7px
    // let dots = Array.from({ length: 6032 }); // gap-7px

    return (
        <div className={` ${ className } dark:bg-dark dark:text-light
          py-12 xl:py-0 lg:px-10 px-10
          xl:h-screen std-duration 
          lg:flex lg:flex-col lg:justify-center items-center relative
        `}>
          <div className="xl:max-w-[80rem] border-2 border-dark lg:p-8 p-4 relative bg-white dark:bg-dark dark:border-light">
            <h2 className="font-bold text-3xl lg:text-7xl max-lg:text-center mb-4 lg:mb-10">{heading}</h2>

            <div className="
              flex flex-col lg:flex-row md:items-center lg:items-stretch
              gap-4 lg:gap-10 relative z-30 
              ">
                
              {/* image */}
              <div className="max-w-[40rem] w-full">
                <Image priority width={1920} height={1280} src={src} alt="image of a dad & daughter looking at donuts"
                  className="rounded-xl object-cover w-full"/>
              </div>

              {/* content */}
              <div className="relative max-lg:max-w-[40rem] w-full flex flex-col justify-between items-end gap-10">
                { text }
                <NavigateBtn className="" navigateTo="/about" buttonLabel="Our Story" />
              </div>
            </div>

            {/* dots */}
            <div className="dark:hidden hidden xl:inline absolute -z-10 top-10 left-10 w-full h-full overflow-hidden">

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
    )
};

