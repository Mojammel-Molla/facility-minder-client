const ReviewArea = () => {
  return (
    <div className="w-1/2">
      <h1 className="md:text-4xl font-bold underline text-center">
        Post Valuable Feedback{' '}
      </h1>
      <form className="card-body lg:w-2/3 mx-auto">
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
          <button type="submit" className="btn text-white bg-[#08a8e4]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewArea;
