import { ImageKlien } from "../../../../assets/images/Images";

interface IKlien {
    id: number | string
    title: string
    url: string
}

export const dataKlien: IKlien[] = [
  {
    id: 1,
    title: "Bozz Event",
    url: ImageKlien.bozzEvent,
  },
  {
    id: 2,
    title: "Ros",
    url: ImageKlien.ros,
  },
  {
    id: 3,
    title: "Mht Live",
    url: ImageKlien.mhtLive,
  },
  {
    id: 4,
    title: "Persijap Jepara",
    url: ImageKlien.persijapJepara,
  },
  {
    id: 5,
    title: "Saloka",
    url: ImageKlien.saloka,
  },
];
