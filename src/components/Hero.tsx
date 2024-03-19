"use client"
import React, { useState } from "react"
import { Donut } from "./Donut"
import { Vector3 } from "three";
import Link from "next/link";
import Promo from "./Promo";
import Logo from "./Logo";

export default function Hero() {

    // const initialScale = () : any => {
    //     let small  = [ 10, 10, 10 ]
    //     let big  = [ 14, 14, 14 ]
    //     if (typeof window !== 'undefined' && window.localStorage) {
    //         let sm = window.matchMedia("(min-width: 480px)").matches;

    //         if (sm) {
    //             return  big
    //         } else {
    //             return  small
    //         }
    //     }
    // }

    let src = 'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/donut-loop.webm?alt=media&token=86cdc3a7-0e04-4c08-b9fe-55c634c8ae77'

    return ( // NOTE:  add CTA btn to order
        <section className="bg-accent dark:bg-dark h-screen relative flex items-center">
            <Donut 
                className={`
                    h-full absolute 
                    w-screen lg:w-[30rem]
                    right-0 lg:right-[1rem] xl:right-[10rem]
                    lg:std-duration
                `}
            />

            {/* <Promo /> */}

            <div className=" 
                w-full lg:w-fit 
                lg:absolute 
                left-4 lg:left-10
                bottom-[20rem] lg:bottom-[30rem] 
                translate-y-52 md:translate-y-36 lg:translate-y-[8rem]
                std-duration
                text-white text-center lg:text-start
                ">
                <p className="mb-6 hidden lg:block font-light tracking-wider dark:text-std-yellow text-dark">Gyms are cool, but have you tried</p>
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
                    <Link href={'/menu'} className="btn group px-10 bg-white border-2 border-white text-dark duration-200 hover:border-white hover:text-white">
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

