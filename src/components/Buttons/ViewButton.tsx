import styles from "@/styles/Buttons.module.css";
import {rotateCallbackType} from "@/components/Buttons/Overlay";

type propsType = {
    imagePath: string,
    rotateCamera: rotateCallbackType,
    rotateAngle: number
}

const ViewButton = (props: propsType) => {
    return (
        <div className={`${styles.viewButton}`} onClick={() => props.rotateCamera(props.rotateAngle)}>
            <img src={props.imagePath} alt=""/>
        </div>
    )
}

export default ViewButton;
