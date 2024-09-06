import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePages from "./pages/HomePages.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/Store.ts";
import 'swiper/css';
import "swiper/swiper-bundle.css";
import TentangKamiPages from "./pages/TentangKamiPages.tsx";
import CetakTiketGelangPages from "./pages/CetakTiketGelangPages.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
  },
  {
    path: "/tentang-kami",
    element: <TentangKamiPages />
  },
  {
    path: "/cetak-tiket-gelang",
    element: <CetakTiketGelangPages />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
