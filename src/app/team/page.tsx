import React from "react"
import { fetchUsers } from "@/api/teams"
import Image from "next/image";
import profile1 from '../../../public/team/profile-1.jpg'
import profile2 from '../../../public/team/profile-2.jpg'
import profile3 from '../../../public/team/profile-3.jpg'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import NavigateBtn from "@/components/NavigateBtn";
import careerImg from '../../../public/career.jpg'

export const metadata = {
    title: 'JS Do-Nuts | Team',
    description: "Sweetest Donuts in Town",
}

export default async function Page() {

    let data = await fetchUsers();
    
    let users = data.results
    users[0].img = { src: profile1 }
    users[1].img = { src: profile2 }
    users[2].img = { src: profile3 }

    return (
        // pt-16 is Navbar length
        <section className="py-16 dark:bg-dark">
            
            <div className=" dark:bg-dark h-screen">
                {/* banner */}
                <div className=" p-16 gap-6 flex flex-col-reverse lg:flex-row items-center justify-between">

                    {/* banner - content */}
                    <div className="flex flex-col gap-10 lg:gap-20 max-lg:text-center items-center lg:items-start">
                        <div className="flex flex-col gap-4">
                            <h2 className="
                                std-heading-h2 dark:text-light
                            ">Ready to make an impact?</h2>
                            <p className="text-md lg:text-xl font-light dark:text-darkLess text-lightLess">Be a part of Indonesia&apos;s leading Donut Startup!</p>
                        </div>
                        <NavigateBtn className="w-fit dark:text-light" navigateTo="/about" buttonLabel="Join Us" />
                    </div>

                    {/* banner - img */}
                    <div className="w-96 rounded-full cursor-pointer
                        border-[1rem] border-std-emerald p-4
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
            </div>

            <h2 className="text-center font-bold text-lg py-4 dark:text-light border-t-2 dark:border-darkLess">Teams</h2>

            <div className="flex max-lg:flex-col lg:gap-6 xl:gap-16 gap-4 justify-center items-center std-duration dark:bg-dark">
                {
                    users.map((item: { name: { first: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; last: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }; img: { src: string | StaticImport; }; email: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }, idx: number) => {
                        
                        return <div 
                            className="card group relative overflow-hidden bg-base-100 h-72 w-72 shadow-xl"
                            key={idx}
                            >
                            <div className="flex flex-wrap items-center gap-2 group-hover:opacity-100 opacity-0 absolute bottom-4 left-4 z-10 std-duration">
                                <h2 className="card-title bg-light w-fit">{item.name.first} {item.name.last}</h2>
                                <div className="badge text-light badge-outline ">@ Expert</div>
                            </div>
                            <div>
                                <Image priority className="absolute top-0 left-0 w-full" src={item.img.src} alt="" />
                            </div>
                            <div className="absolute top-2 left-2 bg-light group-hover:opacity-100 opacity-0 text-sm">
                                <span>{item.email}</span>
                            </div>
                        </div>

                    })
                }

            </div>

        </section>
    )
};

