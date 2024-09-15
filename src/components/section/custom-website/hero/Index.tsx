import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
const HeroSection = () => {
  return (
    <section className="pb-10 pt-14 bg-color-primary">
      <div className="container max-w-6xl">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-xs font-extrabold bg-[#44d2ff] py-1 px-2 rounded mb-2">
            YESCUSTOM
          </h4>
          <h3 className="text-[40px] font-semibold text-color-third mb-2">
            Custom Website
          </h3>
          <p className="mb-8 text-lg font-medium text-white/80">
            Layanan pengembangan web yang komprehensif, agar eventmu semakin
            ekslusif.
          </p>

          <Link to="/" className="flex min-w-[300px] items-center mb-5 justify-between px-5 py-3 text-base font-bold rounded bg-color-third text-color-primary">
            <span>Pesan Sekarang</span>
            <GoArrowRight />
          </Link>
          <p className="px-5 py-3 text-sm rounded bg-black/40 text-white/70">jika kamu sudah bekerjasama dengan kami, silahkan chat di grup whatsapp event untuk melakukan pemesanan</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
