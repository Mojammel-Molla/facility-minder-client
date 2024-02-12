import { FaBed, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const SingleApartment = ({ item }) => {
  const {
    _id,
    apartmentImage,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    area,
    bedrooms,
    apartmentName,
  } = item || {};

  return (
    <div className="card w-80 h-96 bg-base-100 shadow-xl">
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
          <Link to={`/apartments/${_id}`}>
            <button className="btn text-white bg-[#08a8e4] hover:bg-blue-500">
              View Details
            </button>
          </Link>
          {/* <button
            onClick={handleAgreement}
            className="btn text-white bg-[#08a8e4] "
          >
            Agreement
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default SingleApartment;
