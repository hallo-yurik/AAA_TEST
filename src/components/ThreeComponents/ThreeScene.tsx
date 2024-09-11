"use client";

import {Canvas} from "@react-three/fiber";
import Model from "@/components/ThreeComponents/Model";
import {Suspense, useRef} from "react";
import {Center, Environment, Html, OrbitControls, useProgress} from "@react-three/drei";
import styles from "@/styles/Background.module.css";
import {EffectComposer, Noise, Outline, SSAO, N8AO, SMAA} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";

function Loader() {
    const {progress} = useProgress()

    return <Html center>{progress.toFixed(1)} % loaded</Html>
}

const ThreeScene = () => {
    const orbitRef = useRef(null);

    return (
        <Canvas gl={{antialias: true}} dpr={[1, 1.5]} className={styles.canvas}>
            {/*<ambientLight/>*/}
            <Suspense fallback={<Loader/>}>
                <Center>
                    {/*<mesh>*/}
                    {/*    <boxGeometry />*/}
                    {/*    <meshStandardMaterial />*/}
                    {/*</mesh>*/}
                    <Model/>
                </Center>
            </Suspense>
            <Environment preset={"studio"} background={false} environmentIntensity={0.5} />
            <EffectComposer enableNormalPass={true}>
                {/*<SSAO/>*/}
                {/*<N8AO halfRes color="black" aoRadius={2} intensity={1} aoSamples={6} denoiseSamples={4} />*/}
            </EffectComposer>

            <OrbitControls ref={orbitRef} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enablePan={false} enableZoom={false}/>
        </Canvas>
    )
}

export default ThreeScene;
