import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../Pages/ErrorPage"
import Auth from '../context/Auth'
import Home from "../Pages/Home"
import Services from "../Pages/Services"
import Blogs from "../Pages/Blogs"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Auth><App/></Auth>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                loader: () => fetch("http://localhost:5000/services?limit=3"),
                element: <Home/>
            },
            {
                path: '/home',
                loader: () => fetch("http://localhost:5000/services?limit=3"),
                element: <Home/>
            },
            {
                path: '/services',
                loader: () => fetch("http://localhost:5000/services"),
                element: <Services/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
        ]
    }
])