import { FaBed, FaLocationDot } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import DetailBanner from './DetailBanner';
const ApartmentDetails = () => {
  const viewApartment = useLoaderData();

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

  return (
    <div className="">
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={apartmentImage}
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div className="w-1/2 space-y-3">
            <h1 className="text-3xl font-bold">{apartmentName}</h1>

            <div className="max-w-md space-y-3">
              <div className="flex justify-between">
                <p>
                  Area: <span className="font-semibold ">{area}</span>
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
            <div className="card-actions justify-start pt-1">
              <Link>
                <button className="btn text-white bg-[#08a8e4] ">
                  Make Agreement
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DetailBanner></DetailBanner>
    </div>
  );
};

export default ApartmentDetails;
