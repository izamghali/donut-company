'use client'
import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {

    const pathname = usePathname();

    return (
        <div className="relative">
            <div className={`bg-white h-[10px] snap-none ${ pathname === '/' ? '' : 'hidden' } `}></div>
            <Navbar className="fixed z-10"  />
            { children }
            <Footer />
        </div>
    )
};

