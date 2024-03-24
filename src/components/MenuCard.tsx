import React from "react"
import Image from "next/image"
import { Menu } from "@/types"

export default function MenuCard({ className, item } : { className: string, item: Menu }) {
    return (
        <div className="snap-center
            card group relative  
            w-96 md:w-full lg:w-96
            min-w-[18rem] lg:max-w-[20rem] max-w-auto
            bg-base-100 shadow-xl overflow-hidden 
            text-dark std-duration "  >
            <Image className="h-full cursor-zoom-in  group-hover:scale-105 std-duration" src={item.src} alt="" />

            {/* title */}
            <div className={`absolute top-[1.5rem] left-[1.5rem] right-[1.5rem]`}>
                <h3 className="card-title">
                    {item.title}
                    {
                        item.badges.map((badge, idx) => {
                            return <div key={idx} className="badge font-light">{badge}</div>
                        })
                    }
                </h3>
                
            </div>
            <div className={`card-actions justify-between items-center absolute bottom-[1.5rem] left-[1.5rem] right-[1.5rem]`}>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <p className="font-semibold text-lg tracking-wider select-none">${item.price}</p>
                <button className="btn btn-primary px-8 hover:bg-light hover:text-dark hover:border-light">Order</button>
            </div>
        </div>
    )
};

