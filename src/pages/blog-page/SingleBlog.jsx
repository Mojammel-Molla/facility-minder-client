/* eslint-disable react/prop-types */
const SingleBlog = ({ blog }) => {
  return (
    <div className="card card-compact max-w-5xl mx-auto bg-base-100 my-10 shadow-xl">
      <img className="w-full" src={blog.blogImage} alt="Blog Image" />

      <div className="card-body">
        <h2 className="card-title">{blog.title}</h2>
        <span>
          {blog.tags.map(tag => (
            <button
              className="px-5 py-1 bg-main rounded-full font-bold mr-3"
              key={tag}
            >
              {tag}
            </button>
          ))}
        </span>
        <p className="text-base">{blog.description}</p>
        <div className="card-actions justify-end">
          <div className="flex gap-3 justify-end">
            <div>
              <p className="mt-1">
                Writer:{' '}
                <span className="font-semibold ">{blog.writerName}</span>
              </p>
              <p>
                Published Date:{' '}
                <span className="font-semibold ">{blog.date}</span>
              </p>
            </div>
            <img
              className="w-10 h-10 rounded-full"
              src={blog.writerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
