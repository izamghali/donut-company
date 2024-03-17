"use client"
import React, { useState } from "react"
import { Donut } from "./Donut"
import { Vector3 } from "three";

export default function Hero() {

    const initialScale = () : any => {
        let small  = [ 10, 10, 10 ]
        let big  = [ 14, 14, 14 ]
        if (typeof window !== 'undefined' && window.localStorage) {
            let md = window.matchMedia("(min-width: 768px)").matches;
            let lg = window.matchMedia("(min-width: 976px)").matches;
            let xl = window.matchMedia("(min-width: 1280px)").matches;
            let xxl = window.matchMedia("(min-width: 1536px)").matches;
            let sm = window.matchMedia("(min-width: 480px)").matches;

            if (sm) {
                return  big
            } else {
                return  small
            }
        }
    }

    return ( // NOTE:  add CTA btn to order
        <section className="bg-accent dark:bg-dark h-screen relative flex items-center">
            <Donut 
                className={`
                    h-full absolute 
                    w-screen lg:w-[30rem]
                    right-0 lg:right-[1rem] xl:right-[10rem]
                    lg:std-duration
                `}
                donutScale={initialScale()}
                // donutScale={ [ 12, 12, 12 ]}
                // donutScale={ sm ? [ 14, 14, 14 ] : [ 10, 10, 10 ]}
            />
            <div className=" 
                w-full lg:w-fit 
                lg:absolute 
                left-4 lg:left-10
                bottom-[20rem] lg:bottom-[30rem] 
                translate-y-40 md:translate-y-36 lg:translate-y-[8rem]
                std-duration
                text-white text-center lg:text-start
            ">
                <h1 className="
                    font-bold 
                    text-5xl md:text-6xl lg:text-8xl
                    flex items-center justify-center lg:justify-start 
                    std-duration
                ">
                    Js D
                    <svg className="fill-white w-10 md:w-20 lg:w-24" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="7.8119659423828125 7.808945178985596 84.3759994506836 84.37605285644531"><g fill="current-fill"><path d="M91.992 46.211c-.05-.48-.32-.914-.734-1.164-.41-.254-.918-.3-1.375-.133-.696.266-1.496.399-2.383.399-4.309 0-7.813-3.504-7.813-7.813 0-.836.125-1.617.375-2.32a1.554 1.554 0 0 0-.648-1.852 1.558 1.558 0 0 0-1.945.242 7.815 7.815 0 0 1-5.594 2.364c-4.309 0-7.813-3.504-7.813-7.813a7.81 7.81 0 0 1 2.367-5.594 1.559 1.559 0 0 0 .243-1.949 1.57 1.57 0 0 0-1.856-.648c-.7.25-1.48.379-2.316.379-4.309 0-7.813-3.504-7.813-7.813 0-.887.133-1.687.399-2.383.172-.453.125-.96-.13-1.375a1.555 1.555 0 0 0-1.167-.734 35.768 35.768 0 0 0-3.79-.195c-23.261 0-42.187 18.926-42.187 42.188 0 23.262 18.926 42.188 42.188 42.188s42.188-18.926 42.188-42.188c0-1.274-.067-2.547-.196-3.79zM50 89.063c-21.539 0-39.062-17.523-39.062-39.062S28.461 10.939 50 10.939c.559 0 1.113.012 1.668.04-.07.491-.105.995-.105 1.522 0 5.864 4.64 10.664 10.438 10.926a10.97 10.97 0 0 0-1.063 4.7c0 6.03 4.906 10.938 10.938 10.938 1.637 0 3.242-.371 4.7-1.067.26 5.802 5.061 10.442 10.924 10.442.524 0 1.031-.035 1.52-.105.027.55.043 1.11.043 1.668 0 21.539-17.523 39.062-39.062 39.062zm14.062-39.062c0-7.754-6.309-14.062-14.062-14.062s-14.062 6.309-14.062 14.062S42.247 64.063 50 64.063s14.062-6.309 14.062-14.062zm-25 0c0-6.031 4.906-10.938 10.938-10.938s10.938 4.906 10.938 10.938S56.032 60.939 50 60.939s-10.938-4.906-10.938-10.938zm-15.625 0c0-14.645 11.914-26.562 26.562-26.562a1.562 1.562 0 1 1 0 3.125c-12.926 0-23.438 10.512-23.438 23.438a1.562 1.562 0 1 1-3.125 0zM29.523 63.2a1.56 1.56 0 0 1-2.098.7l-6.25-3.126a1.562 1.562 0 0 1-.699-2.097 1.565 1.565 0 0 1 2.098-.7l6.25 3.125a1.562 1.562 0 0 1 .699 2.098zm9.375 14.227a1.562 1.562 0 0 1-1.399 2.262 1.56 1.56 0 0 1-1.398-.864l-3.125-6.25a1.562 1.562 0 0 1 .7-2.097 1.566 1.566 0 0 1 2.097.699zM74.3 48.275l-6.25-3.125a1.562 1.562 0 0 1-.7-2.098 1.562 1.562 0 0 1 2.098-.699l6.25 3.125A1.562 1.562 0 0 1 75 48.44c-.234 0-.472-.05-.699-.164zm5.223 16.652a1.562 1.562 0 0 1-1.399 2.262 1.56 1.56 0 0 1-1.398-.864l-3.125-6.25a1.562 1.562 0 0 1 .699-2.097c.77-.387 1.71-.07 2.098.699zm-12.336 3.824c0 .863-.7 1.563-1.563 1.563h-6.25a1.562 1.562 0 1 1 0-3.125h6.25c.863 0 1.563.699 1.563 1.562zm-9.54 8.676c.387.773.075 1.71-.699 2.098l-6.25 3.125a1.53 1.53 0 0 1-.699.164 1.562 1.562 0 0 1-.7-2.961l6.25-3.125a1.565 1.565 0 0 1 2.099.699z"></path></g></svg>    
                    -Nuts
                </h1> 

                {/* <p className="text-2xl lg:text-5xl font-extralight mt-2">Sit | Eat | Repeat</p> */}
                <p className="
                    text-xl md:text-2xl lg:text-4xl 
                    font-extralight mt-2 text-slate-200
                ">Sweets that make you&nbsp;
                    go nuts!
                    {/* <span className="bg-[#CC95AF]">
                    </span> */}
                </p>


            </div>
        </section>
    )
};

