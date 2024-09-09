import { ImageYesCustom } from "../../../../assets/images/Images"

interface IYesCustom {
    id: number | string
    title: string
    description: string
    image: string
    backgroundImage: string
    url: string
}


export const dataYesCustom: IYesCustom[] = [
    {
        id: 1,
        title: "Cetak Tiket Gelang",
        description: "Layanan untuk mencetak tiket gelang, agar memudahkan identifikasi dan akses peserta ke eventmu.",
        image: ImageYesCustom.tiketGelangCustom,
        backgroundImage: "bg-yellow-500",
        url: "/cetak-tiket-gelang"
    },
    {
        id: 2,
        title: "Custom Website",
        description: "Layanan pengembangan web yang komprehensif, agar eventmu semakin ekslusif.",
        image: ImageYesCustom.customWebsite,
        backgroundImage: "bg-sky-500",
        url: "/"
    },
]