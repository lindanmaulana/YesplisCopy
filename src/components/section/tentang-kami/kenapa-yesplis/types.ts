import { IconAll } from "../../../../assets/icons/Icons"

interface IKenapaYesplis {
    id: number | string
    title: string
    description: string
    image: string
    version?: boolean
}

export const dataKenapaYesplis: IKenapaYesplis[] = [
    {
        id: 1,
        title: "Tanpa Komisi",
        description: "Satu-satu platform yang menerapkan sistem tanpa komisi",
        image: IconAll.tanpaKomisi
    },
    {
        id: 2,
        title: "Bebas Atur Event",
        description: "Proses pembuatan event bisa dilakukan sendiri oleh penyelenggara",
        image: IconAll.bebasAturEvent
    },
    {
        id: 3,
        title: "Data Realtime",
        description: "Data pembeli tiket bisa dilihat secara realtime melalui sistem admin yesplis",
        image: IconAll.dataRealtime
    },
    {
        id: 4,
        title: "Grup Whatsapp",
        description: "Setiap klien akan kami buatkan grup Whatsapp dengan tim support yesplis.",
        image: IconAll.grupWhatsapp
    },
    {
        id: 5,
        title: "Sistem Validasi e-Tiket",
        description: "Sistem validasi e-tiket yang bisa digunakan untuk semua tipe perangkat.",
        image: IconAll.sistemValidasiEtiket
    },
    {
        id: 6,
        title: "Gratis Promosi di Sosial Media",
        description: "Kami akan membantu promosi event melalui semua sosial media Yesplis",
        image: IconAll.gratisPromosiSosmed
    },
    {
        id: 7,
        title: "Integrasi Google Analytic",
        description: "Lihat jumlah pengunjung secara realtime sampai dengan perangkat apa yang mereka gunakan.",
        image: IconAll.integrasiGoogleAnalytic,
        version: true
    },
    {
        id: 8,
        title: "Customer Service 24/7",
        description: "Kami memiliki customer service yang selalu aktif setiap hari untuk menangani kendala dari pembeli",
        image: IconAll.customerServices
    },
]