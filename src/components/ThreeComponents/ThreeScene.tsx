"use client";

import {Canvas, useFrame} from "@react-three/fiber";
import Model from "@/components/ThreeComponents/Model";
import {LegacyRef, Suspense} from "react";
import {Environment, OrbitControls} from "@react-three/drei";
import styles from "@/styles/Background.module.css";
import ViewCameraManager from "@/components/ThreeComponents/ViewCameraManager";
import {colorType} from "@/ColorsData";

type propsType = {
    orbitRef: LegacyRef<any>
    currentColor: colorType
}

// const Aaa = () => {
//     console.log("aaaa")
//     return <div>123</div>
// }

const ThreeScene = (props: propsType) => {

    return (
        // <Suspense fallback={<Aaa/>}>
        <Canvas shadows gl={{antialias: true}} dpr={[1, 1.5]} className={styles.canvas}
                camera={{fov: 10}}
        >
            <Model currentColor={props.currentColor}/>
            <ViewCameraManager/>
            <Environment
                files={"/textures/studio_small.exr"}
                background={false}
                environmentIntensity={1}
                // environmentIntensity={0}
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
        </Canvas>
        // </Suspense>
    )
}

export default ThreeScene;
