"use client";

import Background from "@/components/Background";
import {useRef, useState} from "react";
import ThreeScene from "@/components/ThreeComponents/ThreeScene";
import Overlay from "@/components/Buttons/Overlay";
import {availableColors} from "@/ColorsData";

export default function Home() {
    // State.
    const [currentColorIndex, setColorIndex] = useState(0);
    const currentColor = availableColors[currentColorIndex];

    // Refs.
    const orbitRef = useRef(null);

    return (
        <>
            <Background color={currentColor.color}/>
            <ThreeScene orbitRef={orbitRef} currentColor={currentColor}/>
            <Overlay orbitRef={orbitRef} currentColorIndex={currentColorIndex} setColorIndex={setColorIndex}/>
        </>
    );
}
