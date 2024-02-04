import { useEffect, useState } from 'react';
import SecondaryBanner from '../../shared/secondary-banner/SecondaryBanner';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SingleBlog from './SingleBlog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [seeMore, setSeemore] = useState(false);
  const axios = useAxiosPublic();
  useEffect(() => {
    axios.get('/blogs').then(res => {
      setBlogs(res.data);
    });
  }, [axios]);
  console.log(blogs, seeMore);
  return (
    <>
      <SecondaryBanner title="Blogs"></SecondaryBanner>
      <div className="flex ">
        <div className=" flex-1 ">
          {seeMore
            ? blogs
                .slice(0, 2)
                .map(blog => (
                  <SingleBlog key={blog._id} blog={blog}></SingleBlog>
                ))
            : blogs.map(blog => (
                <SingleBlog key={blog._id} blog={blog}></SingleBlog>
              ))}

          <div className="text-center">
            <button
              onClick={() => setSeemore(!seeMore)}
              className="btn bg-main my-3"
            >
              {seeMore ? 'See More' : 'See Less'}
            </button>
          </div>
        </div>
        <div className="w-96">Action part</div>
      </div>
    </>
  );
};

export default Blogs;
