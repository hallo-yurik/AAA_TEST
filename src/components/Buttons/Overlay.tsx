"use client";

import styles from "@/styles/Buttons.module.css";
import ViewButton from "@/components/Buttons/ViewButton";
import {LegacyRef} from "react";

const BASE_IMG_PATH = "/images/";

type propsType = {
    readonly orbitRef: LegacyRef<any>,
    viewImages: [string, string, string]
}

export type rotateCallbackType = (angleInRad: number) => void;

const Overlay = (props: propsType) => {

    const rotateCallback: rotateCallbackType = (angleInRad) => {
        if (props.orbitRef.current) props.orbitRef.current.setAzimuthalAngle(angleInRad);
    }

    return (
        <>
            <div className={styles.viewButtonContainer}>
                <ViewButton imagePath={props.viewImages[0]} rotateCamera={rotateCallback} rotateAngle={0}/>
                <ViewButton imagePath={props.viewImages[1]} rotateCamera={rotateCallback}
                            rotateAngle={-Math.PI / 2}/>
                <ViewButton imagePath={props.viewImages[2]} rotateCamera={rotateCallback} rotateAngle={-Math.PI}/>
            </div>
        </>
    )
}

export default Overlay;
