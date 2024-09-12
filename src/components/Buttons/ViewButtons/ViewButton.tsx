import styles from "@/styles/ViewButtons.module.css";
import {rotateCallbackType} from "@/components/Buttons/Overlay";
import {Suspense, useEffect, useState} from "react";

type propsType = {
    imagePath: string,
    rotateCamera: rotateCallbackType,
    rotateAngle: number
}

const ViewButton = (props: propsType) => {
    const [isFirstImage, setIsFirstImage] = useState(false);
    const [prevImagePath, setPrevImagePath] = useState("");

    // useEffect(() => {
    //     setIsFirstImage(!isFirstImage);
    //     setPrevImagePath(props.imagePath);
    // }, [props.imagePath])

    return (
        <Suspense>
            <div className={`${styles.viewButton}`} style={{opacity: props.imagePath ? 100 : 0}}
                 onClick={() => props.rotateCamera(props.rotateAngle)}>
                <div/>
                {/*<img src={prevImagePath} style={{opacity: isFirstImage ? 100 : 0}} alt=""/>*/}
                {/*<img src={props.imagePath} style={{opacity: isFirstImage ? 0 : 100}} alt=""/>*/}
                <img src={props.imagePath} style={{opacity: 100}} alt=""/>
            </div>
        </Suspense>
    )
}

export default ViewButton;
