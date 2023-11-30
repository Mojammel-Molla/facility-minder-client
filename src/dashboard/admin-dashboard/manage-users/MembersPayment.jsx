import { useContext, useEffect, useState } from 'react';
import DashboardTitle from '../../../shared/DashboardTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';

const MembersPayment = () => {
  const [paymentData, setPaymentData] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/payments?email=${user?.email}`).then(res => {
      setPaymentData(res.data);
    });
  }, [axiosSecure, user]);
  return (
    <div>
      <DashboardTitle title="Member Payments">
        {paymentData.length}
      </DashboardTitle>
    </div>
  );
};

export default MembersPayment;
