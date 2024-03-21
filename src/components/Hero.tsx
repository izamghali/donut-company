"use client"
import React, { useState } from "react"
import { Donut } from "./Donut"
import { Vector3 } from "three";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {

    let src3 = 'https://images.pexels.com/photos/6193747/pexels-photo-6193747.jpeg'
    let src2 = 'https://images.unsplash.com/photo-1647489615365-45c8d0264f66?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    let srcVer = 'https://images.pexels.com/photos/4686961/pexels-photo-4686961.jpeg'
    

    return ( // NOTE:  add CTA btn to order
            // NOTE:  h-full when using img, h-screen when displaying 3D
            // NOTE:  pt-16 is the Navbar length
            // NOTE:  section className when 3D : bg-accent dark:bg-dark h-screen relative flex items-center
        <section className="relative flex items-center">
            {/* <Donut 
                className={`
                    h-full
                    w-screen lg:w-[30rem]
                    absolute right-0 lg:right-[1rem] xl:right-[10rem]
                    lg:std-duration
                `}
            /> */}

            <div className="h-screen md:h-auto">
                <img className="hidden md:block w-screen lg:h-screen object-cover" src={src3} alt="" />
                <img className="block md:hidden object-cover sm:w-full w-auto min-h-screen sm:h-auto" src={srcVer} alt="" />
            </div>

            {/* NOTE:  hero content className when 3D
                w-full lg:w-fit 
                lg:absolute 
                left-4 lg:left-10
                bottom-[20rem] lg:bottom-[30rem] 
                translate-y-52 md:translate-y-36 lg:translate-y-[8rem]
                std-duration text-white text-center lg:text-start
            */}
            <div className="
                absolute m-auto left-0 right-0 
                md:left-10
                std-duration text-white text-center md:text-start
                bottom-[5rem] md:bottom-[4rem] lg:bottom-[8rem]
                
                ">
                <p className="mb-6 hidden lg:block font-light tracking-wider text-dark md:translate-x-[17rem] w-fit">Gyms are cool, but have you tried</p>
                <Logo 
                    classNameH1="font-bold 
                        text-5xl md:text-6xl lg:text-8xl
                        " 
                    classNameSVG="fill-white w-10 md:w-20 lg:w-24" 
                />

                {/* <p className="text-2xl lg:text-5xl font-extralight mt-2">Sit | Eat | Repeat</p> */}
                <p className="
                    text-xl md:text-2xl lg:text-4xl 
                    font-extralight mt-2 text-slate-100
                ">Sweets that make you&nbsp;
                    go nuts!?
                </p>

                <div className="mt-6">
                    <Link href={'/menu'} className="btn group px-10 bg-white border-2 border-white text-dark duration-200 hover:border-white hover:text-white md:rounded-lg rounded-full">
                        Order Now
                        <svg className="bi bi-arrow-right group-hover:translate-x-2 duration-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                        </svg>
                    </Link>

                </div>


            </div>
        </section>
    )
};

