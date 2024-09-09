import FooterComponent from "../components/footer/Index";
import HeaderComponent from "../components/header/Index";
import HeroSection from "../components/section/cetak-tiket-gelang/hero/Index";
import PilihTipeTiketGelang from "../components/section/cetak-tiket-gelang/pilih-tipe-tiket-gelang/Index";

const CetakTiketGelangPages = () => {
  return (
    <>
      <HeaderComponent />
      <HeroSection />
      <PilihTipeTiketGelang />
      <FooterComponent />
    </>
  );
};

export default CetakTiketGelangPages;
