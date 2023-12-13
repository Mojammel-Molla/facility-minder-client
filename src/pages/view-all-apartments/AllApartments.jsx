import { useState } from 'react';
// import UseApartment from '../../hooks/UseApartment';
import AreaTitle from '../../shared/area-title/AreaTitle';
import SingleApartment from '../home/all-apartments/single-apartment/SingleApartment';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

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
      <div className="mt-20">
        <AreaTitle title="Our all apartments in your area.."></AreaTitle>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
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
