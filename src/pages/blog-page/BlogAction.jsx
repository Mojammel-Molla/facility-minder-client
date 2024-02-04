const BlogAction = () => {
  return (
    <div className="w-96 space-y-5 mt-20 mx-auto my-5">
      <form>
        <div className="form-control shadow-2xl p-3">
          <label className="label">
            <span className="label-text font-semibold text-xl">Filter</span>
          </label>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            required
          />
        </div>
      </form>

      <ul className="shadow-2xl p-5 space-y-2 font-medium">
        <h1 className="text-2xl border-b py-2">Categories</h1>
        <li className="text-neutral-500">Home</li>
        <li className="text-neutral-500">Villa</li>
        <li className="text-neutral-500">Property</li>
        <li className="text-neutral-500">Guest House</li>
      </ul>
    </div>
  );
};

export default BlogAction;
