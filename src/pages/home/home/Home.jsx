import BananiApartments from '../all-apartments/banani-apartments/BananiApartments';
import DiyabariApartments from '../all-apartments/diyabari-apartments/DiyabariApartments';
import GulshanApartments from '../all-apartments/gulshan-apartments/GulshanApartments';
import ApartmentLocation from '../apartment-location/ApartmentLocation';
import Banner from '../banner/Banner';
import Coupon from '../coupon/Coupon';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Facility Minder || Home</title>
      </Helmet>
      <Banner></Banner>
      <Coupon></Coupon>
      <GulshanApartments></GulshanApartments>
      <BananiApartments></BananiApartments>
      <DiyabariApartments></DiyabariApartments>
      <ApartmentLocation></ApartmentLocation>
    </div>
  );
};

export default Home;
