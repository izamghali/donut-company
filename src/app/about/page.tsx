import Logo from "@/components/Logo"
import React from "react"

export default function Page() {
    return (
        // NOTE:  pt-16 is Navbar length
        <section className="pt-16">

            {/* about banner */}
            <div className="relative lg:flex lg:bg-gradient-to-r lg:from-white border-red-400">
                {/* banner img */}
                <div className="w-full lg:w-[40rem] xl:w-[50rem] relative std-duration">
                    <div className="lg:bg-gradient-to-l lg:from-white from-10%
                        absolute top-0 left-0 w-full h-full"></div>
                    <img className="h-full" src="https://images.unsplash.com/photo-1422919869950-5fdedb27cde8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
                            font-bold std-duration text-3xl sm:text-5xl lg:text-7xl 
                            max-lg:w-fit w-fit max-lg:bg-std-yellow dark:bg-std-yellow
                        ">
                        Our Story</h2>
                        <span className="std-duration max-lg:bg-light text-sm md:text-lg lg:pr-4">
                            Get to know the people behind the wheels 
                            <span className="sm:inline hidden">&nbsp;and see under the hood!</span>
                        </span>

                    </div>

                </div>

            </div>

            {/* about content */}
            <div>
                
            </div>

        </section>
    )
};

