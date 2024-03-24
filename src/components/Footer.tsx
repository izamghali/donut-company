'use client'
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname();

    return (
        <section className={`border-t-2 ${ pathname === '/' ? 'snap-end' : '' } dark:border-darkLess dark:bg-dark dark:text-slate-100`}>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav className="mb-4">
                    <p className="footer-title">Services</p> 
                    <Link href={'/menu'} className="link link-hover py-2">Menu</Link>
                    <span className="link link-hover py-2">Marketing</span>
                    <span className="link link-hover py-2">Advertisement</span>
                </nav> 
                <nav className="mb-4">
                    <p className="footer-title">Company</p> 
                    <Link href={'/about'} className="link link-hover py-2">About us</Link>
                    <span className="link link-hover py-2">Contact</span>
                    <span className="link link-hover py-2">Career</span>
                </nav> 
                <nav className="mb-4">
                    <p className="footer-title">Legal</p> 
                    <span className="link link-hover py-2">Terms of use</span>
                    <span className="link link-hover py-2">Privacy policy</span>
                    <span className="link link-hover py-2">Cookie policy</span>
                </nav>
            </footer> 
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <svg className="fill-black w-8 dark:fill-white" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="7.8119659423828125 7.808945178985596 84.3759994506836 84.37605285644531"><g fill="current-fill"><path d="M91.992 46.211c-.05-.48-.32-.914-.734-1.164-.41-.254-.918-.3-1.375-.133-.696.266-1.496.399-2.383.399-4.309 0-7.813-3.504-7.813-7.813 0-.836.125-1.617.375-2.32a1.554 1.554 0 0 0-.648-1.852 1.558 1.558 0 0 0-1.945.242 7.815 7.815 0 0 1-5.594 2.364c-4.309 0-7.813-3.504-7.813-7.813a7.81 7.81 0 0 1 2.367-5.594 1.559 1.559 0 0 0 .243-1.949 1.57 1.57 0 0 0-1.856-.648c-.7.25-1.48.379-2.316.379-4.309 0-7.813-3.504-7.813-7.813 0-.887.133-1.687.399-2.383.172-.453.125-.96-.13-1.375a1.555 1.555 0 0 0-1.167-.734 35.768 35.768 0 0 0-3.79-.195c-23.261 0-42.187 18.926-42.187 42.188 0 23.262 18.926 42.188 42.188 42.188s42.188-18.926 42.188-42.188c0-1.274-.067-2.547-.196-3.79zM50 89.063c-21.539 0-39.062-17.523-39.062-39.062S28.461 10.939 50 10.939c.559 0 1.113.012 1.668.04-.07.491-.105.995-.105 1.522 0 5.864 4.64 10.664 10.438 10.926a10.97 10.97 0 0 0-1.063 4.7c0 6.03 4.906 10.938 10.938 10.938 1.637 0 3.242-.371 4.7-1.067.26 5.802 5.061 10.442 10.924 10.442.524 0 1.031-.035 1.52-.105.027.55.043 1.11.043 1.668 0 21.539-17.523 39.062-39.062 39.062zm14.062-39.062c0-7.754-6.309-14.062-14.062-14.062s-14.062 6.309-14.062 14.062S42.247 64.063 50 64.063s14.062-6.309 14.062-14.062zm-25 0c0-6.031 4.906-10.938 10.938-10.938s10.938 4.906 10.938 10.938S56.032 60.939 50 60.939s-10.938-4.906-10.938-10.938zm-15.625 0c0-14.645 11.914-26.562 26.562-26.562a1.562 1.562 0 1 1 0 3.125c-12.926 0-23.438 10.512-23.438 23.438a1.562 1.562 0 1 1-3.125 0zM29.523 63.2a1.56 1.56 0 0 1-2.098.7l-6.25-3.126a1.562 1.562 0 0 1-.699-2.097 1.565 1.565 0 0 1 2.098-.7l6.25 3.125a1.562 1.562 0 0 1 .699 2.098zm9.375 14.227a1.562 1.562 0 0 1-1.399 2.262 1.56 1.56 0 0 1-1.398-.864l-3.125-6.25a1.562 1.562 0 0 1 .7-2.097 1.566 1.566 0 0 1 2.097.699zM74.3 48.275l-6.25-3.125a1.562 1.562 0 0 1-.7-2.098 1.562 1.562 0 0 1 2.098-.699l6.25 3.125A1.562 1.562 0 0 1 75 48.44c-.234 0-.472-.05-.699-.164zm5.223 16.652a1.562 1.562 0 0 1-1.399 2.262 1.56 1.56 0 0 1-1.398-.864l-3.125-6.25a1.562 1.562 0 0 1 .699-2.097c.77-.387 1.71-.07 2.098.699zm-12.336 3.824c0 .863-.7 1.563-1.563 1.563h-6.25a1.562 1.562 0 1 1 0-3.125h6.25c.863 0 1.563.699 1.563 1.562zm-9.54 8.676c.387.773.075 1.71-.699 2.098l-6.25 3.125a1.53 1.53 0 0 1-.699.164 1.562 1.562 0 0 1-.7-2.961l6.25-3.125a1.565 1.565 0 0 1 2.099.699z"></path></g></svg>    
                    <p>&copy; Js Do-Nuts <br/>Serving you since 2007</p>
                </aside> 
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <span className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg></span>
                        <span className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></span>
                        <span className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/></svg></span>
                    </div>
                </nav>
            </footer>
        </section>
    )
};

