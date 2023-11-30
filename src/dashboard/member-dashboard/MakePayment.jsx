import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import DashboardTitle from '../../shared/DashboardTitle';

const MakePayment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ['agreements'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements?email=${user?.email}`);
      return res.data;
    },
  });
  const totalPay = bookings.reduce((total, item) => total + item.rent, 0);

  const handleDelete = _id => {
    axiosSecure.delete(`/agreements/${_id}`).then(res => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        confirm('Agreement has been deleted');
      }
      refetch();
    });
  };
  return (
    <div>
      <DashboardTitle title="Make Payment"></DashboardTitle>
      <div className="flex justify-evenly mt-5">
        <h3 className="text-2xl">Apartments:{bookings.length}</h3>

        <h3 className="text-2xl">Total Pay:${totalPay}</h3>
        {bookings.length ? (
          <Link to="/dashboard/payment">
            <button className="btn  bg-green-500">Pay</button>
          </Link>
        ) : (
          <button className="btn  bg-green-500">Pay</button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>No:</label>
              </th>
              <th>Name</th>
              <th>Details</th>
              <th>Date</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          {bookings.map((item, index) => (
            <tbody key={item._id}>
              {/* row 1 */}
              <tr>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.apartmentImage} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.apartmentName}</div>
                      <div className="text-sm opacity-50">{item.area}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className=" ">
                    Block:{item.blockName}, Apartment No: {item.apartmentNo}
                  </span>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {item.date}
                  </span>
                </td>
                <td>${item.rent}</td>
                <th className="flex gap-2">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-red-500 font-bold btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MakePayment;
