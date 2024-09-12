"use client";

import {LegacyRef} from "react";
import ViewButtonsContainer from "@/components/Buttons/ViewButtons";
import ColorButtonsContainer from "@/components/Buttons/ColorButtons";

type propsType = {
    orbitRef: LegacyRef<any>,
    viewImages: [string, string, string],
    currentColorIndex: number
    setColorIndex: (index: number) => void
}

export type rotateCallbackType = (angleInRad: number) => void;

const Overlay = (props: propsType) => {
    return (
        <>
            <ViewButtonsContainer viewImages={props.viewImages} orbitRef={props.orbitRef}/>
            <ColorButtonsContainer viewImages={props.viewImages} currentColorIndex={props.currentColorIndex} setColorIndex={props.setColorIndex}/>
        </>
    )
}

export default Overlay;
