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
    const [viewImages, setViewImages] = useState<[string, string, string]>(["", "", ""]);

    // Refs.
    const orbitRef = useRef(null);

    return (
        <>
            <Background color={currentColor.color} viewImages={viewImages}/>
            <ThreeScene orbitRef={orbitRef} setViewImages={setViewImages} currentColor={currentColor}/>
            <Overlay orbitRef={orbitRef} viewImages={viewImages} currentColorIndex={currentColorIndex} setColorIndex={setColorIndex}/>
        </>
    );
}
