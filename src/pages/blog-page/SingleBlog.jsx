/* eslint-disable react/prop-types */
const SingleBlog = ({ blog }) => {
  return (
    <div className="card card-compact max-w-5xl mx-auto bg-base-100 shadow-xl">
      <img className="w-full" src={blog.blogImage} alt="Blog Image" />

      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <span>
          {blog.tags.map(tag => (
            <button className="btn mr-3" key={tag}>
              {tag}
            </button>
          ))}
        </span>
        <p>{blog.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
