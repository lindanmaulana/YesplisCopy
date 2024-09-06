import { IoIosSearch } from "react-icons/io";
import SwitchLanguage from "./SwitchLanguage";
import { IconAll } from "../../../../assets/icons/Icons";
import useHeaderStore from "../../../../hooks/useHeaderStore";
import Button from "../../../button/Index";

const NavigasiBar = () => {
  const { language } = useHeaderStore();

  return (
    <div className="shadow-md bg-third">
      <div className="container max-w-6xl ">
        <div className="flex items-center gap-3 py-5">
          <h1 className="text-xl font-semibold">
            <span className="pt-2 rounded-t text-third bg-primary ps-2">
              LinmI
            </span>
            <span className="bg-third text-primary">dShop</span>
          </h1>
          <label className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Cari berdasarkan kategori, merk, type"
              className="w-full px-4 py-2 border rounded outline-none placeholder:text-xs focus:border-primary"
            />
            <IoIosSearch className="absolute right-2 h-8 text-third top-[5px] p-1 rounded w-8 bg-primary" />
          </label>
          <SwitchLanguage />
          <Button>Masuk</Button>
          <Button styleButton="bg-primary text-third">Daftar</Button>
          <div
            className={`absolute -bottom-[85px] w-56 bg-third px-4 py-3 flex flex-col gap-3 rounded right-56 ${
              language ? "block" : "hidden"
            }`}
          >
            <button className="flex items-center gap-2">
              <img
                src={IconAll.benderaIndonesia}
                alt="Indonesia"
                className="h-4 rounded "
              />
              <span className="text-sm font-semibold">Indonesia</span>
            </button>
            <button className="flex items-center gap-2">
              <img
                src={IconAll.benderaInggris}
                alt="English"
                className="w-6 h-4 rounded"
              />
              <span className="text-sm font-semibold">English</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigasiBar;
