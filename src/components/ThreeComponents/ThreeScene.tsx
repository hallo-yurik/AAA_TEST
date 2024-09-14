"use client";

import {Canvas} from "@react-three/fiber";
import Model from "@/components/ThreeComponents/Model";
import {RefObject} from "react";
import {Environment} from "@react-three/drei";
import styles from "@/styles/Background.module.css";
import ViewCameraManager from "@/components/ThreeComponents/ViewCameraManager";
import {colorType} from "@/ColorsData";
import OrbitManager from "@/components/ThreeComponents/OrbitManager";
import {prefix} from "@/prefix";

type propsType = {
    orbitRef: RefObject<any>
    currentColor: colorType
    movedByButton: boolean
    setMovedByButton: (movedByButton: boolean) => void
}

const ThreeScene = (props: propsType) => {
    return (
        <Canvas shadows gl={{antialias: true}} dpr={[1, 1.5]} className={styles.canvas}
                camera={{fov: 10}}
        >
            <Model currentColor={props.currentColor}/>
            <ViewCameraManager currentColor={props.currentColor}/>
            <Environment
                files={`${prefix}/textures/studio_small.exr`}
                background={false}
                environmentIntensity={1}
                resolution={16}
                blur={1}
                environmentRotation={[0, Math.PI, 0]}
            />
            <OrbitManager orbitRef={props.orbitRef} movedByButton={props.movedByButton}
                          setMovedByButton={props.setMovedByButton}/>
        </Canvas>
    );
};

export default ThreeScene;
