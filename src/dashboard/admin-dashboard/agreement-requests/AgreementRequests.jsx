import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DashboardTitle from './../../../shared/DashboardTitle';

const AgreementRequests = () => {
  const [agreementData, setAgreementData] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get('/agreements').then(res => {
      setAgreementData(res.data);
    });
  }, [axiosSecure]);

  const handleDelete = _id => {
    axiosSecure.delete(`/agreements/${_id}`).then(res => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        confirm('Agreement has been deleted');
      }
    });
  };
  const handleAccept = _id => {
    const accepted = { status: 'confirm' };
    axiosSecure.patch(`/agreements/${_id}`, accepted).then(res => {
      console.log(res.data);
      if (res.data.upsertedCount > 0) {
        alert('Agreement has been accepted');
      }
    });
  };
  return (
    <div>
      <DashboardTitle title="Agreement Requests">
        {agreementData.length}
      </DashboardTitle>
      <div className="overflow-x-auto mt-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>No:</label>
              </th>
              <th>Name</th>
              <th>Details</th>
              <th>Status</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          {agreementData.map((item, index) => (
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
                  {item.email}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Block:{item.blockName}, Apartment No: {item.apartmentNo}
                  </span>
                </td>
                <td>
                  {item.status}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.date}
                  </span>
                </td>
                <td>${item.rent}</td>
                <th className="flex gap-2">
                  <button
                    onClick={() => {
                      handleAccept(item._id);
                    }}
                    className="btn text-blue-700 font-bold btn-ghost btn-xs"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-red-500 font-bold btn-xs"
                  >
                    Reject
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

export default AgreementRequests;
