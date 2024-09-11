"use client";

import styles from "@/styles/Buttons.module.css";
import ViewButton from "@/components/Buttons/ViewButton";

const Overlay = () => {

    const BASE_IMG_PATH = "/images/";

    return (
        <>
            <div className={styles.viewButtonContainer}>
                <ViewButton imagePath={BASE_IMG_PATH + "1-f.png"}/>
                <ViewButton imagePath={BASE_IMG_PATH + "1-f.png"}/>
                <ViewButton imagePath={BASE_IMG_PATH + "1-f.png"}/>
            </div>
        </>
    )
}

export default Overlay;
