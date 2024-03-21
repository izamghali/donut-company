'use client'
import React from "react"
import { Silkscreen } from "next/font/google"
import Image, { StaticImageData } from "next/image"
import fest1 from '../../public/festivities/fest-1.avif'
import fest2 from '../../public/festivities/fest-2.avif'
import fest3 from '../../public/festivities/fest-3.avif'
import fest4 from '../../public/festivities/fest-4.avif'
import fest5 from '../../public/festivities/fest-5.avif'

const silkscreen = Silkscreen({subsets: ["latin"], weight: '400' })

export default function Happening() {

    let carousels = [ fest1, fest2, fest3, fest4, fest5]

    let nums = Array.from(Array(20).keys())

    return (
        <section className="bg-white
            flex justify-between 
            overflow-x-scroll overflow-y-hidden relative
        ">
            
            {/* heading */}
            <div className="z-20 w-full sticky top-10 left-10">
                <h2 className="font-bold text-5xl absolute bg-white text-dark">Fun</h2>
                <h2 className="font-bold text-5xl absolute bg-white text-dark translate-y-14">Festivities</h2>
            </div>

            <div className="z-20 sticky top-[15rem] left-10 sm:left-[12rem] md:left-[15rem] lg:left-[20rem] h-fit std-duration">
                <span className="font-medium text-3xl absolute text-dark w-60">Tired of eating?</span>
                <button className="btn translate-y-[10rem] translate-x-[8rem] md:translate-x-[20rem] px-10 bg-std-yellow border-none hover:bg-std-yellow hover:translate-y-[9.5rem]">Join</button>
            </div>

            {/* text bg */}
            <div className="flex select-none text-slate-500">
                <div className={`absolute top-0 left-0 flex flex-col w-full`}>
                    {
                        nums.map((num, idx) => {
                            return <div key={idx} className="w-full">
                                <p className={` ${silkscreen.className} `}>&gt;Sit | Eat | Repeat?</p>
                            </div>
                        })
                    }
                </div>
                <div className={`absolute top-0 left-[12.5rem] flex flex-col w-full`}>
                    {
                        nums.map((num, idx) => {
                            return <div key={idx} className="w-full">
                                <p className={` ${silkscreen.className} `}>&gt;Sit | Eat | Repeat?</p>
                            </div>
                        })
                    }
                </div>
                <div className={`absolute top-0 left-[25rem] flex flex-col w-full`}>
                    {
                        nums.map((num, idx) => {
                            return <div key={idx} className="w-full">
                                <p className={` ${silkscreen.className} `}>&gt;Sit | Eat | Repeat?</p>
                            </div>
                        })
                    }
                </div>
                <div className={`absolute top-0 left-[37.5rem] flex flex-col w-full`}>
                    {
                        nums.map((num, idx) => {
                            return <div key={idx} className="w-full">
                                <p className={` ${silkscreen.className} `}>&gt;Sit | Eat | Repeat?</p>
                            </div>
                        })
                    }
                </div>
                <div className={`absolute top-0 left-[50rem] flex flex-col w-full`}>
                    {
                        nums.map((num, idx) => {
                            return <div key={idx} className="w-full">
                                <p className={` ${silkscreen.className} `}>&gt;Sit | Eat | Repeat?</p>
                            </div>
                        })
                    }
                </div>
            </div>

            {/* carousels */}
            <div className="top-0 -left-36 translate-x-[50rem] flex space-x-[-13rem] z-10 ">
                    
                    { carousels.map((item : StaticImageData, idx: number) => {
                        return <div className={`w-[40rem] overflow-hidden hover:blur-0 duration-700 
                                ${ idx !== carousels.length - 1 ? 'rotate-[82deg] z-10' : '' }
                                ${ idx % 2 === 0 ? 'blur-[0.5px]': '' } 
                                ${ idx === carousels.length - 2 ? 'z-20' : '' }`} key={idx}>
                            <Image
                                className={
                                    `w-full h-full hover:scale-105 duration-300 scale-[102%]
                                    ${ idx !== carousels.length - 1 ? '-rotate-[82deg]' : '' } `} 
                                src={item} 
                                alt="" 
                                key={idx} 
                            />
                        </div>
                    })}

            </div>
        </section>
    )
};