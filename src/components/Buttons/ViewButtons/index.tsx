import {rotateCallbackType} from "@/components/Buttons/Overlay";
import styles from "@/styles/ViewButtons.module.css";
import ViewButton from "@/components/Buttons/ViewButtons/ViewButton";
import {RefObject} from "react";

type propsType = {
    orbitRef: RefObject<any> | null
    currentColorIndex: number
    isPrevious: boolean
    setMovedByButton: (movedByButton: boolean) => void
}

const BASE_IMG_URL = "/images";

const ViewButtonsContainer = (props: propsType) => {
    const rotateCallback: rotateCallbackType = (angleInRad) => {
        if (props.orbitRef && props.orbitRef.current) {
            props.orbitRef.current.setAzimuthalAngle(angleInRad);
            props.setMovedByButton(true);
        }
    };

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
    );
};

export default ViewButtonsContainer;
