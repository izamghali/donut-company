import Logo from "@/components/Logo"
import { usePathname } from "next/navigation"
import React from "react"
import Timeline from "@/components/Timeline"
import Image from "next/image"
import aboutImg from '../../../public/donut-store.avif'

export const metadata = {
    title: 'JS Do-Nuts | About',
    description: "Sweetest Donuts in Town",
}

export default function Page() {


    let texts = [
        {
            title: 'Story',
            heading: 'Nitty Gritty',
            text: <p>JS Do-Nuts stands for more than just delicious treats; it&apos;s about crafting moments of joy. We believe in the power of simple pleasures to bring people together and brighten their day. Our mission is to create irresistible donuts that ignite smiles and foster connections, making every bite a moment to savor. At JS Do-Nuts, we&apos;re not just selling donuts &mdash; we&apos;re spreading happiness, one delectable treat at a time.</p>
        },
        {
            title: 'Products',
            heading: "Halal Certified",
            text: <p>JS Do-Nuts is certified Halal Grade A by MUI with number LPPOM-00160233461223. We uphold high standards in the manufacture and presentation of products using 100% Halal ingredients.</p>
        },

    ]

    return (
        // NOTE:  pt-16 is Navbar length
        <section className={`pt-16 `}>

            {/* about banner */}
            <div className={`relative lg:flex lg:bg-gradient-to-r lg:from-white lg:h-screen dark:border-t-0 border-t-2`} >
                {/* banner img */}
                <div className="w-full lg:w-[50rem] xl:w-[70rem] relative std-duration">
                    <div className="lg:bg-gradient-to-l lg:from-white from-10%
                        absolute top-0 left-0 w-full h-full"></div>
                    <Image className="h-full object-cover" src={aboutImg} alt="" />
                </div>

                {/* banner body */}
                {/* NOTE:  top 16 is Navbar length */}
                <div className="
                    absolute pr-2 lg:pr-0 bottom-4 lg:bottom-10 left-4 lg:left-10 
                    lg:static flex flex-col justify-center lg:translate-x-0 text-dark
                ">
                    <div className="lg:-translate-y-12 flex flex-col gap-4 lg:gap-8">
                        <span className="text-xl items-center font-light
                            lg:flex hidden 
                        ">&mdash; About&nbsp;
                            <Logo 
                                classNameH1="font-semibold" 
                                classNameSVG="w-6" 
                            />
                        </span>
                        <h2 className="
                            std-heading-h2
                            max-lg:w-fit w-fit max-lg:bg-std-yellow dark:bg-std-yellow
                        ">
                        Our Story</h2>
                        <span className="std-duration max-lg:bg-light text-sm md:text-lg lg:pr-4 text-slate-700">
                            Get to know the people behind the wheels 
                            <span className="sm:inline hidden">&nbsp;and see under the hood!</span>
                        </span>

                    </div>

                </div>

            </div>

            {/* about content */}
            <div className="flex justify-center flex-col items-center gap-8 py-12 lg:h-screen lg:py-0">
                
                {
                    texts.map((item, idx) => {
                        return <div key={idx} className="px-4 md:px-8 xl:px-0 py-0 lg:py-16
                            flex max-lg:flex-col lg:gap-4 gap-8 justify-between std-w std-duration
                        ">
                            <div className="flex flex-col lg:gap-4">
                                <p className="text-xl font-light">&mdash; Our {item.title}</p>
                                <h3 className="font-bold text-3xl lg:text-7xl" >{item.heading}</h3>
                            </div>
                            <span className=" lg:max-w-[30rem] std-text-less">{item.text}</span>
                        </div>
                    })
                }

            </div>

            {/* milestone */}
            {/* <div className="border-2 py-12">
                <Timeline className="" />
            </div> */}

        </section>
    )
};

