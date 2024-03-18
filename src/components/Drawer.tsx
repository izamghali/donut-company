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
            <div className="drawer-content flex flex-row h-fit mt-16 p-10 gap-10 flex-wrap justify-center lg:justify-start">
                {
                    // menuCards()
                    menuData.map((item, idx) => {
                        return <div className="card group relative w-96 bg-base-100 shadow-xl overflow-hidden text-light min-w-[18rem] max-w-[20rem]" key={idx} >
                            <img className="h-full  group-hover:scale-105 std-duration" src={item.src} alt="" />

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

