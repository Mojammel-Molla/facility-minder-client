import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ApartmentImg1 from '../../../assets/apartment1.png';
import ApartmentImg2 from '../../../assets/apartment2.png';
import ApartmentImg3 from '../../../assets/apartment3.png';
import ApartmentImg4 from '../../../assets/apartment4.png';
import ApartmentImg5 from '../../../assets/apartment5.png';
import ApartmentImg6 from '../../../assets/apartment6.jpg';
const Banner = () => {
  return (
    <div className="">
      <div className="w-1/2 mx-auto">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full "
        />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img className="w-full lg:h-[716px]" src={ApartmentImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full lg:h-[716px]" src={ApartmentImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full lg:h-[716px]" src={ApartmentImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full lg:h-[716px]" src={ApartmentImg4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full lg:h-[716px]" src={ApartmentImg5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full lg:h-[716px]" src={ApartmentImg6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
