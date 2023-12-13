import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { FaGoogle } from 'react-icons/fa6';
import useAxiosPublic from '../../hooks/useAxiosPublic';
const Login = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const { logInUser, googleLogIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const onSubmit = data => {
    console.log(data);
    logInUser(data.email, data.password)
      .then(res => {
        alert('User logged in');
        console.log(res.user);
        navigate(from, { replace: true });
      })
      .catch(err => {
        console.log(err.user);
      });
    reset();
  };
  const handleGoogleLogIn = async () => {
    await googleLogIn()
      .then(res => {
        console.log(res.user);
        const userInfo = { name: res.user.displayName, email: res.user.email };
        axiosPublic.post('/users', userInfo).then(res => {
          if (res.data.insertedId > 0) {
            console.log('user info added to the database');
          }
        });
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
    reset();
  };
  return (
    <>
      <Helmet>
        <title>Facility Minder || Log in</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold">Please Login </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn text-white bg-[#08a8e4] hover:bg-blue-900"
                >
                  Login
                </button>
              </div>
              <button onClick={handleGoogleLogIn} className="btn btn-outline">
                <FaGoogle /> Google
              </button>
              <p>
                Already have an account? Please
                <Link to="/register" className="text-blue-500 font-medium">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
