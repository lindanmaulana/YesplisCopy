type TFooter = {
  id: string | number;
  title: string;
  listOne?: {
    list: string;
    url: string;
  };
  listTwo?: {
    list: string;
    url: string;
  };
  listThree?: {
    list: string;
    url: string;
  };
};

export const dataFooter: TFooter[] = [
  {
    id: 1,
    title: "Yesplis",
    listOne: {
        list: "Tentang Kami",
        url: ""
    },
    listTwo: {
        list: "Syarat  & Ketentuan",
        url: ""
    },
    listThree: {
        list: "Kebijakan Privasi",
        url: ""
    }
  },
  {
    id: 2,
    title: "Layanan Kami",
    listOne: {
        list: "Ticket Management System",
        url: ""
    },
    listTwo: {
        list: "Cetak Tiket Gelang",
        url: ""
    },
    listThree: {
        list: "Web Development",
        url: ""
    }
  },
  {
    id: 3,
    title: "Dukungan",
    listOne: {
        list: "Customer Service",
        url: ""
    },
    listTwo: {
        list: "Partnership",
        url: ""
    },
  },
  {
    id: 4,
    title: "Lainnya",
    listOne: {
        list: "Cara Membeli Tiket",
        url: ""
    },
  },
  {
    id: 5,
    title: "Ikuti Kami",
  },
];

import { IconType } from "react-icons";
import { FaXTwitter } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { SlSocialInstagram, SlSocialYoutube } from "react-icons/sl";

type TIkutiKami = {
    id: number | string
    title: string
    icon: IconType
    url: string
    background: string
}

export const dataIkutiKami: TIkutiKami[] = [
    {
        id: 1,
        title: "Instagram",
        icon: SlSocialInstagram,
        url: "",
        background: "bg-[#c536a4]"
    },
    {
        id: 2,
        title: "Youtube",
        icon: SlSocialYoutube,
        url: "",
        background: "bg-[#BF0000]"
    },
    {
        id: 3,
        title: "X",
        icon: FaXTwitter,
        url: "",
        background: "bg-[#172029]"
    },
    {
        id: 4,
        title: "Tiktok",
        icon: PiTiktokLogo,
        url: "",
        background: "bg-[#172029]"
    }
]
