import {useGLTF, useTexture} from "@react-three/drei"
import {Mesh} from "three";
import {useEffect, useRef} from "react";

const MODEL_PATH = "/models/model_1.glb"

useGLTF.preload(MODEL_PATH)

// paintExterior(texture) {
//         const map1 = game.cache.texture3d["fuselageLevel5"];
//         const grayscale = game.cache.texture3d["mid_noise"];
//
//         const material = new MeshLambertMaterial({
//             map: game.cache.texture3d[texture],
//             side: DoubleSide,
//             onBeforeCompile: (shader) => {
//                 shader.uniforms.map1 = {value: map1};
//                 shader.uniforms.grayscale = {value: grayscale};
//                 shader.uniforms.mixVal = this.mixValue;
//
//                 shader.fragmentShader = `
//                     uniform sampler2D map1;
//                     uniform sampler2D grayscale;
//                     uniform float mixVal;
//                     ${shader.fragmentShader}
//                     `
//                     .replace(`#include <map_fragment>`, `
//                         #ifdef USE_MAP
//                             vec4 texelColor;
//                             vec4 texelColor0 = texture2D(map, vUv);
//                             vec4 texelColor1 = texture2D(map1, vUv);
//                             float grayscaleX = texture2D(grayscale, vUv).x;
//
//                             if (grayscaleX > mixVal) {
//                                 texelColor = texelColor0;
//                             } else {
//                                 texelColor = texelColor1;
//                             }
//
//                     	    texelColor = mapTexelToLinear(texelColor);
//                     	    diffuseColor *= texelColor;
//                     	#endif
//                     `);
//             }
//         });
//
//         this.exterior.traverse(object => {
//             if (object.isMesh) {
//                 if (this.properties.MainPalette.includes(object.name)) return;
//
//                 object.material = material;
//             }
//         });
//     }

const Model = () => {
    const BODY_ORM_PATH = "/textures/Body_ORM.png.jpg"
    const BITS_ORM_PATH = "/textures/Bits_ORM.png.jpg"

    const gltf = useGLTF(MODEL_PATH);
    const mesh = useRef<Mesh>(null!);

    const texture = useTexture("/textures/colors/Body_Aquamarine_D.webp");
    texture.flipY = false;
    texture.needsUpdate = true;

    const bodyOrmTexture = useTexture(BODY_ORM_PATH);
    bodyOrmTexture.flipY = false;
    bodyOrmTexture.needsUpdate = true;

    const bitsOrmTexture = useTexture(BITS_ORM_PATH);
    bitsOrmTexture.flipY = false;
    bitsOrmTexture.needsUpdate = true;

    useEffect(() => {
        // const materialName = "M_B0007_SonicThermoFacialBrush6in1_Bits"
        // const materialName = "M_B0007_SonicThermoFacialBrush6in1_Body"
        // const materialName = "M_B0007_SonicThermoFacialBrush6in1_Metal"

        // console.log(gltf.materials);

        for (const materialName in gltf.materials) {
            const material = gltf.materials[materialName];

            if (materialName.toUpperCase().includes("METAL")) {
                material.aoMap = bodyOrmTexture;
                material.roughnessMap = bodyOrmTexture;
                material.metalnessMap = bodyOrmTexture;

                material.map = texture;
            }

            if (materialName.toUpperCase().includes("BODY")) {
                material.aoMap = bodyOrmTexture;
                material.roughnessMap = bodyOrmTexture;
                material.metalnessMap = bodyOrmTexture;

                material.map = texture;
            }

            if (materialName.toUpperCase().includes("BITS")) {
                material.aoMap = bitsOrmTexture;
                material.roughnessMap = bitsOrmTexture;
                material.metalnessMap = bitsOrmTexture;
            }

            console.log(material)

            material.needsUpdate = true;
        }
    }, [gltf.materials, texture, bodyOrmTexture])

    return (
        <>
            <mesh ref={mesh}>
                <primitive object={gltf.scene} scale={[6.5, 6.5, 6.5]}/>
            </mesh>
        </>
    )
}

export default Model;
