import { Link } from "react-router-dom";

const AnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-primary from-30% via-[#1B9CE8] via-50% to-primary to-70% sticky top-0">
      <div className="container max-w-6xl py-[10px]">
        <div className="flex items-center justify-between ">
          <h2 className="text-sm text-third">
            {" "}
            <span className="loading loading-ring loading-xs text-warning"></span>{" "}
            Daftarkan Eventmu Sekarang
          </h2>
          <ul>
            <li className="flex gap-4 text-sm text-third">
              <Link to="/">Tentang Kami</Link>
              <Link to="/">Cetak Tiket Gelang</Link>
              <Link to="/">Customer Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AnouncementBar
