"use client";

import {Canvas} from "@react-three/fiber";
import Model from "@/components/ThreeComponents/Model";
import {Suspense, useRef} from "react";
import {Environment, Html, OrbitControls, useProgress} from "@react-three/drei";
import styles from "@/styles/Background.module.css";

// import {BlendFunction} from "postprocessing";

function Loader() {
    const {progress} = useProgress()

    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

const ThreeScene = () => {
    const orbitRef = useRef(null);

    return (
        <Canvas shadows gl={{antialias: true}} dpr={[1, 1.5]} className={styles.canvas}
                camera={{fov: 10}}
        >
            {/*<OrthographicCamera makeDefault zoom={800} />*/}
            {/*<ambientLight intensity={1}/>*/}
            <Suspense>
                <Model/>
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
                ref={orbitRef}
                makeDefault
                minPolarAngle={Math.PI / 2}
                maxPolarAngle={Math.PI / 2}
                enablePan={false}
                enableZoom={false}
            />
        </Canvas>
    )
}

export default ThreeScene;
