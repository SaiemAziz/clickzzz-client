import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../Pages/ErrorPage"
import Auth from '../context/Auth'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Auth><App/></Auth>,
        errorElement: <ErrorPage/>,
        children: [

        ]
    }
])