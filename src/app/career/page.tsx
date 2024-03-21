import React from "react"
import Image from "next/image";
import careerImg from '../../../public/career.jpg'

export default function Page() {

    return (
        <section className="pt-16">


            {/* banner */}
            <div className=" p-16 gap-6 flex flex-col-reverse lg:flex-row items-center justify-between">

                {/* banner - content */}
                <div className="flex flex-col gap-4 max-lg:text-center">
                    <h2 className="
                        std-heading-h2
                    ">Ready to make an impact?</h2>
                    <p className="text-md lg:text-xl font-light">Join us & be a part of Indonesia’s leading Coffee Startup!</p>
                </div>

                {/* banner - img */}
                <div className="w-96 rounded-full cursor-pointer
                    border-[1rem] border-emerald-400 p-4
                    group hover:p-0 hover:border-0
                    std-duration
                ">
                    <Image
                        className="rounded-[12rem] 
                            lg:border-[1rem] border-std-yellow lg:p-4
                            group-hover:p-0 group-hover:border-0
                            std-duration
                        " 
                        src={careerImg} 
                        alt="Image of a baker girl" 
                        priority
                    />
                </div>

            </div>

            
        </section>
    )
};

