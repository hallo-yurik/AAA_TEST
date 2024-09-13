import {rotateCallbackType} from "@/components/Buttons/Overlay";
import styles from "@/styles/ViewButtons.module.css";
import ViewButton from "@/components/Buttons/ViewButtons/ViewButton";
import {LegacyRef} from "react";

type propsType = {
    orbitRef: LegacyRef<any>
    currentColorIndex: number
    isPrevious: boolean
}

const BASE_IMG_URL = "/images"

const ViewButtonsContainer = (props: propsType) => {
    const rotateCallback: rotateCallbackType = (angleInRad) => {
        if (props.orbitRef.current) {
            props.orbitRef.current.setAzimuthalAngle(angleInRad);
            props.orbitRef.current.movedByButton = true;
        }
    }

    return (
        <div className={styles.viewButtonContainer}>
            <ViewButton imagePath={`${BASE_IMG_URL}/${props.currentColorIndex}/0.png`}
                        rotateCamera={rotateCallback}
                        rotateAngle={0}
                        isPrevious={props.isPrevious}
            />
            <ViewButton imagePath={`${BASE_IMG_URL}/${props.currentColorIndex}/1.png`}
                        rotateCamera={rotateCallback}
                        rotateAngle={-Math.PI / 2}
                        isPrevious={props.isPrevious}
            />
            <ViewButton imagePath={`${BASE_IMG_URL}/${props.currentColorIndex}/2.png`}
                        rotateCamera={rotateCallback}
                        rotateAngle={-Math.PI}
                        isPrevious={props.isPrevious}
            />
        </div>
    )
}

export default ViewButtonsContainer;
