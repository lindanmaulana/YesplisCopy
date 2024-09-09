import { ImageEvents } from "../../../../assets/images/Images";

type TEvent = {
  id: number | string;
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  organized: string;
  description: string;
};

export const dataEvents: TEvent[] = [
  {
    id: 1,
    title: 'DN SMADA 65: "TEENAGE DREAM"',
    organized: "Unit Dies Natalis SMAN 2 Kediri",
    image: ImageEvents.diesNatalis,
    date: "20 Oktober 2024",
    time: "18:00 WIB",
    location:
      "Lapangan Utama SMAN 2 Kediri | Lapangan Bola SMAN 2 Kediri, Jalan Veteran, Sukorame, Kota Kediri, East Java, Indonesia",
    description:
      'We proudly present to you the new face of Dies Natalis SMADA, an annual event organized by the Dies Natalies unit of SMAN 2 Kediri. With this years theme, "Teenage Dream," we hope to make your teenage dreams come true in this joyous celebration. So, lets run away and never look back!.',
    price: 100000,
  },
  {
    id: 2,
    title: "PERSIJAP Jepara VS PERSEKAT Tegal",
    organized: "Persijap",
    image: ImageEvents.persijapPersekat,
    date: "08 September 2024",
    time: "14:00 WIB",
    location:
      "Stadion dr. H. moch. Soebroto | Stadion dr. H. Moch. Soebroto Kota Magelang, Jalan Tentara Genie Pelajar, South Kramat, Magelang City, Central Java, Indonesia",
    description:
      "BABAK PENDAHULUAN PEGADAIAN LIGA 2 2024/2025 PERSIJAP Jepara vs PERSEKAT Tegal Minggu , 8 Agustus 2024",
    price: 40000,
  },
  // {
  //   id: 3,
  //   title: 'SSM EXPO "September Cross Culture"',
  //   organized: "SALATIGA SPACE MARKET",
  //   image: ImageEvents.ssmExpo,
  //   date: "05 September 2024",
  //   time: "15:00 WIB",
  //   location:
  //     "Halaman | Graha Korpri Salatiga, Mangunsari, Salatiga City, Central Java, Indonesia",
  //   description:
  //     "Hii Lovers 💌💌 Acara ini merupakan sebuah acara musik yang dipadukan dengan berbagai para selling baik makanan ataupun fashion yang membuat kamu selain bisa tampil kece dikonser dan dijamin bakal seru-seruan bersama teman. Kami mempersembahkan Aftershine sebagai Line Up.  Acara ini akan diselenggarakan pada Kamis, 05 September 2024. Jadi, tunggu apalagi? Ajak temanmu, pesan tiketnya dan mari meroket bersama kami🚀🎟️ Pantengin terus media sosial kami lovers !",
  //   price: 25000,
  // },
  {
    id: 4,
    title: "FAMOS 2K24",
    organized: "OSIS MPK SMA NEGERI 19 SURABAYA",
    image: ImageEvents.famos,
    date: "01 November 2024",
    time: "15:00 WIB",
    location:
      "SMA NEGERI 19 SURABAYA | Jl. Kedung Cowek No.390, Tanah Kali Kedinding, Kec. Kenjeran, Surabaya, Jawa Timur 60134, Indonesia",
    description:
      "────୨ৎ─── 𝐃𝐞𝐚𝐫, 𝐌𝐨𝐬𝐬𝐢𝐜𝐚𝐥𝐬 ִֶָ𓂃 ࣪˖ ִֶָ🦋་༘࿐ After going through a long process, this cycle has become a part that is awaited and desired. Let it fly while carrying beautiful hopes to build something better. And hewwego❕,",
    price: 100000,
  },
  {
    id: 5,
    title: "THALASSIC 2024",
    organized: "MPK/PO Navradyaksa SMA Negeri 28 Jakarta",
    image: ImageEvents.thalassic,
    date: "07 September 2024",
    time: "10:30 WIB",
    location:
      "SMA Negeri 28 Jakarta | Jalan Raya Ragunan No.33, RT.6/RW.7, Jati Padang, South Jakarta City, Jakarta, Indonesia",
    description:
      "☘️ 𝐓𝐇𝐀𝐋𝐀𝐒𝐒𝐈𝐂 𝐒𝐌𝐀𝐍 𝟐𝟖 𝐉𝐚𝐤𝐚𝐫𝐭𝐚 𝐩𝐫𝐞𝐬𝐞𝐧𝐭𝐬, ‎ 🌲 A Kaleidoscopic Stride Into The Verdant Wonders 🪵 ",
    price: 99000,
  },
  {
    id: 6,
    title: "PDKTFest Berau Vol.2",
    organized: "Ilusi Event Planner",
    image: ImageEvents.pdkt,
    date: "03 Sep - 05 Sep 2024",
    time: "15:00 WIB",
    location:
      "Story Mount Cafe, Berau | Story Mount Cafe - Rooftop, Jalan Gunung Panjang, Gunung Panjang, Kabupaten Berau, Kalimantan Timur, Indonesia",
    description: "undefined",
    price: 85000,
  },
  {
    id: 7,
    title: "QUATROLYMPIC",
    organized: "SMA Islam Al Azhar 4 Bekasi",
    image: ImageEvents.quatrolympic,
    date: "12 Oktober 2024",
    time: "12:50 WIB",
    location:
      "SMA Islam Al-Azhar 4 | Jl. Kemang Pratama Raya No.8-9, RT.003/RW.001, Bojong Rawalumbu, Kec. Rawalumbu, Kota Bekasi, Jawa Barat 17116, Indonesia",
    description:
      "Selamat datang di Panggung Budaya Pasundan, Quatrolympic 17! 🎭 Quatrolympic adalah kegiatan yang diselenggarakan sebagai wadah untuk mengembangkan kreativitas melalui perlombaan dan dilanjutkan dengan pentas seni. 🌺 Pastikan kalian hadir menjadi bagian dari momen spesial Panggung Budaya Pasundan yang menggelora dalam semarak Quatrolympic 17! 😆🛺",
    price: 70000,
  },
];
