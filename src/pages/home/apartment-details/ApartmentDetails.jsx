import { FaBed, FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';

const ApartmentDetails = () => {
  const viewApartment = useLoaderData();
  console.log(viewApartment);
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
  } = viewApartment || {};
  return (
    <div className="w-1/2 max-h-96 mx-auto my-10">
      <div className="card mx-auto w-96 h-96 bg-base-100 shadow-xl">
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

          <div className="card-actions justify-center pt-1">
            <Link>
              <button className="btn text-white bg-[#08a8e4] ">
                Make Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;
