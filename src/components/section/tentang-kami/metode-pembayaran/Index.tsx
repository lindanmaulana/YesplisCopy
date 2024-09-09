import CardMetodePembayaran from "./CardMetodePembayaran";

const MetodePembayaran = () => {
  return (
    <section className="py-10">
      <div className="container max-w-5xl">
        <div className="flex items-center justify-between gap-10">
          <div className="w-[55%]">
            <h3 className="text-sm font-extrabold text-[#454545] tracking-widest">
              METODE PEMBAYARAN
            </h3>
            <h4 className="text-[40px] font-bold text-black">
              kemudahan Pembayaran <br />
              untuk Setiap Transaksi
            </h4>
            <p className="text-base leading-[32px] font-medium text-[#454545]">
              Kami menyediakan berbagai pilihan metode pembayaran yang <br />
              aman dan fleksibel untuk memudahkan transaksi pembelian tiket.{" "}
              <br />
              Mulai dari Dompet Elektronik, Virtual Account, Kartu Kredit, Bayar{" "}
              <br />
              di Kasir & Paylater semua ada di Yesplis.
            </p>
          </div>
          <div className="w-[45%]">
            <CardMetodePembayaran />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetodePembayaran;
