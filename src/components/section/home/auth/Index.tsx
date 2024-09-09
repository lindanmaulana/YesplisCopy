import { ReactElement } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useHomeStore from "../../../../hooks/useHomeStore";
import { handleClose } from "../../../../redux/slices/authFeatures";
import { appDispatch } from "../../../../redux/store/Store";
import AuthRouter from "../../../../routes/AuthRouter";

const Auth = () => {
  const { login, register } = useHomeStore();
  const dispatch = useDispatch<appDispatch>();
  const element: ReactElement | null = AuthRouter();

  const handleViewClose = () => {
    dispatch(handleClose());
  };

  return (
    <>
      {login || register ? (
        <>
          <div
            className={`absolute top-0 right-0 w-full h-screen bg-black/80 `}
          ></div>
          <div
            className={`absolute translate-x-1/2 right-1/2 top-3/4 bg-color-third w-[450px] h-[450px] overflow-auto rounded`}
          >
            <div className="relative flex flex-col items-center justify-center h-full px-12 pb-5 py-14">
              <Link
                to="/"
                onClick={handleViewClose}
                className="absolute text-lg bg-red-600 rounded right-5 top-5 text-third"
              >
                <MdClose />
              </Link>
              <h2 className="text-2xl font-extrabold">
                Selamat Datang di Yesplis
              </h2>
              <p className="text-[13px] font-medium mb-8">
                Silahkan masuk atau daftar untuk melanjutkan
              </p>
              <div className="flex items-center justify-around w-full mb-10 text-center border-b-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-2 border-primary w-1/2"
                      : "w-1/2"
                  }
                  to="/login"
                >
                  Masuk
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary border-b-2 border-primary w-1/2"
                      : "w-1/2"
                  }
                  to="/register"
                >
                  Daftar
                </NavLink>
              </div>
              {element}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Auth;
