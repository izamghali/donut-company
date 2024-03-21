import React from "react"
import { fetchUsers } from "@/api/teams"
import Image from "next/image";
import profile1 from '../../../public/team/profile-1.jpg'
import profile2 from '../../../public/team/profile-2.jpg'
import profile3 from '../../../public/team/profile-3.jpg'
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default async function Page() {

    let data = await fetchUsers();
    
    let users = data.results
    users[0].img = { src: profile1 }
    users[1].img = { src: profile2 }
    users[2].img = { src: profile3 }

    console.log(users);

    return (
        // pt-16 is Navbar length
        <div className=" py-16">
            <h2 className="text-center font-bold text-lg py-4">Teams</h2>

            <div className="flex max-lg:flex-col lg:gap-6 xl:gap-16 gap-4 justify-center items-center std-duration">
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
                                <Image className="absolute top-0 left-0 w-full" src={item.img.src} alt="" />
                            </div>
                            <div className="absolute top-2 left-2 bg-light group-hover:opacity-100 opacity-0 text-sm">
                                <span>{item.email}</span>
                            </div>
                        </div>

                    })
                }

            </div>

            {/* NOTE:  delete soon */}
            <div className="hidden">
                <h3>Management</h3>
                <h4>Employee 1</h4>
                <h3>Experts</h3>
            </div>
        </div>
    )
};

