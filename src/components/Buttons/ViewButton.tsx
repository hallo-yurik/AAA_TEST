import styles from "@/styles/Buttons.module.css";
import {rotateCallbackType} from "@/components/Buttons/Overlay";
import {Suspense} from "react";

type propsType = {
    imagePath: string,
    rotateCamera: rotateCallbackType,
    rotateAngle: number
}

const ViewButton = (props: propsType) => {
    return (
        <Suspense>
            <div className={`${styles.viewButton}`} style={{opacity: props.imagePath ? 100 : 0}} onClick={() => props.rotateCamera(props.rotateAngle)}>
                <div/>
                <img src={props.imagePath} alt=""/>
            </div>
        </Suspense>
    )
}

export default ViewButton;
