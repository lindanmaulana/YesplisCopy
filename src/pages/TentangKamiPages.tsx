import FooterComponent from "../components/footer/Index";
import HeaderComponent from "../components/header/Index";
import HeroSection from "../components/section/tentang-kami/hero/Index";
import KenapaYesplis from "../components/section/tentang-kami/kenapa-yesplis/Index";
import KlienUnggulan from "../components/section/tentang-kami/klien-unggulan/Index";
import MetodePembayaran from "../components/section/tentang-kami/metode-pembayaran/Index";
import Statistik from "../components/section/tentang-kami/statistik/Index";
import StudiKasus from "../components/section/tentang-kami/studi-kasus/Index";
import TentangKami from "../components/section/tentang-kami/tentang/Index";
import YesCustom from "../components/section/tentang-kami/yes-custom/Index";

const TentangKamiPages = () => {
  return (
    <>
      <HeaderComponent />
      <HeroSection />
      <TentangKami />
      <KlienUnggulan />
      <Statistik />
      <KenapaYesplis />
      <MetodePembayaran />
      <YesCustom />
      <StudiKasus />
      <FooterComponent />
    </>
  );
};

export default TentangKamiPages;
