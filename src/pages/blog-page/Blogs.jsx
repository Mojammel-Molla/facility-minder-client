import { useEffect, useState } from 'react';
import SecondaryBanner from '../../shared/secondary-banner/SecondaryBanner';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SingleBlog from './SingleBlog';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const axios = useAxiosPublic();
  useEffect(() => {
    axios.get('/blogs').then(res => {
      setBlogs(res.data);
    });
  }, [axios]);
  console.log(blogs);
  return (
    <>
      <SecondaryBanner title="Blogs"></SecondaryBanner>
      <div className="flex ">
        <div className=" flex-1 ">
          {blogs.map(blog => (
            <SingleBlog key={blog._id} blog={blog}></SingleBlog>
          ))}
        </div>
        <div className="w-96">Action part</div>
      </div>
    </>
  );
};

export default Blogs;
