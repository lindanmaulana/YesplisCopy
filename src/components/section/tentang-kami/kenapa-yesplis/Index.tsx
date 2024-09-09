import CardKenapaYesplis from "./CardKenapaYesplis";

const KenapaYesplis = () => {
  return (
    <section className="py-10">
      <div className="container max-w-5xl">
        <h3 className=" text-sm font-extrabold tracking-widest text-center text-[#454545]">
          KENAPA YESPLIS
        </h3>
        <h4 className="text-[40px] font-bold text-black text-center mb-3">
          Fitur Lengkap Untuk Manajemen Tiket
        </h4>
        <p className="mb-20 text-lg font-medium text-center">
          Fitur lengkap yang di rancang untuk memaksimalkan efesiensi dan
          memudahkan pengelolaan acara. Mulai <br />
          dari penjualan tiket hingga validasi tiket.
        </p>
        <div className="grid grid-cols-2 gap-6">
            <CardKenapaYesplis />
        </div>
      </div>
    </section>
  );
};

export default KenapaYesplis;
