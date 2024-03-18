// 'use client'
import Drawer from "@/components/Drawer"
import React from "react"

export default function Page() {

    let menuData = [
        {
            title: "Chocolate Classic",
            desc: "",
            price: 2.5,
            badges: ['Fresh', 'Donuts'],
            src: "https://images.pexels.com/photos/6940977/pexels-photo-6940977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2/"
        },
        {
            title: "Ocean Rainbow",
            desc: "",
            price: 3.1,
            badges: ['Hottest', 'Donuts'],
            src: "https://images.pexels.com/photos/17056136/pexels-photo-17056136/free-photo-of-colorful-donut-on-a-blue-counter-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
    ]

    return (
        <div className="">
            <Drawer className="drawer-open " menuData={menuData} />
        </div>
    )
};

