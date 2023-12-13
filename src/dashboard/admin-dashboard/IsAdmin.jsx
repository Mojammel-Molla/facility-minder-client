import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const isAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axiosSecure.get(`/users?email=${user?.email}`).then(res => {
      setUserInfo(res.data);
    });
  }, [axiosSecure, user]);

  return userInfo;
};

export default isAdmin;
