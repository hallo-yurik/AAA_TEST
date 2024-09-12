import ViewCamera from "@/components/ThreeComponents/ViewCamera";
import {useCallback, useEffect, useRef} from "react";
import {PerspectiveCamera, WebGLRenderer} from "three";
import {useThree} from "@react-three/fiber";

type propsType = {
    setViewImages: (value: [string, string, string]) => void
}

const ViewCameraManager = (props: propsType) => {
    const three = useThree();
    const viewCamerasSet = useRef([new PerspectiveCamera(10), new PerspectiveCamera(10), new PerspectiveCamera(10)]);

    const takeScreenshots = useCallback(() => {
        const newImages = [];

        for (let i = 0; i < 3; i++) {
            const canvas = document.createElement("canvas");
            canvas.width = 512;
            canvas.height = 512;

            const renderer = new WebGLRenderer({canvas: canvas});
            renderer.setClearColor(0xffffff, 0);
            renderer.setSize(canvas.width, canvas.height);
            renderer.render(three.scene, viewCamerasSet.current[i]);

            newImages.push(canvas.toDataURL());

            props.setViewImages(newImages);
        }
    }, [three.scene])

    useEffect(() => {
        takeScreenshots()
    }, [takeScreenshots])

    return (
        <>
            <ViewCamera position={[0, 3.061616997868383e-16, 5]}
                        quaternion={[-3.061616997868383e-17, 0, 0, 1]}
                        cameraSet={viewCamerasSet}
                        imageIndex={0}
            />
            <ViewCamera position={[-5.000000000000005, 3.061616997868386e-16, 1.473906101991389e-14]}
                        quaternion={[-2.1648901405887366e-17, -0.7071067811865465, -2.16489014058873e-17, 0.7071067811865486]}
                        cameraSet={viewCamerasSet}
                        imageIndex={1}
            />
            <ViewCamera position={[-3.927077169178167e-8, 3.0616169978683886e-16, -5.000000000000009]}
                        quaternion={[4.2663631931734054e-32, 1, 3.061616997868383e-17, -1.3934999695075554e-15]}
                        cameraSet={viewCamerasSet}
                        imageIndex={2}
                        image={""}/>
        </>
    )
}

export default ViewCameraManager;
