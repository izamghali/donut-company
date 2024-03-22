import React from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Template({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative">
            <Navbar className="fixed z-10"  />
            { children }
            <Footer />
        </div>
    )
};

