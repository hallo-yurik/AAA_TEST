import styles from "@/styles/ColorButtons.module.css";
import {availableColors} from "@/ColorsData";
import ColorButton from "@/components/Buttons/ColorButtons/ColorButton";

type propsType = {
    currentColorIndex: number,
    setColorIndex: (index: number) => void,
    viewImages: [string, string, string],
}

const ColorButtonsContainer = (props: propsType) => {
    const isImage = !!props.viewImages[0];

    return (
        <div className={`${styles.colorButtonContainer}`} style={{ opacity: isImage ? 100 : 0}}>
            {availableColors.map((color, index) => (
                <ColorButton
                    color={color.color}
                    key={index}
                    isActive={index === props.currentColorIndex}
                    setColorIndex={props.setColorIndex}
                    index={index}
                />
            ))}
        </div>
    )
}

export default ColorButtonsContainer;
