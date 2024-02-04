import { useState } from 'react';
// import UseApartment from '../../hooks/UseApartment';
import AreaTitle from '../../shared/area-title/AreaTitle';
import SingleApartment from '../home/all-apartments/single-apartment/SingleApartment';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';
import SecondaryBanner from '../../shared/secondary-banner/SecondaryBanner';

const AllApartments = () => {
  // const [apartments] = UseApartment();
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(0);

  const {
    data: { result, postCount },
  } = useQuery({
    queryKey: ['all-apartments', page],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-apartments?page=${page}`);
      console.log('data before set', res.data);
      return res.data;
    },
    initialData: { result: [], postCount: 0 },
  });

  console.log(result, postCount, page);
  // const filteredApartment = apartments.filter(item => item.area == 'Gulshan');

  const handlePrevious = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Facility Minder || All Apartments</title>
      </Helmet>
      <SecondaryBanner title="All Apartments"></SecondaryBanner>

      <div className="mt-10">
        <AreaTitle title="Our all apartments in your area.."></AreaTitle>
        {/* <form className="w-1/3 flex gap-3 mx-auto my-10">
          <input
            type="text"
            name="search"
            placeholder="Search Apartment by Location"
            className="input input-bordered input-info w-full "
            // onChange={handleChange}
          />
          <button className="btn bg-main text-white">Search</button>
        </form> */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 max-w-[1620px] mx-auto">
          {result?.map(item => (
            <SingleApartment key={item.id} item={item}></SingleApartment>
          ))}
        </div>
        <div className="flex justify-center my-10 gap-3">
          <button
            onClick={handlePrevious}
            className="btn-sm rounded-full bg-slate-300 text-white hover:bg-green-500"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="btn-sm rounded-full bg-slate-300 text-white  hover:bg-green-500"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllApartments;
