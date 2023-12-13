import isAdmin from '../dashboard/admin-dashboard/isAdmin';

const AdminRoute = ({ children }) => {
  const userInfo = isAdmin();
  if (userInfo.role === 'admin') {
    return children;
  }
  return;
};

export default AdminRoute;
