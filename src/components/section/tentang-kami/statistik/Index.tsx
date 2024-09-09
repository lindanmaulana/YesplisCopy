import { dataStatistik } from "./types";

const Statistik = () => {
  return (
    <section className="py-10">
      <div className="container max-w-5xl">
        <h3 className="mb-10 text-sm font-extrabold tracking-widest text-center text-[#454545]">
          STATISTIK
        </h3>
        <div className="grid grid-cols-3 gap-3 justify-items-center">
          {dataStatistik.map((res) => {
            const idr = new Intl.NumberFormat("id-ID", {
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(res.value);
            return (
              <div className="text-center">
                <h4 className="text-[32px] font-bold text-[##0b0b0b]">{idr} +</h4>
                <p className="text-sm font-medium text-[#454545] tracking-widest">{res.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistik;
