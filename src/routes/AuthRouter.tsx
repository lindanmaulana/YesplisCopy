import { useRoutes } from 'react-router-dom'
import Login from '../components/section/home/auth/Login'
import Register from '../components/section/home/auth/Register'

const AuthRouter = () => {
    const router = useRoutes([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ])
  return router
}

export default AuthRouter
