"use client"
import React from "react"
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import HeroHorizontal from '../../public/hero/hero-horizontal.jpg'
import HeroVertical from '../../public/hero/hero-vertical.jpg'

export default function Hero() {
    
    return (
        <section className="relative flex items-center">

            <div className="h-screen md:h-auto">
                <Image className="hidden md:block w-screen lg:h-screen object-cover" src={HeroHorizontal} alt="" />
                <Image priority className="block md:hidden object-cover sm:w-full w-auto min-h-screen sm:h-auto" src={HeroVertical} alt="" />
            </div>

            <div className="
                absolute m-auto left-0 right-0 
                md:left-10
                std-duration text-white text-center md:text-start
                bottom-[5rem] md:bottom-[4rem] lg:bottom-[8rem]
                
                ">
                <p className="mb-6 hidden lg:block font-light tracking-wider text-dark md:translate-x-[17rem] w-fit">Gyms are cool, but have you tried</p>
                <Logo 
                    classNameH1="font-bold text-5xl md:text-6xl lg:text-8xl" 
                    classNameSVG="fill-white w-10 md:w-20 lg:w-24" 
                />

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

