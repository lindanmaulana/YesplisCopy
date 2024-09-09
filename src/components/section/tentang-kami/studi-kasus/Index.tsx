import { NavLink } from "react-router-dom";
import TentangKamiRouter from "../../../../routes/TentangKamiRouter";

const StudiKasus = () => {
  const element = TentangKamiRouter();
  return (
    <section className="py-[50px]">
      <div className="container max-w-5xl">
        <div className="flex flex-col items-center justify-center">
          <h3 className="mb-3 text-sm font-extrabold tracking-widest text-color-secondary">
            STUDI KASUS
          </h3>
          <h4 className="text-[40px] font-bold text-black mb-5">
            Contoh Penggunaan Sistem Yesplis
          </h4>
          <p className="mb-10 text-lg font-medium text-center text-color-secondary">
            Pelajari bagaimana sistem Yesplis dapat memudahkan dalam mengelola
            berbagai tipe acara, mulai dari <br />
            konser acara hingga olahraga.
          </p>
          <div className="flex items-center justify-center gap-2 p-1 bg-[#e2e6ec] rounded mb-10">
            <NavLink
              to=""
              end
              className={({ isActive }) => (isActive ? "bg-color-third px-3 py-2 rounded text-base font-extrabold text-[#0b0b0b]" : "text-base font-extrabold text-[#5f6976] px-3 py-2 rounded bg-transparent")}
            >
              Bigu Festival
            </NavLink>
            <NavLink
              to="persijap"
              className={({ isActive }) => (isActive ? "bg-color-third px-3 py-2 rounded text-base font-extrabold text-[#0b0b0b]" : "text-base font-extrabold text-[#5f6976] px-3 py-2 rounded bg-transparent")}
            >
              Persijap Jepara
            </NavLink>
          </div>
          {element}
        </div>
      </div>
    </section>
  );
};

export default StudiKasus;
