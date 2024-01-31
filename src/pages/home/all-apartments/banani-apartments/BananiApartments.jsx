import { useState } from 'react';
import UseApartment from '../../../../hooks/UseApartment';
import AreaTitle from '../../../../shared/area-title/AreaTitle';
import SingleApartment from '../single-apartment/SingleApartment';
import { Link } from 'react-router-dom';

const BananiApartments = () => {
  const [apartments] = UseApartment();

  const filteredApartment = apartments.filter(item => item.area == 'Banani');

  return (
    <div>
      <AreaTitle title="Apartments in Banani"></AreaTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 max-w-[1620px] mx-auto">
        {filteredApartment?.slice(0, 4).map(item => (
          <SingleApartment key={item.id} item={item}></SingleApartment>
        ))}
      </div>
      <div className=" text-center w-full mx-auto my-8">
        <Link to="/all-apartments">
          <button className="btn  btn-outline">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default BananiApartments;
