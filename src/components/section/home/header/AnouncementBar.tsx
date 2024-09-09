import { Link } from "react-router-dom";
import { GiStarShuriken } from "react-icons/gi";

const AnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-color-primary from-30% via-[#1B9CE8] via-50% to-color-primary to-70% sticky top-0">
      <div className="container max-w-6xl py-[10px]">
        <div className="flex items-center justify-between ">
          <h2 className="flex items-center gap-2 text-sm text-[#ffffff]">
            {" "}
            <span className="animate-grow-shrink">
              <GiStarShuriken className="text-yellow-500"/>
            </span>
            Daftarkan Eventmu Sekarang
          </h2>
          <ul>
            <li className="flex gap-4 text-sm text-[#ffffff]">
              <Link to="/tentang-kami">Tentang Kami</Link>
              <Link to="/cetak-tiket-gelang">Cetak Tiket Gelang</Link>
              <Link to="/">Customer Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnouncementBar;
