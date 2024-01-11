import { Inconsolata, Lato } from "next/font/google";

export const inconsolata = Inconsolata({
    subsets: ["latin"],
    variable: '--font-heading'
})

export const lato = Lato({
    subsets: ["latin"],
    variable: '--font-body'
})