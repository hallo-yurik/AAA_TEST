import Circle from "@/components/Background/Circle";
import styles from "@/styles/Background.module.css";

type propsType = {
    color: string,
    viewImages: [string, string, string]
}

const Background = (props: propsType) => {
    const isImage = !!props.viewImages[0];

    return (
        <div className={styles.background} style={{backgroundColor: props.color}}>
            <Circle animationDelay={"0s"} isImage={isImage}/>
            <Circle animationDelay={"-2.5s"} isImage={isImage}/>
            <Circle animationDelay={"-5s"} isImage={isImage}/>
            <Circle animationDelay={"-7.5s"} isImage={isImage}/>
        </div>
    )
}

export default Background;
