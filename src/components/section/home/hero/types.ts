import { ImageHero } from "../../../../assets/images/Images";

type THeroSection = {
  id: number | string;
  image: string;
  title: string;
  url: string;
};

export const dataHeroCard: THeroSection[] = [
  {
    id: 1,
    image: ImageHero.customerServices,
    title: "Customer Services",
    url: "",
  },
  {
    id: 2,
    image: ImageHero.jual,
    title: "Jual Tiket tanpa Komisi",
    url: "",
  },
  {
    id: 3,
    image: ImageHero.follow,
    title: "Follow Kami",
    url: "",
  },
];
