import { Link } from "react-router-dom";
import { ImageTipeTiketGelang } from "../../../../assets/images/Images";
import { FaArrowRightLong } from "react-icons/fa6";
import { LayerAll } from "../../../../assets/layer/Index";

const PilihTipeTiketGelang = () => {
  return (
    <section className="py-14">
      <div className="container max-w-5xl">
        <h3 className="text-sm font-extrabold text-center text-[#373737] mb-6">
          PILIH TIPE TIKET GELANG
        </h3>
        <div className="flex justify-center gap-8">
          <div className="relative w-1/2 overflow-hidden bg-black rounded">
            <img
              src={LayerAll.LayerWhiteLeft}
              alt="layer"
              className="absolute top-0 w-full h-full scale-150"
            />
            <div className="absolute bottom-0 block w-8/12 h-40 translate-x-1/2 right-1/2 bg-[#dddddd]"></div>
            <div className="absolute block w-8/12 h-20 translate-x-1/2 rounded-xl bottom-28 right-1/2 bg-third"></div>
            <img
              src={ImageTipeTiketGelang.tiketGelang}
              alt="Tiket gelang"
              className="absolute scale-75 translate-x-1/2 bottom-20 right-1/2"
            />
          </div>
          <div className="w-1/2">
            <div className="bg-[#f5f5f5] p-2 rounded border">
              <h4 className="mb-3 text-sm font-semibold text-[#373737]">
                Pemesanan tiket gelang dengan tipe yang terdapat QR Code, sudah
                termasuk gratis sistem validasi.
              </h4>
              <Link
                to="/"
                className="flex items-center gap-3 text-sm font-semibold text-primary"
              >
                <span>Lihat Demo Sistem</span> <FaArrowRightLong />
              </Link>
            </div>
            <div className="py-3 overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {/* row 1 */}
                  <tr className="border-t">
                    <td className="text-base font-medium text-[#373737] py-5">
                      Bahan
                    </td>
                    <td className="flex flex-col gap-3">
                      <label htmlFor="" className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio radio-primary radio-xs"
                          defaultChecked
                        />
                        <span className="text-base font-medium text-color-secondary">
                          Kertas
                        </span>
                      </label>
                      <label htmlFor="" className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio radio-primary radio-xs"
                        />
                        <span className="text-base font-medium text-color-secondary">
                          Lanyard
                        </span>
                      </label>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-t">
                    <td className="text-base font-medium text-[#373737] py-5">
                      QR Code
                    </td>
                    <td className="flex flex-col gap-3">
                      <label htmlFor="" className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-2"
                          className="radio radio-primary radio-xs"
                          defaultChecked
                        />
                        <span className="text-base font-medium text-color-secondary">
                          Tidak
                        </span>
                      </label>
                      <label htmlFor="" className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-2"
                          className="radio radio-primary radio-xs"
                        />
                        <span className="text-base font-medium text-color-secondary">
                          Ya
                        </span>
                      </label>
                    </td>
                  </tr>
                  <tr className="border-y">
                    <td className="text-base font-medium text-[#373737] py-5">
                      Waktu Produksi
                    </td>
                    <td className="text-base font-medium">3-7 hari</td>
                  </tr>
                  <tr className="border-t">
                    <td className="text-base font-medium text-[#373737] py-5">
                      Harga
                    </td>
                    <td className="text-xs font-medium">
                      <span className="text-base font-extrabold text-black">
                        Rp1.000
                      </span>
                      /pcs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button className="flex items-center justify-between w-full px-6 py-3 mb-5 text-base font-bold rounded bg-color-primary text-color-third">
              <span>Pesan Sekarang</span> <FaArrowRightLong />
            </button>
            <p className="text-[13px] text-center text-black/50">
              Jika kamu sudah bekerjasama dengan kami, silahkan chat di grup
              whatsapp <br /> event untuk melakukan pemesanan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilihTipeTiketGelang;
