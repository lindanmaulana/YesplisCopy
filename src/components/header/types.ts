import { IconType } from "react-icons"
import { PiArrowLineUpRightBold } from "react-icons/pi"

interface IMenuHeader {
    id: number | string,
    title: string
    url: string
    icon?: IconType
}

export const dataMenuHeader: IMenuHeader[] = [
    {
        id: 1,
        title: "Tiket Gelang",
        url: "/"
    },
    {
        id: 2,
        title: "Custom Website",
        url: "/"
    },
    {
        id: 3,
        title: "Beli Tiket",
        url: "/",
        icon: PiArrowLineUpRightBold
    },
    {
        id: 4,
        title: "Buat Event",
        url: "/",
        icon: PiArrowLineUpRightBold
    },
]