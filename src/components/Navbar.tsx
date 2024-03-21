'use client'
import React from "react"
import Link from "next/link"
import { useState, useEffect } from "react";

export default function Navbar({ className } : Readonly<{ className: string }>) {
    
    const initialTheme = () => {
        if (typeof window !== 'undefined' && window.localStorage) {
            
            if (localStorage.getItem('theme')) {
                return localStorage.getItem('theme')  
            } else {
                return 'light' 
            }
        } 
    }

    const [ theme, setTheme ] = useState<null | string | undefined>(initialTheme)
    const [ prevScrollpos, setPrevScrollpos ] = useState(0)
    const [ navbar, setNavbar ] = useState<null | HTMLElement>() 

    useEffect(() => {
        setPrevScrollpos(window.scrollY)
        setNavbar(document.getElementById("navbar"))
    }, [])

    useEffect(() => {
        let currentTheme : string
        if (theme) {
            currentTheme = theme;
            localStorage.setItem('theme' , theme);
        } else {
            localStorage.setItem('theme' , 'light');
        }
        const localTheme : null | string = localStorage.getItem('theme');

        const html = document.querySelector('html')
        if (localTheme === 'dark') {
            html?.classList.add('dark')
        } else {
            html?.classList.toggle('dark')
        }
        
    }, [theme])
    
    useEffect(() => {
        
        window.onscroll = function() {
            var currentScrollPos = window.scrollY;

            const navbar : HTMLElement | null = document.getElementById("navbar")
            if (navbar === null) { return }
            
            if (prevScrollpos > currentScrollPos) {
                navbar.style.top = "0";
            } else {
                navbar.style.top = "-64px";
            }
            setPrevScrollpos(currentScrollPos);
        }

    }, [prevScrollpos])

    function handleTheme(event: any) {
        if (event.target.checked) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <nav id="navbar" className={`navbar dark:text-light duration-500 z-50 bg-transparent dark:bg-dark std-padding flex justify-between text-dark ${className} `}>

            {/* brand */}
            <div className="">
                <Link aria-label="Navigating to Home Page" href={`/`} className="btn btn-ghost text-xl p-0">
                    <svg className="dark:fill-light fill-dark w-8" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="7.8119659423828125 7.808945178985596 84.3759994506836 84.37605285644531"><g fill="current-fill"><path d="M91.992 46.211c-.05-.48-.32-.914-.734-1.164-.41-.254-.918-.3-1.375-.133-.696.266-1.496.399-2.383.399-4.309 0-7.813-3.504-7.813-7.813 0-.836.125-1.617.375-2.32a1.554 1.554 0 0 0-.648-1.852 1.558 1.558 0 0 0-1.945.242 7.815 7.815 0 0 1-5.594 2.364c-4.309 0-7.813-3.504-7.813-7.813a7.81 7.81 0 0 1 2.367-5.594 1.559 1.559 0 0 0 .243-1.949 1.57 1.57 0 0 0-1.856-.648c-.7.25-1.48.379-2.316.379-4.309 0-7.813-3.504-7.813-7.813 0-.887.133-1.687.399-2.383.172-.453.125-.96-.13-1.375a1.555 1.555 0 0 0-1.167-.734 35.768 35.768 0 0 0-3.79-.195c-23.261 0-42.187 18.926-42.187 42.188 0 23.262 18.926 42.188 42.188 42.188s42.188-18.926 42.188-42.188c0-1.274-.067-2.547-.196-3.79zM50 89.063c-21.539 0-39.062-17.523-39.062-39.062S28.461 10.939 50 10.939c.559 0 1.113.012 1.668.04-.07.491-.105.995-.105 1.522 0 5.864 4.64 10.664 10.438 10.926a10.97 10.97 0 0 0-1.063 4.7c0 6.03 4.906 10.938 10.938 10.938 1.637 0 3.242-.371 4.7-1.067.26 5.802 5.061 10.442 10.924 10.442.524 0 1.031-.035 1.52-.105.027.55.043 1.11.043 1.668 0 21.539-17.523 39.062-39.062 39.062zm14.062-39.062c0-7.754-6.309-14.062-14.062-14.062s-14.062 6.309-14.062 14.062S42.247 64.063 50 64.063s14.062-6.309 14.062-14.062zm-25 0c0-6.031 4.906-10.938 10.938-10.938s10.938 4.906 10.938 10.938S56.032 60.939 50 60.939s-10.938-4.906-10.938-10.938zm-15.625 0c0-14.645 11.914-26.562 26.562-26.562a1.562 1.562 0 1 1 0 3.125c-12.926 0-23.438 10.512-23.438 23.438a1.562 1.562 0 1 1-3.125 0zM29.523 63.2a1.56 1.56 0 0 1-2.098.7l-6.25-3.126a1.562 1.562 0 0 1-.699-2.097 1.565 1.565 0 0 1 2.098-.7l6.25 3.125a1.562 1.562 0 0 1 .699 2.098zm9.375 14.227a1.562 1.562 0 0 1-1.399 2.262 1.56 1.56 0 0 1-1.398-.864l-3.125-6.25a1.562 1.562 0 0 1 .7-2.097 1.566 1.566 0 0 1 2.097.699zM74.3 48.275l-6.25-3.125a1.562 1.562 0 0 1-.7-2.098 1.562 1.562 0 0 1 2.098-.699l6.25 3.125A1.562 1.562 0 0 1 75 48.44c-.234 0-.472-.05-.699-.164zm5.223 16.652a1.562 1.562 0 0 1-1.399 2.262 1.56 1.56 0 0 1-1.398-.864l-3.125-6.25a1.562 1.562 0 0 1 .699-2.097c.77-.387 1.71-.07 2.098.699zm-12.336 3.824c0 .863-.7 1.563-1.563 1.563h-6.25a1.562 1.562 0 1 1 0-3.125h6.25c.863 0 1.563.699 1.563 1.562zm-9.54 8.676c.387.773.075 1.71-.699 2.098l-6.25 3.125a1.53 1.53 0 0 1-.699.164 1.562 1.562 0 0 1-.7-2.961l6.25-3.125a1.565 1.565 0 0 1 2.099.699z"></path></g></svg>    
                </Link>
            </div>

            <div className="flex-none">
                <div className="menu menu-horizontal px-1">
                    <div className="md:flex hidden xl:gap-24 lg:gap-16 gap-10 std-duration">
                        <Link aria-label="Navigating to Menu Page" href={`/menu`}>Menu</Link>
                        <Link aria-label="Navigating to About Page" href={`/about`}>About</Link>
                        <Link aria-label="Navigating to Team Page" href={`/team`}>Team</Link>
                        <Link aria-label="Navigating to Career Page" href={`/career`}>Career</Link>
                    </div>

                    <div className="dropdown dropdown-end md:hidden flex ">
                        <div tabIndex={0} role="button" className="select-none" aria-labelledby="burger-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </div>
                        <div tabIndex={0} className="mt-10  dropdown-content z-50 menu p-2 shadow rounded-box w-52 text-black bg-slate-50 dark:bg-dark dark:text-light dark:border-2">
                            <Link className="p-2" aria-label="Navigating to Menu Page" href={`/menu`}>Menu</Link>
                            <Link className="p-2" aria-label="Navigating to About Page" href={`/about`}>About</Link>
                            <Link className="p-2" aria-label="Navigating to Team Page" href={`/team`}>Team</Link>
                            <Link className="p-2" aria-label="Navigating to Career Page" href={`/career`}>Career</Link>
                        </div>
                    </div>

                </div>
            </div>
            <label className="swap swap-rotate md:flex hidden relative">
  
                {/* this hidden checkbox controls the state */}
                <label htmlFor="theme"></label>
                <input
                    onChange={handleTheme}
                    checked={theme === 'light' ? false : true}
                    type="checkbox" 
                    className="theme-controller" 
                    id="theme"
                    name="theme"
                />
                
                {/* sun icon */}
                <svg className="swap-off fill-current w-7 h-7 absolute right-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                
                {/* moon icon */}
                <svg className="swap-on fill-current w-7 h-7 absolute right-0 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                
            </label>
        </nav>
    )
};

