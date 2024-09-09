import { Link } from "react-router-dom";
import { dataKlien } from "./types";

const KlienUnggulan = () => {
  return (
    <section className="py-10">
      <div className="container max-w-5xl">
        <h3 className="mb-10 text-sm font-extrabold tracking-widest text-center text-color-secondary">
          KLIEN UNGGULAN
        </h3>
        <div className="grid grid-cols-5 gap-6 mb-10 rounded">
          {dataKlien.map((res) => (
            <Link to="/" className="border">
              <img src={res.url} alt={res.title} />
            </Link>
          ))}
        </div>
        <p className="text-sm font-medium text-[##454545] tracking-widest text-center">+Ratusan Klien Lainnya</p>
      </div>
    </section>
  );
};

export default KlienUnggulan;
