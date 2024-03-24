import { StaticImageData } from "next/image"

export interface Menu {
    title: string,
    desc: string,
    price: number,
    badges: string[],
    src: StaticImageData
}