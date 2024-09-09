import  { useState } from "react";
import { PiEyeClosedBold } from "react-icons/pi";
import { SlEye } from "react-icons/sl";
import { Link } from "react-router-dom";

const Login = () => {
    const [readPassword, setReadPassword] = useState<boolean>(false)

    const handleReadPassword = () => {
        setReadPassword(!readPassword)
    }
  return (
    <form action="" className="flex flex-col w-full h-full gap-3">
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

export default Login;
