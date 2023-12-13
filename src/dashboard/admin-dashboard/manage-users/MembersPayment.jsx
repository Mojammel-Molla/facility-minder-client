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
  console.log(paymentData);
  return (
    <div>
      <DashboardTitle title=" Payments History">
        {paymentData.length}
      </DashboardTitle>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>No:</label>
              </th>
              <th>Transaction Id</th>
              <th>Email</th>
              <th>Status</th>
              <th>Pay amount</th>
            </tr>
          </thead>
          {paymentData.map((item, index) => (
            <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <th>{item.transactionId}</th>
                    <div>
                      <div className="font-bold">{item.apartmentName}</div>
                      <div className="text-sm opacity-50">{item.area}</div>
                    </div>
                  </div>
                </td>
                <td>{item.email}</td>
                <td>
                  {item.status}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.date}
                  </span>
                </td>
                <td>${item.price}</td>
                {/* <th className="flex gap-2">
                  <button className="btn text-blue-700 font-bold btn-ghost btn-xs">
                    Accept
                  </button>

                  <button className="btn btn-ghost text-red-500 font-bold btn-xs">
                    Reject
                  </button>
                </th> */}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MembersPayment;
