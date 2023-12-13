import { NavLink, Outlet } from 'react-router-dom';
import isAdmin from '../../dashboard/admin-dashboard/isAdmin';

const DashboardLayout = () => {
  const userinfo = isAdmin();
  return (
    <div className="flex">
      <div className="w-60 min-h-screen bg-[#08a8e4] text-white">
        <ul className="p-4 font-medium space-y-4 text-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/user-profile"
            >
              My Profile
            </NavLink>
          </li>
          {isAdmin ? (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'text-black underline' : ''
                }
                to="/dashboard/announcements"
              >
                Announcements
              </NavLink>
            </li>
          ) : (
            ''
          )}
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/make-payment"
            >
              Make Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/member-payment"
            >
              Payments history
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/complaint"
            >
              Make Complaint
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-users">Manage users</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/make-announcements"
            >
              Make Announcements
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/agreement-requests"
            >
              Agreement Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-black underline' : ''
              }
              to="/dashboard/manage-coupons"
            >
              Manage Coupons
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
