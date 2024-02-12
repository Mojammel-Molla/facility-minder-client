import { FaBed, FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import DetailBanner from './DetailBanner';
import { Helmet } from 'react-helmet-async';
import ReviewArea from './ReviewArea';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const ApartmentDetails = () => {
  const viewApartment = useLoaderData();
  const axios = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    area,
    description,
    bedrooms,
    apartmentName,
  } = viewApartment || {};

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
    if (user) {
      axios.post('/agreements', agreement).then(res => {
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
    <div className="">
      <Helmet>
        <title>Facility Minder || Apartment Details</title>
      </Helmet>
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={apartmentImage}
            className="max-w-md rounded-lg md:w-full md:h-full  sm:w-80 sm:h-80 shadow-2xl"
          />
          <div className="w-1/2 space-y-3">
            <h1 className="text-3xl font-bold">{apartmentName}</h1>

            <div className="max-w-md space-y-3">
              <div className="flex justify-between">
                <p>
                  Area:{' '}
                  <span className="font-semibold ">
                    {area} <FaLocationDot />{' '}
                  </span>
                </p>
                <p>
                  Block: <span className="font-bold ">{blockName}</span>
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  Apartment No:{' '}
                  <span className="font-semibold">{apartmentNo}</span>
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
            </div>
            <p className="py-6">
              Description:<span className="font-semibold">{description}</span>
            </p>
            <div className="card-actions justify-center pt-1">
              <Link>
                <button
                  onClick={handleAgreement}
                  className="btn text-white bg-[#08a8e4] "
                >
                  Make Agreement
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between my-10">
        <DetailBanner></DetailBanner>
        <ReviewArea></ReviewArea>
      </div>
    </div>
  );
};

export default ApartmentDetails;
