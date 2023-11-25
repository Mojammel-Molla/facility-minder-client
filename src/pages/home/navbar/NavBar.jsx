import { NavLink } from 'react-router-dom';
import UserImg from '../../../assets/userImage.jpg';
import LogoImg from '../../../assets//building-logo2.png';
const NavBar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'text-[#08a8e4]' : '')}
      >
        <li className="mr-3 font-semibold">Home</li>
      </NavLink>
      <NavLink>
        <li className="mr-3 font-semibold">Booking</li>
      </NavLink>
      <NavLink>
        <li className="mr-3 font-semibold">Rent</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b-2 ">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <img className="w-24 h-10 rounded-sm mx-auto" src={LogoImg} alt="" />
          <a className="font-bold text-xl">Facility Minder</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end items-end menu">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={UserImg} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="btn-ghost  z-10 overflow-clip   dropdown-content  mt-3 shadow bg-base-100 rounded-box"
          >
            <li>
              <a className="">Profile</a>
            </li>
            <li>
              <a>Dash</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
