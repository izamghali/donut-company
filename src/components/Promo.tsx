import React from "react"

export default function Promo() {

    // let src = 'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/donut-loop-2.webm?alt=media&token=cb551284-c2b3-4a1b-ab2c-3c35cf70dde8'
    let src = 'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/donut-loop.webm?alt=media&token=86cdc3a7-0e04-4c08-b9fe-55c634c8ae77'

    return (

        <section>

            <video 
            className={`w-screen  `} 
            autoPlay={true} 
            muted 
            loop={true} 
            >

                <source className="" src={src} type={`video/webm`} />

            </video>
            
        </section>
    )
};

