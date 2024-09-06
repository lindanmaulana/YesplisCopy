import { Link } from "react-router-dom";
import { ImageTipeTiketGelang } from "../../../../assets/images/Images";
import { FaArrowRightLong } from "react-icons/fa6";

const PilihTipeTiketGelang = () => {
  return (
    <section className="py-14">
      <div className="container max-w-5xl">
        <h3 className="text-sm font-extrabold text-center text-[#373737] mb-6">
          PILIH TIPE TIKET GELANG
        </h3>
        <div className="flex justify-center gap-3">
          <div className="w-1/2">
            <img src={ImageTipeTiketGelang.tiketGelang} alt="Tiket gelang" />
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
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td className="text-base font-medium text-[#373737]">
                      Bahan
                    </td>
                    <td className="flex flex-col gap-3">
                      <label htmlFor="" className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-2"
                          className="radio radio-primary radio-xs"
                          defaultChecked
                        />
                        <span>Kertas</span>
                      </label>
                      <label htmlFor="" className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="radio-2"
                          className="radio radio-primary radio-xs"
                        />
                        <span>Lanyard</span>
                      </label>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td className="text-base font-medium text-[#373737]">
                      QR Code
                    </td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <td className="text-base font-medium text-[#373737]">
                      Waktu Produksi
                    </td>
                    <td>Purple</td>
                  </tr>
                  <tr>
                    <td className="text-base font-medium text-[#373737]">
                      Harga
                    </td>
                    <td>Purple</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilihTipeTiketGelang;
