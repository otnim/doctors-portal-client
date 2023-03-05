import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/home/Home";
import Appointment from "../../pages/appointment/appointment/Appointment";
import Signup from "../../pages/userSection/signup/Signup";
import Login from "../../pages/userSection/login/Login";
import DashboardMain from "../../layout/DashboardMain";
import MyAppointment from "../../pages/dashboard/dashboard/MyAppointment";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    },
    {
        path: '/dashboard/my-appointment',
        element: <DashboardMain></DashboardMain>,
        children: [
            {
                path: '/dashboard/my-appointment',
                element: <PrivateRoutes> <MyAppointment></MyAppointment> </PrivateRoutes>
            }
        ]

    }
])