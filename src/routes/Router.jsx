import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/main/MainLayOut';
import Home from '../pages/home/home/Home';
import Register from '../pages/register/Register';
import Login from '../pages/log-in/Login';
import AllAgreements from '../pages/all-agreements/AllAgreements';
import PrivateRoute from './PrivateRoute';
import ApartmentDetails from '../pages/home/apartment-details/ApartmentDetails';
import DashboardLayout from '../layouts/dashboard-layout/DashboardLayout';
import Announcements from '../dashboard/announcements/Announcements';
import UserProfile from '../dashboard/user-dashboard/UserProfile';
import MakeAnnouncements from '../dashboard/admin-dashboard/make-announcements/MakeAnnouncements';
import ManageCoupon from '../dashboard/admin-dashboard/manage-coupon/ManageCoupon';
import AgreementRequests from '../dashboard/admin-dashboard/agreement-requests/AgreementRequests';
import ManageUsers from '../dashboard/admin-dashboard/manage-users/ManageUsers';
import MemberProfile from '../dashboard/member-dashboard/MemberProfile';
import MakePayment from '../dashboard/member-dashboard/MakePayment';
import Payment from '../dashboard/payment/Payment';
import MembersPayment from './../dashboard/admin-dashboard/manage-users/MembersPayment';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    // errorElement : ,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/all-agreements',
        element: (
          <PrivateRoute>
            <AllAgreements />
          </PrivateRoute>
        ),
      },
      {
        path: '/apartments/:id',
        element: (
          <PrivateRoute>
            <ApartmentDetails />
          </PrivateRoute>
        ),

        loader: async ({ params }) =>
          await fetch(
            `https://facility-minder-server.vercel.app/apartments/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'announcements',
        element: <Announcements />,
      },
      {
        path: 'user-profile',
        element: <UserProfile />,
      },
      {
        path: 'make-announcements',
        element: <MakeAnnouncements />,
      },
      {
        path: 'manage-coupons',
        element: <ManageCoupon />,
      },
      {
        path: 'agreement-requests',
        element: <AgreementRequests />,
      },
      {
        path: 'manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'member-profile',
        element: <MemberProfile />,
      },
      {
        path: 'member-payment',
        element: <MembersPayment />,
      },
      {
        path: 'make-payment',
        element: <MakePayment />,
      },
      {
        path: 'payment',
        element: <Payment />,
      },
    ],
  },
]);

export default Router;
