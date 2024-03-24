import React from "react"
import Image from "next/image"
import newsImg1 from '../../public/news/app.jpg'
import newsImg2 from '../../public/news/serve.jpg'
import newsImg3 from '../../public/news/handshake.jpg'

import { timelines } from "@/app/data"
import Logo from "./Logo"
import Link from "next/link"

export default function Timeline({ className }: { className: string }) {

    let news = [
        {
            src : newsImg1,
            desc: 'a picture of a person scrolling on their phone',
            heading: 'Launching JS Do-Nuts App'
        },
        {
            src : newsImg2,
            desc: 'a picture of 2 cups of coffee and a donut on top of a plate',
            heading: 'First Serving'
        },
        {
            src : newsImg3,
            desc: 'a picture of 2 people handshaking',
            heading: 'Expanding New Branches'
        },
    ]

    return (
        <div className="lg:flex lg:p-10 xl:p-0 p-0 lg:h-[30rem] lg:w-[80rem] std-duration relative overflow-x-hidden gap-4">
            
            <div className="carousel lg:rounded-box w-full std-duration max-lg:max-h-96"> { /* static lg:relative xl:static */ }
                {
                    news.map((item, idx) => {
                        return <div key={idx} className="carousel-item w-full group relative overflow-hidden">
                            <Image alt={item.desc} className="object-cover w-full h-full group-hover:scale-105 std-duration" src={item.src} />
                        </div> 
                    })
                }
                <div className="absolute xl:top-4 xl:left-4 
                    lg:top-12 lg:left-12 sm:left-4 sm:top-4 left-2 top-2
                    text-3xl text-light flex">
                    <Logo classNameH1="font-bold" classNameSVG="fill-light w-8" />
                    <span className="font-extralight">&nbsp;News</span>
                </div>
                <Link href={'/team'} className="btn w-fit 
                    sticky top-[20.5rem] right-2 
                    lg:left-[11rem] lg:top-[21.5rem]
                    xl:left-[30rem]  xl:top-[26.5rem]
                    hover:border-light hover:bg-light hover:text-dark border-light bg-light text-dark">Meet Our Team</Link>
                <p className="absolute top-[22rem] left-2 lg:top-[25.5rem] lg:left-14 xl:left-4 xl:top-[28rem] text-light flex items-center gap-1 select-none">
                    Scroll right
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </p>
                
            </div>

            <div className=" w-full overflow-scroll h-auto flex-col flex gap-4 ">
                <h2 className="text-center lg:text-left font-bold text-lg lg:w-fit w-full tracking-wider">Milestones</h2>
                {/* xl:translate-x-[10rem] */}
                <ul className={` ${className} timeline timeline-vertical xl:pl-0
                    h-[20rem] lg:h-full gap-8 w-full overflow-y-scroll p-4 overflow-x-hidden 
                    -translate-x-4 sm:translate-x-0
                    `}>
                    
                    {
                        timelines.map((item, idx) => {
                            return <li key={idx} className=" w-80 -translate-x-24">
                                <hr/>
                                    <div className="timeline-start ">{item.year}</div>
                                    <div className="timeline-middle max-sm:hidden">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                    </div>
                                    <div className="timeline-end timeline-box min-w-[14rem] sm:min-w-[24rem] md:min-w-[40rem] lg:min-w-[20rem] xl:min-w-[24rem] std-duration">{item.desc}</div>
                                <hr/>
                            </li>
                        })
                    }
                    
                </ul>
            </div>

        </div>
    )
};

