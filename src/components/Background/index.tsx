import Circle from "@/components/Background/Circle";
import styles from "@/styles/Background.module.css";

type propsType = {
    color: string
}

const Background = (props: propsType) => {
    return (
        <div className={styles.background} style={{backgroundColor: props.color}}>
            <Circle animationDelay={"0s"}/>
            <Circle animationDelay={"-2.5s"} />
            <Circle animationDelay={"-5s"}/>
            <Circle animationDelay={"-7.5s"}/>
        </div>
    )
}

export default Background;
