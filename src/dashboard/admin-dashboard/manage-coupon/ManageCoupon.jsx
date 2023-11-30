import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DashboardTitle from '../../../shared/DashboardTitle';

const ManageCoupon = () => {
  const [couponData, setCouponData] = useState([]);
  const axiosSecure = useAxiosSecure();
  axiosSecure.get('/dashboard/manage-coupons').then(res => {
    setCouponData(res.data[0]);
  });
  console.log(couponData);
  const handleCoupon = e => {
    e.preventDefault();
    const coupon = e.target.coupon.value;
    console.log(coupon);
    const updatedCoupon = { coupon: coupon };
    axiosSecure
      .put(`/dashboard/manage-coupons/${couponData._id}`, updatedCoupon)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          alert('Coupon has been updated');
        }
      });
  };
  return (
    <div>
      <DashboardTitle title="Manage Coupon"></DashboardTitle>
      <form onSubmit={handleCoupon} className="w-2/4 mx-auto">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Coupon</span>
          </label>
          <input
            defaultValue={couponData.coupon}
            name="coupon"
            type="text"
            placeholder="Coupon"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control  mt-6">
          <button type="submit" className="btn text-white bg-[#08a8e4] ">
            Update Coupon
          </button>
        </div>
      </form>
    </div>
  );
};

export default ManageCoupon;
