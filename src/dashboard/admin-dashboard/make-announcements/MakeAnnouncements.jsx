import useAxiosSecure from '../../../hooks/useAxiosSecure';
import DashboardTitle from '../../../shared/DashboardTitle';

const MakeAnnouncements = () => {
  const axiosSecure = useAxiosSecure();

  const handleAnnouncement = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const announcement = { title, description };

    axiosSecure
      .post('/dashboard/make-announcements', announcement)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert('Announcement has been posted');
        }
      });
  };
  return (
    <div>
      <DashboardTitle title="Make Announcements"></DashboardTitle>
      <form onSubmit={handleAnnouncement} className="w-2/4 mx-auto">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            name="title"
            type="text"
            placeholder="Announcement title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Write down announcement here"
          ></textarea>
        </div>
        <div className="form-control  mt-6">
          <button type="submit" className="btn text-white bg-[#08a8e4] ">
            Make Announcement
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAnnouncements;
