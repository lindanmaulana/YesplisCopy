import { useState } from "react";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { PiEyeClosedBold } from "react-icons/pi";
import { SlEye } from "react-icons/sl";
import { Link } from "react-router-dom";

const Register = () => {
  const [readPassword, setReadPassword] = useState<boolean>(false);
  const handleReadPassword = () => {
    setReadPassword(!readPassword);
  };
  return (
    <form action="" className="flex flex-col w-full h-full gap-3">
      <label htmlFor="nama-lengkap">
        <h3 className="mb-2 text-sm font-semibold">Nama Lengkap</h3>
        <input
          type="text"
          id="nama-lengkap"
          className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:border-primary"
        />
      </label>
      <label htmlFor="email">
        <h3 className="mb-2 text-sm font-semibold">Email</h3>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:border-primary"
        />
      </label>

      <label htmlFor="password" className="mb-5">
        <h3 className="mb-2 text-sm font-semibold">Password</h3>
        <div className="relative">
          <input
            type={readPassword ? "text" : "password"}
            id="password"
            className="w-full px-4 py-3 text-sm border rounded-md outline-none focus:border-primary"
          />
          <button
            type="button"
            onClick={handleReadPassword}
            className="absolute -translate-y-1/2 right-3 top-1/2"
          >
            {readPassword ? <SlEye /> : <PiEyeClosedBold />}
          </button>
        </div>
      </label>
      <div className="grid grid-cols-2 gap-3">
        <label htmlFor="man" className="flex items-center justify-center gap-2 px-4 py-3 border rounded">
          <input
            type="radio"
            name="radio-7"
            id="man"
            className="radio radio-info radio-xs"
            defaultChecked
          />
          <h4>Laki - Laki</h4>
          <AiOutlineMan className="text-primary"/>
        </label>
        <label htmlFor="woman" className="flex items-center justify-center gap-2 px-4 py-3 border rounded">
          <input
            type="radio"
            name="radio-7"
            id="woman"
            className="radio radio-info radio-xs"
            defaultChecked
          />
          <h4>Perempuan</h4>
          <AiOutlineWoman className="text-pink-700"/>
        </label>
      </div>
      <button className="w-full p-2 text-sm font-semibold rounded bg-primary text-third">
        Masuk
      </button>
      <p className="text-xs font-semibold text-center">
        Lupa kata sandi?{" "}
        <Link to="/" className="text-primary">
          atur ulang kata sandi
        </Link>
      </p>
    </form>
  );
};

export default Register;
