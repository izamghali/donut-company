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
            title: "Sprinkles Attack",
            desc: "",
            price: 3.1,
            badges: ['Hottest', 'Donuts'],
            src: "https://images.pexels.com/photos/6020737/pexels-photo-6020737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        
        {
            title: "Ocean Rainbow",
            desc: "",
            price: 3.1,
            badges: ['Hottest', 'Donuts'],
            src: "https://images.pexels.com/photos/17056136/pexels-photo-17056136/free-photo-of-colorful-donut-on-a-blue-counter-top.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            title: "Pure Vanilla",
            desc: "",
            price: 2.7,
            badges: ['Hottest', 'Donuts'],
            src: "https://images.pexels.com/photos/7034527/pexels-photo-7034527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        
        {
            title: "Honey Dew",
            desc: "",
            price: 2.7,
            badges: ['Hottest', 'Donuts'],
            src: "https://images.unsplash.com/photo-1609873539821-3b46e00a0313?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },

        {
            title: "Strawberry Cereal",
            desc: "",
            price: 2.5,
            badges: ['Fresh', 'Donuts'],
            src: "https://images.pexels.com/photos/4774231/pexels-photo-4774231.jpeg"
        },
        
        
    ]

    return (
        <div className="">
            <Drawer className="drawer-open " menuData={menuData} />
        </div>
    )
};

