"use client";

import Background from "@/components/Background";
import {useState} from "react";
import ThreeScene from "@/components/ThreeComponents/ThreeScene";
import Overlay from "@/components/Buttons/Overlay";

// const Scene = dynamic(() => import("@/components/ThreeComponents/ThreeScene"), { ssr: false })

export type colorType = {
    texture: string,
    color: string,
    buttonColor: string
}

const availableColors: colorType[] = [
    {
        texture: "./",
        color: "#c5c5c5",
        buttonColor: ""
    },
    {
        texture: "./",
        color: "#ea6e6e",
        buttonColor: ""
    },
]

export default function Home() {
    const [currentColorIndex, setColorIndex] = useState(0);
    const currentColor = availableColors[currentColorIndex];

    return (
        <>
            <Background color={currentColor.color}/>
            <ThreeScene/>
            <Overlay/>
        </>
    );
}
