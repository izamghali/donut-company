'use client'
import React from "react"
import { Silkscreen } from "next/font/google"

const silkscreen = Silkscreen({subsets: ["latin"], weight: '400' })

export default function Happening() {

    let carousels = [
        'https://images.unsplash.com/photo-1524646349956-1590eacfa324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1595239094789-4e00e532528a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/uploads/141148589884100082977/a816dbd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1610768798760-e01a4b43814e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1628630500614-1c8924c99c3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]

    let nums = Array.from(Array(20).keys())
    let multiplier = 20

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
                <span className="font-medium text-3xl absolute bg-red-400 text-dark w-60">Tired of eating?</span>
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

            <div className="top-0 -left-36 translate-x-[50rem] flex space-x-[-13rem] z-10 ">
                    
                    { carousels.map((item, idx) => {
                        return <div className={`w-[40rem] overflow-hidden hover:blur-0 duration-700 
                                ${ idx !== carousels.length - 1 ? 'rotate-[82deg] z-10' : '' }
                                ${ idx % 2 === 0 ? 'blur-[0.5px]': '' } 
                                ${ idx === carousels.length - 2 ? 'z-20' : '' }`} key={idx}>
                            <img
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