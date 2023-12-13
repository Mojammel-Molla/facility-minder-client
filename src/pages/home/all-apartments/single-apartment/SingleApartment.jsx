import { useContext } from 'react';
import { FaBed, FaLocationDot } from 'react-icons/fa6';

import { AuthContext } from '../../../../providers/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const SingleApartment = ({ item }) => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const {
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    area,
    bedrooms,
    apartmentName,
  } = item || {};

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const agreement = {
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    area,
    bedrooms,
    apartmentName,
    name: user?.displayname,
    email: user?.email,
    status: 'pending',
    date: formattedDate,
  };
  const handleAgreement = () => {
    // fetch('
    //localhost:5000/agreements', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(agreement),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       alert('Your agreement has been taken');
    //     }
    //   });

    http: if (user) {
      axiosSecure.post('/agreements', agreement).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          alert('Your agreement has been taken');
        }
      });
    } else {
      navigate('/login');
    }
  };
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl">
      {/* <figure> */}
      <img
        className="h-44 w-96 rounded-t-lg"
        src={apartmentImage}
        alt="apartment"
      />
      {/* </figure> */}
      <div className="card-body">
        <h2 className="card-title text-2xl font-semibold">
          <FaLocationDot /> {area}
        </h2>
        <div className="flex justify-between">
          <p>
            Name: <span className="font-semibold ">{apartmentName}</span>
          </p>
          <p>
            Block: <span className="font-bold ">{blockName}</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            Apartment No: <span className="font-semibold">{apartmentNo}</span>
          </p>
          <p>
            Floor: <span className="font-semibold">{floorNo}</span>
          </p>
        </div>
        <div className="flex justify-between gap-14">
          <p className="flex gap-2">
            Bedrooms: <span className="font-semibold">{bedrooms}</span>
            <FaBed className="mt-1"></FaBed>
          </p>
          <p>
            Rent:$<span className="font-semibold">{rent}</span>
          </p>
        </div>

        <div className="card-actions flex justify-center pt-1">
          {/* <Link to={`/apartments/${_id}`}>
            <button className="btn text-white bg-[#08a8e4] ">
              View Details
            </button>
          </Link> */}
          <button
            onClick={handleAgreement}
            className="btn text-white bg-[#08a8e4] "
          >
            Agreement
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleApartment;
