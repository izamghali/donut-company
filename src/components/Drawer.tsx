import React from "react"

interface Menu {
    title: string,
    desc: string,
    price: number,
    badges: string[],
    src: string
}

interface Props {
    className: string
    menuData: Menu[]
}

export default function Drawer({ className, menuData } : Props) {

    const menuCards = () => {
        return menuData.map((item, idx) => {
            return <div key={idx} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h3 className="card-title">
                        {item.title}
                        {
                            item.badges.map((badge, idx) => {
                                return <div key={idx} className="badge badge-secondary">{badge}</div>
                            })
                        }
                    </h3>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-between items-center">
                        <button className="font-semibold text-lg tracking-wider">${item.price}</button>
                        <button className="btn btn-primary px-8">Order</button>
                    </div>
                </div>
            </div>
        })
    }

    const cardPadding = '2rem'

    return (
        <div className={` drawer ${className}`}>
            <input id="product-drawer" type="checkbox" className="drawer-toggle" />

            {/* // NOTE:  mt-16 is the length of the Navbar */}
            <div className="drawer-content flex flex-col mt-16 dark:bg-dark">

                <h3 className="md:hidden block font-bold text-xl text-center">Our Menu</h3>
                <div role="tablist" className="tabs 
                    border-b-2 py-2 bg-white  md:hidden 
                    flex justify-center
                    sticky top-[4rem] tabs-lifted mt-2
                ">
                    <a role="tab" className="tab tab-active">Donuts</a>
                    {/* content */}
                    <a role="tab" className="tab hidden sm:block">Cookies & Brownies</a>
                    <a role="tab" className="tab sm:hidden flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cookie" viewBox="0 0 16 16">
                            <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
                        </svg>CnB
                    </a>
                    {/* content */}
                    <a role="tab" className="tab">Beverage</a>
                    {/* content */}
                </div>

                <div className=" flex flex-wrap xl:gap-8 gap-4 justify-center lg:justify-start p-4 md:p-10 overflow-y-scroll">
                    {
                        // menuCards()
                        menuData.map((item, idx) => {
                            return <div className="
                                card group relative 
                                w-96 md:w-full lg:w-96
                                min-w-[18rem] lg:max-w-[20rem] max-w-auto
                                bg-base-100 shadow-xl overflow-hidden 
                                text-dark  std-duration " 
                                key={idx} >
                                <img className="h-full cursor-zoom-in  group-hover:scale-105 std-duration" src={item.src} alt="" />

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
                        })
                    }

                </div>
            </div> 
            
            <div className="drawer-side border-r-2">
                <label htmlFor="product-drawer" aria-label="open sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content hidden md:block">
                {/* Sidebar content here */}

                    <h3 className="text-center font-bold text-xl mb-10 mt-20">Our Menu</h3>

                    <div className="flex flex-col gap-2">
                        <a className=" p-2 cursor-pointer">Donuts</a>
                        <a className=" p-2 cursor-pointer">Cookies & Brownies</a>
                        <a className=" p-2 cursor-pointer">Beverage</a>
                    </div>

                
                </ul>
            </div>
        </div>
    )
};

