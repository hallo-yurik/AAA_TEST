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
    const [movedByButton, setMovedByButton] = useState(false);

    // Refs.
    const orbitRef = useRef(null);
    // const movedByButtonRef = useRef(false);

    return (
        <>
            <Background color={currentColor.color}/>
            <ThreeScene orbitRef={orbitRef} currentColor={currentColor} movedByButton={movedByButton} setMovedByButton={setMovedByButton}/>
            <Overlay orbitRef={orbitRef} currentColorIndex={currentColorIndex} setColorIndex={setColorIndex}
                     setMovedByButton={setMovedByButton}/>
        </>
    );
}
