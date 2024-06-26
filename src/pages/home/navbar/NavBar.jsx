import { Link, NavLink } from 'react-router-dom';
import UserImg from '../../../assets/userImage.jpg';
import LogoImg from '../../../assets//building-logo2.png';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'text-[#fff] underline' : '')}
      >
        <li>Home</li>
      </NavLink>
      <NavLink
        to="/all-apartments"
        className={({ isActive }) => (isActive ? 'text-[#fff] underline' : '')}
      >
        <li>All Apartments</li>
      </NavLink>
      {/* <NavLink>
        <li className="mr-3 font-semibold">My Reservation</li>
      </NavLink> */}
      <NavLink
        to="/contact-us"
        className={({ isActive }) => (isActive ? 'text-[#fff] underline' : '')}
      >
        <li className="mr-3 font-semibold">Contact Us</li>
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) => (isActive ? 'text-[#fff] underline' : '')}
      >
        <li>Blogs</li>
      </NavLink>
      <NavLink
        to="/dashboard/user-profile"
        className={({ isActive }) =>
          isActive ? 'text-[#101010] underline' : ''
        }
      >
        <li>Dashboard</li>
      </NavLink>
    </>
  );
  const handleLogOut = () => {
    return logOutUser();
  };
  return (
    <div className="navbar   fixed top-0 z-10 bg-transparent shadow-md md:px-5">
      <div className="navbar-start w-full">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52 text-main"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <img className="w-24 h-10 rounded-sm mx-auto" src={LogoImg} alt="" />
          <a className="font-bold text-xl text-[#fff]">
            Facility <span className="text-main">Minder</span>
          </a>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-semibold mr-3 text-main">
          {navLinks}
        </ul>
      </div>
      {/* <div className="navbar-end dropdown items-end menu">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={UserImg} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="btn-ghost menu menu-horizontal z-10 overflow-clip   dropdown-content  mt-3 shadow bg-base-100 rounded-box"
        >
          <Link>
            <li>Profile</li>
          </Link>
          <Link>
            <li>Dash</li>
          </Link>
          <Link>
            <li>Login</li>
          </Link>
        </ul>
      </div> */}
      <div className="dropdown dropdown-end items-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user ? (
              <img src={user?.photoURL} alt="" />
            ) : (
              <img alt="Tailwind CSS Navbar component" src={UserImg} />
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu absolute menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <Link>
            {user ? (
              <li>
                <button>{user?.displayName}</button>
              </li>
            ) : (
              <li>
                <button>My Profile</button>
              </li>
            )}
          </Link>
          <Link>
            <li>
              <button>Dashboard</button>
            </li>
          </Link>
          <Link to="/register">
            {user ? (
              <li>
                <button onClick={handleLogOut}>Log out</button>
              </li>
            ) : (
              <li>
                <button>Log in</button>
              </li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
