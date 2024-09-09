import { GoArrowRight } from "react-icons/go";
import { IconAll } from "../../../../assets/icons/Icons";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-10">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="mb-4 text-5xl font-bold text-black">Jual Tiket Eventmu</h3>
          <h3 className="mb-4 text-5xl font-bold text-black">Tanpa Khawatir Komisi Penjualan!</h3>
          <p className="mb-12 text-lg font-medium text-color-secondary">
            Jual tiket eventmu di Yesplis-tanpa komisi, tanpa khawatir. Nikmati
            keuntungan penuh dengan sistem <br /> yang mudah dan transparant
          </p>
          <div className="flex items-center gap-3 mb-16">
            <button className="flex items-center gap-3 px-4 py-3 text-base font-bold rounded bg-color-primary text-color-third">Buat Event Sekarang <GoArrowRight /></button>
            <button className="flex items-center gap-3 px-4 py-3 text-base font-bold rounded text-color-primary">Konsultasi dengan YesMin <GoArrowRight /></button>
          </div>
          <img src={IconAll.peopleGroup} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
