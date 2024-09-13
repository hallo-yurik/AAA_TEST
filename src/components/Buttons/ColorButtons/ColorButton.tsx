import styles from "@/styles/ColorButtons.module.css";
import {useEffect, useRef} from "react";

type propsType = {
    color: string,
    isActive: boolean,
    setColorIndex: (index: number) => void,
    index: number
    onColorChange: () => void
}

const ColorButton = (props: propsType) => {

    return (
        <div className={`${styles.colorButton} ${props.isActive ? styles.active : ""}`} onClick={() => {
            props.setColorIndex(props.index)
            props.onColorChange()
        }}>
            <div className={`${styles.outline}`}/>
            <div className={`${styles.colorCircle}`} style={{backgroundColor: props.color}}/>
        </div>
    )
}

export default ColorButton;
