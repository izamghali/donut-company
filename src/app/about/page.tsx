import Logo from "@/components/Logo"
import React from "react"
import Timeline from "@/components/Timeline"
import cultureImg from '../../../public/culture.jpg'
import Image from "next/image"
import aboutImg from '../../../public/donut-store.avif'
import Overview from "@/components/Overview"

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
            text: <p>JS Do-Nuts is certified Halal Grade A by MUI with number LPPOM-00170163461903. We uphold high standards in the manufacture and presentation of products using 100% Halal ingredients.</p>
        },

    ]

    let cultureText = 
        <p className=" text-lightLess dark:text-slate-300 md:text-xl text-justify">At JS Do-Nuts, our company culture is rooted in passion, creativity, and inclusivity.
            <span className="bg-std-yellow dark:text-dark">&nbsp;We foster a collaborative environment where every team member is valued and empowered to contribute their unique ideas and talents.</span>
            <span className="hidden sm:inline">&nbsp;Our work atmosphere thrives on a shared dedication to excellence, with a focus on creativity and innovation in every aspect of our business. We prioritize open communication, teamwork, and respect, creating a supportive and welcoming workplace where diversity is celebrated.
                <span className="bg-std-emerald dark:text-dark">&nbsp;Working at JS Do-Nuts is an opportunity to be part of a dynamic team that&apos;s passionate about crafting delicious treats and spreading joy, offering a fulfilling and rewarding experience where every individual&apos;s contributions are valued and appreciated.</span>
            </span>
        </p>
    
    let test = "  "

    return (
        // NOTE:  pt-16 is Navbar length
        <section className={`pt-16 snap-y snap-mandatory`}>

            {/* banner */}
            <div className={`snap-start snap-always relative lg:flex lg:bg-gradient-to-r lg:from-white lg:h-screen dark:border-t-0 border-t-2`} >
                {/* banner img */}
                <div className="w-full lg:w-[50rem] xl:w-[70rem] relative std-duration">
                    <div className="lg:bg-gradient-to-l lg:from-white from-10%
                        absolute top-0 left-0 w-full h-full"></div>
                    <Image priority className="h-full object-cover" src={aboutImg} alt="" />
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

            {/* content */}
            <div className="snap-start snap-always flex justify-center flex-col items-center gap-8 py-12 lg:h-screen lg:py-0 px-6">
                
                {
                    texts.map((item, idx) => {
                        return <div key={idx} className="px-4 xl:px-0 py-0 lg:py-16  lg:w-full xl:w-[80rem]
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

            <Overview className="snap-start snap-always" src={cultureImg} heading="What Truly Matters" text={cultureText} />

            {/* milestone */}
            <div className="snap-center snap-always flex justify-center border-y-2 overflow-scroll lg:py-16 items-center">
                <Timeline className="" />
            </div>


        </section>
    )
};

