import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";

const route=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/apartment',
                element:<Apartment/>
            },
        ]
    }
])


export default route