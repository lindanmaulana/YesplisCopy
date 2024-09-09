import { useRoutes } from "react-router-dom"
import BiguFestival from "../components/section/tentang-kami/studi-kasus/BiguFestival"
import Persijap from "../components/section/tentang-kami/studi-kasus/Persijap"

const TentangKamiRouter = () => {
    const router = useRoutes([
        {
            path: "",
            element: <BiguFestival />
        },
        {
            path: "persijap",
            element: <Persijap />
        }
    ])
  return router
}

export default TentangKamiRouter
