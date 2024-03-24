import React from "react"
import MenuCard from "./MenuCard"
import { Menu } from "@/types"

interface Props {
    className: string
    menuData: Menu[]
}

export default function Drawer({ className, menuData } : Props) {

    return (
        <div className={`drawer dark:bg-dark dark:text-light  ${className}`}>
            <input id="product-drawer" type="checkbox" className="drawer-toggle" />

            {/* // NOTE:  mt-16 is the length of the Navbar */}
            <div className="drawer-content flex flex-col mt-16 dark:bg-dark">

                <h3 className="md:hidden block font-bold text-xl text-center dark:text-white">Our Menu</h3>
                <div role="tablist" className="tabs 
                    border-b-2 border-x-0 py-2 bg-white  md:hidden 
                    flex justify-center
                    sticky top-[4rem] tabs-lifted mt-2
                    dark:bg-dark dark:text-light z-30
                ">
                    <button role="tab" className="tab snap-center tab-active">Donuts</button>
                    {/* content */}
                    <button role="tab" className="tab snap-center hidden sm:block">Cookies & Brownies</button>
                    <button role="tab" className="tab snap-center sm:hidden flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cookie" viewBox="0 0 16 16">
                            <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
                        </svg>CnB
                    </button>
                    {/* content */}
                    <button role="tab" className="tab snap-center">Beverage</button>
                    {/* content */}
                </div>

                <div className="
                    
                    h-[45rem] overflow-scroll snap-mandatory
                    snap-y lg:snap-none md:h-screen lg:h-full
                    flex flex-wrap xl:gap-8 gap-4 
                    justify-center lg:justify-start 
                    p-4 md:p-10
                ">
                    {
                        menuData.map((item, idx) => {
                            return <div key={idx}>
                                <MenuCard 
                                    className=""
                                    item={item}
                                    idx={idx}
                                />

                            </div>
                        })
                    }

                </div>

                
            </div> 
            
            <div className="drawer-side border-r-2 dark:border-slate-400">
                <label htmlFor="product-drawer" aria-label="open sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content hidden md:block">
                {/* Sidebar content here */}

                    <h3 className="text-center font-bold text-xl mb-10 mt-20">Our Menu</h3>

                    <div className="flex flex-col gap-2">
                        <button className=" p-2 cursor-pointer">Donuts</button>
                        <button className=" p-2 cursor-pointer">Cookies & Brownies</button>
                        <button className=" p-2 cursor-pointer">Beverage</button>
                    </div>
                </ul>
            </div>
        </div>
    )
};

