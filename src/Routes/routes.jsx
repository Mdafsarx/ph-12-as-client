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
import AgreementRequest from "../Pages/Dashboard/AgreementRequest";
import AnnouncementUser from "../Pages/Dashboard/user/AnnouncementUser";
import MakePayment from "../Pages/Dashboard/member/MakePayment";
import PaymentHistory from "../Pages/Dashboard/member/PaymentHistory";
import Profile from "../Pages/Dashboard/user/ProfileUser";
import Payment from "../Pages/Dashboard/member/Payment";
import Private from "../Private/Private";
import AdminPrivate from "../Private/AdminPrivate";
import UserPrivate from "../Private/UserPrivate";
import MemberPrivate from "../Private/MemberPrivate";
import MemberAndUser from "../Private/MemberAndUser";
import ManageMember from "../Pages/Dashboard/ManageMember";
import Coupon from "../Pages/Dashboard/Coupon";
import AdminProfile from "../Pages/Dashboard/AdminProfile";

const route = createBrowserRouter([
    //   main layout
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error />,
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

        path: 'dashboard',
        element: <Private><DashBoardLayout /></Private>,
        children: [
            // admin
            {
                path:'admin-Profile',
                element: <Private><AdminPrivate><AdminProfile /></AdminPrivate></Private>
            },
            {
                path: 'Make-Announcement',
                element: <Private><AdminPrivate><MakeAnnouncement /></AdminPrivate></Private>,
            },
            {
                path: 'Agreement-Request',
                element: <Private><AdminPrivate><AgreementRequest /></AdminPrivate></Private>
            },
            {
              path:'manage-Member',
              element: <Private><AdminPrivate><ManageMember /></AdminPrivate></Private>
            },
            {
              path:'coupon',
              element: <Private><AdminPrivate><Coupon /></AdminPrivate></Private>
            },
            // user
            {
                path: 'user-Profile',
                element: <Private><UserPrivate><Profile /></UserPrivate></Private>,
            },

            // member
            {
                path: 'member-Profile',
                element: <Private><MemberPrivate><Profile /></MemberPrivate></Private>
            },
            {
                path: 'make-Payment',
                element:  <Private><MemberPrivate><MakePayment /></MemberPrivate></Private>
            },
            {
                path: 'payment-History',
                element:  <Private><MemberPrivate> <PaymentHistory /></MemberPrivate></Private>
            },
            {
                path: 'Payment/:month',
                element:  <Private><MemberPrivate><Payment /></MemberPrivate></Private>
            },

            // user and member route
            {
                path: 'Announcement',
                element: <Private><MemberAndUser><AnnouncementUser /></MemberAndUser></Private>
            }
        ]

    }





])


export default route