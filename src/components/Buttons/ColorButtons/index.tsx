import styles from "@/styles/ColorButtons.module.css";
import {availableColors} from "@/ColorsData";
import ColorButton from "@/components/Buttons/ColorButtons/ColorButton";

type propsType = {
    currentColorIndex: number
    setColorIndex: (index: number) => void
    onColorChange: () => void
}

const ColorButtonsContainer = (props: propsType) => {
    return (
        <div className={`${styles.colorButtonContainer}`}>
            {availableColors.map((color, index) => (
                <ColorButton
                    color={color.color}
                    key={index}
                    isActive={index === props.currentColorIndex}
                    setColorIndex={props.setColorIndex}
                    index={index}
                    onColorChange={props.onColorChange}
                />
            ))}
        </div>
    )
}

export default ColorButtonsContainer;
