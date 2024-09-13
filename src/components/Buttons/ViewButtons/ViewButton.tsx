import styles from "@/styles/ViewButtons.module.css";
import {rotateCallbackType} from "@/components/Buttons/Overlay";
import {Suspense, useEffect, useRef, useState} from "react";

type propsType = {
    imagePath: string,
    rotateCamera: rotateCallbackType,
    rotateAngle: number
    isPrevious: boolean
}

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const ViewButton = (props: propsType) => {
    const prevPath = usePrevious(props.imagePath);
    const [imagesOpacity, setImagesOpacity] = useState([0, 100]);
    const [imagesPath, setImagesPath] = useState([prevPath, props.imagePath]);

    useEffect(() => {
        if (props.isPrevious) {
            setImagesOpacity([0, 100])
            setImagesPath([prevPath, props.imagePath])
        } else {
            setImagesOpacity([100, 0])
            setImagesPath([props.imagePath, prevPath])
        }

        console.log(props.imagePath, prevPath)
    }, [props.isPrevious])

    return (
        <Suspense>
            <div className={`${styles.viewButton}`}
                 onClick={() => props.rotateCamera(props.rotateAngle)}>
                <div/>
                <img className={styles.a} src={imagesPath[0]} style={{opacity: imagesOpacity[0]}}
                            alt=""/>


                {
                    imagesPath[1]
                    && <img className={styles.b} src={imagesPath[1]} style={{opacity: imagesOpacity[1]}}
                            alt=""/>
                }

            </div>
        </Suspense>
    )
}

export default ViewButton;
