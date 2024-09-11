import styles from "@/styles/Buttons.module.css";

type propsType = {
    imagePath: string,
    // callback(): void
}

const ViewButton = (props: propsType) => {
    return (
        <div className={`${styles.viewButton}`}>
            <img src={props.imagePath} alt=""/>
        </div>
    )
}

export default ViewButton;
