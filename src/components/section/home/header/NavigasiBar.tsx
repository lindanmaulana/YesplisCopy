import { IoIosSearch } from "react-icons/io";
import SwitchLanguage from "./SwitchLanguage";
import { IconAll } from "../../../../assets/icons/Icons";
import useHeaderStore from "../../../../hooks/useHomeStore";
import Button from "../../../button/Index";
import LogoComponent from "../../../logo/Index";
import { useDispatch } from "react-redux";
import { appDispatch } from "../../../../redux/store/Store";
import { handleLogin, handleRegister } from "../../../../redux/slices/authFeatures";

const NavigasiBar = () => {
  const { languageHome, login, register } = useHeaderStore();
  const dispatch = useDispatch<appDispatch>();

  const handleViewLogin = () => {
    dispatch(handleLogin());
  };

  const handleViewRegister = () => {
    dispatch(handleRegister())
  }

  console.log({ CheckLogin: login, register });
  return (
    <div className="shadow-md bg-third">
      <div className="container max-w-6xl ">
        <div className="flex items-center gap-3 py-5">
          <LogoComponent />
          <label className="relative flex items-center w-full">
            <input
              type="text"
              placeholder="Cari berdasarkan kategori, merk, type"
              className="w-full px-4 py-2 border rounded outline-none placeholder:text-sm focus:border-color-primary"
            />
            <IoIosSearch className="absolute right-2 h-8 text-color-third top-[5px] p-1 rounded w-8 bg-color-primary" />
          </label>
          <SwitchLanguage />
          <Button url="login" onClick={handleViewLogin}>Masuk</Button>
          <Button url="register" onClick={handleViewRegister} styleButton="bg-color-primary text-color-third">Daftar</Button>
          <div
            className={`absolute -bottom-[85px] w-56 bg-color-third px-4 py-3 flex flex-col gap-3 rounded right-56 ${
              languageHome ? "block" : "hidden"
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
