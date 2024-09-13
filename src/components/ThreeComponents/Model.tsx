import {useGLTF, useTexture} from "@react-three/drei"
import {Color, Mesh, Texture, TextureLoader} from "three";
import {Suspense, useCallback, useEffect, useRef} from "react";
import {colorType} from "@/ColorsData";
import * as TWEEN from "@tweenjs/tween.js";
// import {Tween, Group} from "@tweenjs/tween.js";
import {usePrevious} from "@/components/Buttons/ViewButtons/ViewButton";
import {useFrame, useLoader} from "@react-three/fiber";

const MODEL_PATH = "/models/model_1.glb"

useGLTF.preload(MODEL_PATH)

type propsType = {
    currentColor: colorType
}

const BODY_ORM_PATH = "/textures/Body_ORM.png.jpg"
const BITS_ORM_PATH = "/textures/Bits_ORM.png.jpg"

const Model = (props: propsType) => {
    const mixValTweenRef = useRef({value: 0});
    const mapNextTweenRef = useRef({value: new Texture()});
    const gltf = useGLTF(MODEL_PATH);

    // Tweening.
    const tweenRef = useRef(new TWEEN.Tween(mixValTweenRef.current)
        .to({value: 1}, 1000));

    // useTexture(props.currentColor.texture, (texture) => {
    //     texture.flipY = false;
    //     texture.needsUpdate = true;
    //     setMaterials(texture, props.currentColor.color);
    // });

    // Loading common textures.
    useEffect(() => {
        const loader = new TextureLoader();

        const bodyOrmTexture = loader.load(
            BODY_ORM_PATH,
            function (texture) {
                texture.flipY = false;
                texture.needsUpdate = true;
            }
        );

        const bitsOrmTexture = loader.load(
            BITS_ORM_PATH,
            function (texture) {
                texture.flipY = false;
                texture.needsUpdate = true;
            }
        );

        for (const materialName in gltf.materials) {
            const material = gltf.materials[materialName];

            if (materialName.toUpperCase().includes("METAL")) {
                material.aoMap = bodyOrmTexture;
                material.roughnessMap = bodyOrmTexture;
                material.metalnessMap = bodyOrmTexture;

                material.map = mapNextTweenRef.current.value;
            }

            if (materialName.toUpperCase().includes("BODY")) {
                material.aoMap = bodyOrmTexture;
                material.roughnessMap = bodyOrmTexture;
                material.metalnessMap = bodyOrmTexture;

                material.map = mapNextTweenRef.current.value;
            }

            if (materialName.toUpperCase().includes("BITS")) {
                material.aoMap = bitsOrmTexture;
                material.roughnessMap = bitsOrmTexture;
                material.metalnessMap = bitsOrmTexture;

                material.emissive.copy(new Color("#000000"));
            }

            if (!materialName.toUpperCase().includes("BITS")) {
                material.onBeforeCompile = (shader) => {
                    shader.uniforms.map1 = mapNextTweenRef.current;
                    shader.uniforms.mixVal = mixValTweenRef.current;

                    shader.fragmentShader = `
                    uniform sampler2D map1;
                    uniform float mixVal;
                    ${shader.fragmentShader}
                    `
                        .replace(`#include <map_fragment>`, `
                        #ifdef USE_MAP
                            vec4 texelColor;
                            vec4 sampledDiffuseColor = texture2D(map, vMapUv);
                            vec4 texelColor1 = texture2D(map1, vMapUv);
                            texelColor = mix(sampledDiffuseColor, texelColor1, mixVal);

                            diffuseColor *= texelColor;
                        #endif
                    `);
                }
            }

            material.needsUpdate = true;
        }
    }, [])

    // Updating diffuse texture.
    useEffect(() => {
        const loader = new TextureLoader();

        loader.load(
            props.currentColor.texture,
            function (texture) {
                texture.flipY = false;
                texture.needsUpdate = true;
                setMaterials(texture, props.currentColor.color);
            }
        );
    }, [props.currentColor.texture])

    // const bodyOrmTexture = useTexture(BODY_ORM_PATH);
    // bodyOrmTexture.flipY = false;
    // bodyOrmTexture.needsUpdate = true;

    // const bitsOrmTexture = useTexture(BITS_ORM_PATH);
    // bitsOrmTexture.flipY = false;
    // bitsOrmTexture.needsUpdate = true;

    useFrame(() => {
        tweenRef.current.update();
    })

    // useEffect(() => {
    //     for (const materialName in gltf.materials) {
    //         const material = gltf.materials[materialName];
    //
    //         if (materialName.toUpperCase().includes("METAL")) {
    //             material.aoMap = bodyOrmTexture;
    //             material.roughnessMap = bodyOrmTexture;
    //             material.metalnessMap = bodyOrmTexture;
    //
    //             material.map = mapNextTweenRef.current.value;
    //         }
    //
    //         if (materialName.toUpperCase().includes("BODY")) {
    //             material.aoMap = bodyOrmTexture;
    //             material.roughnessMap = bodyOrmTexture;
    //             material.metalnessMap = bodyOrmTexture;
    //
    //             material.map = mapNextTweenRef.current.value;
    //         }
    //
    //         if (materialName.toUpperCase().includes("BITS")) {
    //             material.aoMap = bitsOrmTexture;
    //             material.roughnessMap = bitsOrmTexture;
    //             material.metalnessMap = bitsOrmTexture;
    //
    //             material.emissive.copy(new Color("#000000"));
    //         }
    //
    //         if (!materialName.toUpperCase().includes("BITS")) {
    //             material.onBeforeCompile = (shader) => {
    //                 shader.uniforms.map1 = mapNextTweenRef.current;
    //                 shader.uniforms.mixVal = mixValTweenRef.current;
    //
    //                 shader.fragmentShader = `
    //                 uniform sampler2D map1;
    //                 uniform float mixVal;
    //                 ${shader.fragmentShader}
    //                 `
    //                     .replace(`#include <map_fragment>`, `
    //                     #ifdef USE_MAP
    //                         vec4 texelColor;
    //                         vec4 sampledDiffuseColor = texture2D(map, vMapUv);
    //                         vec4 texelColor1 = texture2D(map1, vMapUv);
    //                         texelColor = mix(sampledDiffuseColor, texelColor1, mixVal);
    //
    //                         diffuseColor *= texelColor;
    //                     #endif
    //                 `);
    //             }
    //         }
    //
    //         material.needsUpdate = true;
    //     }
    // }, [])

    const setMaterials = useCallback((texture, color) => {
        mapNextTweenRef.current.value = texture;
        mixValTweenRef.current.value = 0;

        // for (const materialName in gltf.materials) {
        //     const material = gltf.materials[materialName];
        //
        //     // if (materialName.toUpperCase().includes("BITS")) {
        //     //     material.color.copy(new Color(color));
        //     // }
        // }

        tweenRef.current
            .stop()
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(({value}) => {
                for (const materialName in gltf.materials) {
                    const material = gltf.materials[materialName];

                    if (materialName.toUpperCase().includes("BITS")) {
                        material.color.lerp(new Color(color), value);
                    }

                    material.needsUpdate = true;
                }
            })
            .onComplete(() => {
                for (const materialName in gltf.materials) {
                    const material = gltf.materials[materialName];

                    if (!materialName.toUpperCase().includes("BITS")) {
                        material.map = mapNextTweenRef.current.value;
                        material.needsUpdate = true;
                    }
                }
            })
            .start()
    }, [])

    return (
        <mesh>
            <primitive object={gltf.scene} scale={[6.5, 6.5, 6.5]}/>
        </mesh>
    )
}

export default Model;
