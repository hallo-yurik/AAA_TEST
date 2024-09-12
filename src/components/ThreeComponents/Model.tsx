import {useGLTF, useTexture} from "@react-three/drei"
import {Color, Mesh} from "three";
import {useCallback, useEffect, useRef} from "react";
import {colorType} from "@/ColorsData";

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

type propsType = {
    currentColor: colorType
}

const Model = (props: propsType) => {
    const BODY_ORM_PATH = "/textures/Body_ORM.png.jpg"
    const BITS_ORM_PATH = "/textures/Bits_ORM.png.jpg"

    const gltf = useGLTF(MODEL_PATH);
    const mesh = useRef<Mesh>(null!);

    useTexture(props.currentColor.texture, (texture) => {
        texture.flipY = false;
        texture.needsUpdate = true;
        setMaterials(texture, props.currentColor.color);
    });

    const bodyOrmTexture = useTexture(BODY_ORM_PATH);
    bodyOrmTexture.flipY = false;
    bodyOrmTexture.needsUpdate = true;

    const bitsOrmTexture = useTexture(BITS_ORM_PATH);
    bitsOrmTexture.flipY = false;
    bitsOrmTexture.needsUpdate = true;

    const setMaterials = useCallback((texture, color) => {
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

                material.color.copy(new Color(color));
            }

            material.needsUpdate = true;
        }
    }, [])

    // useEffect(() => {
    //     setMaterials();
    // }, [])

    return (
        <>
            <mesh ref={mesh}>
                <primitive object={gltf.scene} scale={[6.5, 6.5, 6.5]}/>
            </mesh>
        </>
    )
}

export default Model;
