import {prefix} from "@/prefix";

export type colorType = {
    texture: string,
    color: string
}

export const availableColors: colorType[] = [
    {
        texture: `${prefix}/textures/colors/Body_White_D.webp`,
        color: "#FFFFFF"
    },
    {
        texture: `${prefix}/textures/colors/Body_Purple_D.webp`,
        color: "#B4B5DF"
    },
    {
        texture: `${prefix}/textures/colors/Body_Green_D.webp`,
        color: "#BFCEC2"
    },
    {
        texture: `${prefix}/textures/colors/Body_GreyBlack_D.webp`,
        color: "#1D252D"
    },
    {
        texture: `${prefix}/textures/colors/Body_Turquoise_D.webp`,
        color: "#91DDE8"
    },
    {
        texture: `${prefix}/textures/colors/Body_Starlight_D.webp`,
        color: "#E0DBE3"
    },
    {
        texture: `${prefix}/textures/colors/Body_Pink_D.webp`,
        color: "#E6BCD8"
    },
    {
        texture: `${prefix}/textures/colors/Body_Black_D.webp`,
        color: "#2D2926"
    },
    {
        texture: `${prefix}/textures/colors/Body_Aquamarine_D.webp`,
        color: "#9BCBEB"
    },
    {
        texture: `${prefix}/textures/colors/Body_Magenta_D.webp`,
        color: "#C6007E"
    },
    {
        texture: `${prefix}/textures/colors/Body_Midnight_D.webp`,
        color: "#253746"
    },
];
