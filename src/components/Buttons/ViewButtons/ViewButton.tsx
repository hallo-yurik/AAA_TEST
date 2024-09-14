import styles from "@/styles/ViewButtons.module.css";
import {rotateCallbackType} from "@/components/Buttons/Overlay";
import {useEffect, useRef, useState} from "react";

type propsType = {
    imagePath: string,
    rotateCamera: rotateCallbackType,
    rotateAngle: number
    isPrevious: boolean
}

export const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const ViewButton = (props: propsType) => {
    const prevPath = usePrevious(props.imagePath);
    const [imagesOpacity, setImagesOpacity] = useState([0, 100]);
    const [imagesPath, setImagesPath] = useState([prevPath, props.imagePath]);

    useEffect(() => {
        if (props.isPrevious) {
            setImagesOpacity([0, 100]);
            setImagesPath([prevPath, props.imagePath]);
        } else {
            setImagesOpacity([100, 0]);
            setImagesPath([props.imagePath, prevPath]);
        }
    }, [props.isPrevious]);

    return (
        <div className={`${styles.viewButton}`}
             onClick={() => props.rotateCamera(props.rotateAngle)}>
            <div/>
            <img src={imagesPath[0]} style={{opacity: imagesOpacity[0]}}
                 alt=""/>
            {
                imagesPath[1]
                && <img src={imagesPath[1]} style={{opacity: imagesOpacity[1]}}
                        alt=""/>
            }
        </div>
    );
};

export default ViewButton;
