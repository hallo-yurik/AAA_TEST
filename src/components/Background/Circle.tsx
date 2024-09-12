import styles from "@/styles/Background.module.css";
import {CSSProperties} from "react";

type propsType = {
    animationDelay: string,
    isImage: boolean
}

const Circle = (props: propsType) => {
    return (
        <div style={{animationDelay: props.animationDelay, opacity: props.isImage ? 100 : "0% !important"}} className={styles.circle}/>
    )
}

export default Circle;
