import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import DashboardTitle from '../../shared/DashboardTitle';

const Announcements = () => {
  const axiosSecure = useAxiosSecure();
  const [allAnnouncements, setAllAnnouncements] = useState([]);

  axiosSecure.get('dashboard/announcements').then(res => {
    setAllAnnouncements(res.data);
  });
  return (
    <div className="text-center my-10">
      <DashboardTitle title="All Announcements"></DashboardTitle>
      {allAnnouncements.map(item => (
        <div key={item._id} className="space-y-3 mt-5">
          <h1 className="text-3xl font-semibold">{item.title}</h1>
          <p className="text-lg mx-auto font-medium w-1/2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Announcements;
