"use client";

import {LegacyRef, useRef, useState} from "react";
import ViewButtonsContainer from "@/components/Buttons/ViewButtons";
import ColorButtonsContainer from "@/components/Buttons/ColorButtons";

type propsType = {
    orbitRef: LegacyRef<any>
    currentColorIndex: number
    setColorIndex: (index: number) => void
}

export type rotateCallbackType = (angleInRad: number) => void;

const Overlay = (props: propsType) => {
    const [isPrevious, setIsPrevious] = useState(false);
    const onColorChange = () => {
        setIsPrevious(!isPrevious)
    }

    return (
        <>
            <ViewButtonsContainer isPrevious={isPrevious} currentColorIndex={props.currentColorIndex} orbitRef={props.orbitRef}/>
            <ColorButtonsContainer currentColorIndex={props.currentColorIndex}
                                   setColorIndex={props.setColorIndex}
                                   onColorChange={onColorChange}/>
        </>
    )
}

export default Overlay;
