import React from "react"

interface Props {
    className: string
}

export default function Drawer({ className } : Props) {
    return (
        <div className={` drawer ${className} `}>
            <input id="product-drawer" type="checkbox" className="drawer-toggle" />
            
            <div className="drawer-side">
                <label htmlFor="product-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}

                    <h3 className="text-center font-bold text-xl mb-10 mt-20">Our Menu</h3>

                    <div className="flex flex-col">
                        <a className="border-2 p-2">Donuts</a>
                        <a className="border-2 p-2">Cookies & Brownies</a>
                        <a className="border-2 p-2">Beverage</a>
                    </div>

                
                </ul>
            </div>
        </div>
    )
};

