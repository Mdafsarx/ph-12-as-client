import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Root/MainLayout";
import Home from "../Pages/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";
import EmailLog from "../Pages/Log/EmailLog";
import Error from "../Error/Error";
import DashBoardLayout from "../Root/DashBoardLayout";
import MakeAnnouncement from "../Pages/Dashboard/MakeAnnouncement";
// import Private from "../Private/Private";

const route = createBrowserRouter([
//   main layout
    {
        path: '/',
        element: <MainLayout />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/apartment',
                element: <Apartment />
            },

        ]
    },
    // login route
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/emailLogin',
        element: <EmailLog />
    },
    {
        path: '/register',
        element: <Register />
    },

    // dashboard layout
    {

        path:'dashboard',
        element:<DashBoardLayout/>,
        children:[
            {
                path:'MakeAnnouncement',
                element:<MakeAnnouncement/>
            }
        ]

    }





])


export default route