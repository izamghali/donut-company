import React from "react"
import { fetchUsers } from "@/api/teams"

export default async function Page() {

    let data = await fetchUsers();
    
    let users = data.results
    users[0].img = { src: 'https://images.pexels.com/photos/16764124/pexels-photo-16764124/free-photo-of-portrait-of-man-wearing-eyeglasses-and-checked-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    users[1].img = { src: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
    users[2].img = { src: 'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }

    console.log(users);

    return (
        // pt-16 is Navbar length
        <div className=" py-16">
            <h2 className="text-center font-bold text-lg py-4">Teams</h2>

            <div className="flex max-lg:flex-col lg:gap-6 xl:gap-16 gap-4 justify-center items-center std-duration">
                {
                    users.map((item, idx: number) => {
                        
                        return <div 
                            className="card group relative overflow-hidden bg-base-100 h-72 w-72 shadow-xl"
                            >
                            <div className="flex flex-wrap items-center gap-2 group-hover:opacity-100 opacity-0 absolute bottom-4 left-4 z-10 std-duration">
                                <h2 className="card-title bg-light w-fit">{item.name.first} {item.name.last}</h2>
                                <div className="badge text-light badge-outline ">@ Expert</div>
                            </div>
                            <div>
                                <img className="absolute top-0 left-0 w-full" src={item.img.src} alt="" />
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

