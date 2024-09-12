"use client";

import Background from "@/components/Background";
import {useRef, useState} from "react";
import ThreeScene from "@/components/ThreeComponents/ThreeScene";
import Overlay from "@/components/Buttons/Overlay";

export type colorType = {
    texture: string,
    color: string
}

// export type rotateCallbackType = (refModel: RefObject<HTMLInputElement>, angleInRad: number) => void;

const availableColors: colorType[] = [
    {
        texture: "./",
        color: "#c5c5c5"
    },
    {
        texture: "./",
        color: "#ea6e6e"
    },
]

export default function Home() {
    // State.
    const [currentColorIndex, setColorIndex] = useState(0);
    const currentColor = availableColors[currentColorIndex];
    const [viewImages, setViewImages] = useState<[string, string, string]>(["", "", ""]);

    // Refs.
    const orbitRef = useRef(null);

    return (
        <>
            <Background color={currentColor.color} viewImages={viewImages}/>
            <ThreeScene orbitRef={orbitRef} setViewImages={setViewImages}/>
            <Overlay orbitRef={orbitRef} viewImages={viewImages}/>
        </>
    );
}
