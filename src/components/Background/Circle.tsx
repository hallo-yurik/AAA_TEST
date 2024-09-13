import styles from "@/styles/Background.module.css";

type propsType = {
    animationDelay: string
}

const Circle = (props: propsType) => {
    return (
        <div style={{animationDelay: props.animationDelay}} className={styles.circle}/>
    );
};

export default Circle;
