import { Link, useNavigate } from 'react-router-dom';
import LogInBanner from '../../assets/apartment-9.jpeg';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, handleUserProfile } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(res => {
        alert('User created');
        console.log(res.user);
        handleUserProfile(data.name, data.photo);
        const userInfo = { name: data.name, email: data.email, role: 'user' };
        axiosPublic.post('/users', userInfo).then(res => {
          if (res.data.insertedId > 0) {
            console.log('user info added to the data base');
          }
        });
        navigate('/');
        reset();
      })
      .catch(err => {
        console.log(err.user);
      });
  };

  return (
    <>
      <Helmet>
        <title>Facility Minder || Register</title>
      </Helmet>
      <div
        // style={{
        //   backgroundImage: `url(${LogInBanner})`,
        // }}
        className="hero min-h-screen bg-base-200 "
      >
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register('name')}
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register('password')}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  {...register('photo')}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* <input
              {...register('photo')}
              name="photo"
              type="file"
              className=" border-2    "
            /> */}
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-white bg-[#08a8e4] hover:bg-blue-900"
                >
                  Register
                </button>
              </div>
              <p>
                Already have an account? Please
                <Link to="/login" className="text-blue-500 font-medium">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
