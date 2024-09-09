import { Link } from "react-router-dom";
import { dataYesCustom } from "./types";
import { LayerAll } from "../../../../assets/layer/Index";
import { GoArrowRight } from "react-icons/go";

const YesCustom = () => {
  return (
    <section className="py-[50px] bg-color-primary">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-3 text-sm font-extrabold tracking-widest text-color-third">
            YESCUSTOM
          </h3>
          <h4 className="text-[40px] font-bold text-color-third mb-5">
            Layanan Tambahan
          </h4>
          <p className="mb-20 text-lg font-medium text-center text-color-third">
            Selain fitur manajemen tiket dasar, Yesplis juga menyediakan layanan
            tambahan yang dapat meningkatkan <br />
            pengalaman penyelenggara acara Anda.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {dataYesCustom.map((res) => (
              <Link to={res.url} key={res.id} className="p-5 rounded bg-color-third">
                <figure className={`${res.backgroundImage} relative overflow-hidden h-[200px] rounded mb-5`}>
                  <img src={res.image} alt={res.title} className="scale-75" />
                  <img src={LayerAll.LayerWhiteLeft} alt="" className="absolute top-0 left-0 scale-150" />
                </figure>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-[#0b0b0b] ">{res.title}</h3>
                  <p className="text-base font-medium text-color-secondary">{res.description}</p>
                  <Link to={res.url} className="flex items-center gap-3 text-base font-bold text-color-primary">Lihat Detail <GoArrowRight /></Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YesCustom;
