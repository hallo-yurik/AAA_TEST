"use client";

import {Canvas} from "@react-three/fiber";
import Model from "@/components/ThreeComponents/Model";
import {LegacyRef, Suspense} from "react";
import {Environment, OrbitControls} from "@react-three/drei";
import styles from "@/styles/Background.module.css";
import ViewCameraManager from "@/components/ThreeComponents/ViewCameraManager";
import {colorType} from "@/ColorsData";
// import TWEEN from '@tweenjs/tween.js'

// function Tween() {
//     useFrame(() => {
//         TWEEN.update();
//     })
// }

type propsType = {
    orbitRef: LegacyRef<any>
    setViewImages: (value: [string, string, string]) => void
    currentColor: colorType
}

const ThreeScene = (props: propsType) => {

    return (
        <Canvas shadows gl={{antialias: true}} dpr={[1, 1.5]} className={styles.canvas}
                camera={{fov: 10}}
        >
            <Suspense>
                <Model currentColor={props.currentColor}/>
                <ViewCameraManager setViewImages={props.setViewImages} currentColor={props.currentColor}/>
            </Suspense>
            <Environment
                files={"/textures/studio_small.exr"}
                background={false}
                environmentIntensity={1}
                resolution={16}
                blur={1}
                environmentRotation={[0, Math.PI, 0]}
            />
            <OrbitControls
                ref={props.orbitRef}
                makeDefault
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enablePan={false}
                enableZoom={false}
            />
            {/*<Tween/>*/}
        </Canvas>
    )
}

export default ThreeScene;
