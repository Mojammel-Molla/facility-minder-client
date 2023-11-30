import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import DashboardTitle from '../../shared/DashboardTitle';

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="text-center">
      <DashboardTitle title="My Profile"></DashboardTitle>
      <div className="mt-5">
        <h1 className="text-3xl font-semibold">Hello {user?.displayName}</h1>
        <h1 className="font-medium">Your Email: {user?.email}</h1>
      </div>
    </div>
  );
};

export default UserProfile;
