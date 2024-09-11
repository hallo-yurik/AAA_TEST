import {OrbitControls, useGLTF, useTexture} from "@react-three/drei"
import {Mesh} from "three";
import {useEffect, useRef} from "react";
import {useFrame} from "@react-three/fiber";

const MODEL_PATH = "/models/model.glb"

useGLTF.preload(MODEL_PATH)

const Model = () => {
    const gltf = useGLTF(MODEL_PATH);
    const mesh = useRef<Mesh>(null!);

    const texture = useTexture("/textures/Body_White_D.png");
    texture.flipY = false;
    texture.needsUpdate = true;


    useEffect(() => {
        // const materialName = "M_B0007_SonicThermoFacialBrush6in1_Bits"
        // const materialName = "M_B0007_SonicThermoFacialBrush6in1_Body"
        // const materialName = "M_B0007_SonicThermoFacialBrush6in1_Metal"

        console.log(gltf.materials);

        for (const materialName in gltf.materials) {
            const material = gltf.materials[materialName];

            if (material && texture) {
                material.map = texture;
                material.needsUpdate = true;
            }

            if (materialName.toUpperCase().includes("METAL")) {
                material.metalness = 0.9;
            }
        }
    }, [gltf.materials, texture])

    return (
        <>
            <mesh ref={mesh}>
                <primitive object={gltf.scene} scale={[45, 45, 45]}/>
            </mesh>
        </>
    )
}

export default Model;
