'use client'
import Happening from "@/components/Happening";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import missionImg from '../../public/mission.jpg'
import { useEffect, useRef } from "react";
import { testiArr } from "./data";
import Link from "next/link";


export default function Home() {

  let overviewText = <p className=" text-lightLess dark:text-slate-300 md:text-xl">JS Do-Nuts is a startup company established in 2007 with a simple yet powerful mission: 
    <span className="bg-std-yellow dark:text-dark">to craft moments of joy through irresistible donuts. </span>
    <span className="hidden sm:inline">&nbsp;We pride ourselves on using only the finest ingredients and artisanal techniques to create our delicious treats. Our donuts are made fresh daily, handcrafted with care and creativity to ensure every bite is a delight. 
      <span className="bg-std-emerald dark:text-dark">At JS Do-Nuts, we believe in the power of donuts to bring people together and brighten their day</span>
      , and we&apos;re committed to spreading happiness one delectable treat at a time.
    </span>
  </p>
  
  const videoRef: any = useRef(null)
  const sourceRef : any = useRef(null)

  // testi
  useEffect(() => {
    const testimonials = document.querySelectorAll('.testimonials')
    const observer = new IntersectionObserver((entries) => {
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0')
          entry.target.classList.remove('translate-y-6')
        } else {
          entry.target.classList.add('opacity-0')
          entry.target.classList.add('translate-y-6')
        }
      })
      
    }, {
      threshold: 0.8
    });  

    testimonials.forEach(item=> {
      observer.observe(item)
    })
    
  }, [])

  // video
  useEffect(() => {
    const videoWrapper : any = document.getElementById('videoWrapper')
    const navbar = document.getElementById('navbar')
    const logo = document.getElementById('logo-svg')
    const videoHeading = document.getElementById('video-heading');
    const videoBtn = document.getElementById('video-btn')

    const observer = new IntersectionObserver((entries) => {
      
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoHeading?.classList.remove('opacity-0')
          videoBtn?.classList.remove('opacity-0')
          videoBtn?.classList.remove('translate-y-10')
          
          videoRef.current.play()
          navbar?.classList.add('text-light')
          logo?.classList.add('fill-light')
        } else {
          videoBtn?.classList.add('opacity-0')
          videoBtn?.classList.add('translate-y-10')
          videoHeading?.classList.add('opacity-0')
          navbar?.classList.remove('text-light')
          logo?.classList.remove('fill-light')
          
        }
      })
    
      }, {
        threshold: 0.8
      });  

    observer.observe(videoWrapper)
  }, [])

  let sources = 'https://firebasestorage.googleapis.com/v0/b/image-gallery-3010c.appspot.com/o/chocolate-3.webm?alt=media&token=0efa4cd6-58d9-4f07-9500-88651118e664'  

  return (
    <section className="" id="app">
      <Hero className="snap-start snap-always" />

      <Overview className="snap-center lg:snap-start snap-always" src={missionImg} heading="What We Thrive On" text={overviewText} />

      {/* product overview */}
      <div className="snap-start snap-always std-duration bg-black dark:bg-dark xl:h-screen flex justify-center items-center flex-col">
        <div className="relative
          rounded-xl xl:w-[80rem]
          flex gap-16 justify-center items-center
          
          ">
            <div className="absolute z-40 flex flex-col gap-6 items-center">
              <h2 id="video-heading" className="text-light text-lg font-light opacity-0 duration-1000">Rich and <span className="font-bold">flavorful</span>. 
              </h2>
              <Link id="video-btn" className="text-light flex gap-2 items-center border-[1px] p-2 rounded-md hover:bg-light hover:text-dark std-duration hover:border-light duration-1000 translate-y-10 opacity-0" href={'/menu'}>Discover The Finest
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                </svg>
              </Link>
            </div>
            
            <span id="loading-spinner" className={`loading max-lg:hidden loading-spinner loading-lg scale-[200%] bg-light absolute m-auto top-0 bottom-0 z-10`}></span>

            <video preload="auto" ref={videoRef} width="1920" height="1080" 
            className="xl:rounded-xl relative z-20" id="videoWrapper" muted loop >
                <source ref={sourceRef} src={ sources } id="vidSource" type="video/webm" />
                <track src="" kind="descriptions" />
                <track src="" kind="captions" />
                Your browser does not support the video tag.
            </video>
          
        </div>
      </div>     

      <div className="relative snap-center snap-always">
        <Happening />
        <p id="scroll-right" className="absolute -bottom-6 left-2 text-lightLess dark:text-lightLess">
          <span className="hidden lg:inline">scroll</span>
          <span className="inline lg:hidden">swipe</span>&nbsp;right
        </p>
      </div>

      {/* testimonials */}
      <div id="testimonial-section" className="snap-start h-screen flex p-16 flex-col dark:bg-dark">
        
        <h2 className="lg:hidden std-heading-h2 text-center mb-4">What They Say</h2>

        <div className=" flex flex-wrap overflow-y-scroll overflow-x-hidden gap-2
           xl:justify-between relative w-full h-full">

          <div className="z-[1] sticky top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="max-lg:hidden std-heading-h2 bg-std-yellow 
            ">&nbsp;What They Say&nbsp;</h2>
          </div>

          {
            testiArr.map((item, idx) => {
              return <div key={idx} className={`
                w-fit testimonials opacity-0
                ${ idx === 0 ? 'lg:absolute' : '' }
                chat duration-500 
                ${ idx % 2 === 0 ? 'max-lg:chat-start' : 'max-lg:chat-end' } 
                flex flex-col h-fit max-lg:w-full 

              `}>
                <div className="chat-header w-fit dark:text-slate-50">
                  {item.name}
                  <time className="text-xs opacity-50 ml-2 ">{item.time} minutes ago</time>
                </div>
                <div className="chat-bubble bg-black text-light dark:border-2  border-light">{item.review}</div>
              </div>
            })
          }
        </div>

      </div>
      
    </section>
  );
}
