import useAxiosPublic from '../../../hooks/useAxiosPublic';

const ReviewArea = () => {
  const axios = useAxiosPublic();

  const handleReviewSubmit = e => {
    const newReview = {
      email: e.target.email,
      massage: e.target.massage,
    };
    axios.post('/reviews', newReview).then(res => {
      console.log(res.data);
    });
  };
  return (
    <div className="w-1/2">
      <h1 className="md:text-4xl font-bold underline my-2 text-center">
        Your Valuable Feedback{' '}
      </h1>
      <form
        onSubmit={handleReviewSubmit}
        className="card-body lg:w-2/3 mx-auto rounded-lg shadow-2xl"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            readOnly
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Massage</span>
          </label>
          <textarea
            name="massage"
            className="textarea textarea-info"
            placeholder="Write here"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn bg-main">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewArea;
