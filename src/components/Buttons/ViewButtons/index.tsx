import {rotateCallbackType} from "@/components/Buttons/Overlay";
import styles from "@/styles/ViewButtons.module.css";
import ViewButton from "@/components/Buttons/ViewButtons/ViewButton";
import {LegacyRef} from "react";

type propsType = {
    orbitRef: LegacyRef<any>,
    viewImages: [string, string, string]
}

const ViewButtonsContainer = (props: propsType) => {

    const rotateCallback: rotateCallbackType = (angleInRad) => {
        if (props.orbitRef.current) props.orbitRef.current.setAzimuthalAngle(angleInRad);
    }

    return (
        <div className={styles.viewButtonContainer}>
            <ViewButton imagePath={props.viewImages[0]}
                        rotateCamera={rotateCallback}
                        rotateAngle={0}/>
            <ViewButton imagePath={props.viewImages[1]}
                        rotateCamera={rotateCallback}
                        rotateAngle={-Math.PI / 2}/>
            <ViewButton imagePath={props.viewImages[2]}
                        rotateCamera={rotateCallback}
                        rotateAngle={-Math.PI}/>
        </div>
    )
}

export default ViewButtonsContainer;
