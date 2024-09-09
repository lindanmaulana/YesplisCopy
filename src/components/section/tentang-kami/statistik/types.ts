

interface IStatistik {
    id: number | string
    title: string
    value: number
}

export const dataStatistik: IStatistik[] = [
    {
        id: 1,
        title: "Events",
        value: 1200
    },
    {
        id: 2,
        title: "Tiket Terjual",
        value: 1500000
    },
    {
        id: 3,
        title: "Klien",
        value: 800
    }
]