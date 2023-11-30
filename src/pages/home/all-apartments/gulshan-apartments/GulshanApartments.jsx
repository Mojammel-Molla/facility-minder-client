import { useState } from 'react';
import UseApartment from '../../../../hooks/UseApartment';
import AreaTitle from '../../../../shared/area-title/AreaTitle';
import SingleApartment from '../single-apartment/SingleApartment';

const GulshanApartments = () => {
  const [show, setShow] = useState(false);
  const [apartments] = UseApartment();

  const filteredApartment = apartments.filter(item => item.area == 'Gulshan');

  return (
    <div className="mt-20">
      <AreaTitle title="Our apartments in Gulshan area.."></AreaTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {show ? (
          <>
            {filteredApartment?.map(item => (
              <SingleApartment key={item.id} item={item}></SingleApartment>
            ))}
          </>
        ) : (
          <>
            {filteredApartment?.slice(0, 6).map(item => (
              <SingleApartment key={item.id} item={item}></SingleApartment>
            ))}
          </>
        )}
      </div>
      <div className=" text-center w-full mx-auto my-8">
        <button onClick={() => setShow(!show)} className="btn  btn-outline">
          {show ? 'See Less' : 'See All'}
        </button>
      </div>
    </div>
  );
};

export default GulshanApartments;
