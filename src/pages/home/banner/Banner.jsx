import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerImg1 from '../../../assets/banner-1.jpg';
import BannerImg2 from '../../../assets/banner-2.jpg';
import BannerImg3 from '../../../assets/banner-3.jpg';
import BannerImg4 from '../../../assets/banner-4.jpg';
const Banner = () => {
  const handleChange = e => {
    e.preventDefault();
    const search = e.target.value;
    console.log(search);
  };
  return (
    <>
      <form className="w-1/3 flex gap-3 mx-auto my-3">
        <input
          type="text"
          name="search"
          placeholder="Search Apartment by Location"
          className="input input-bordered input-info w-full "
          onChange={handleChange}
        />
        <button className="btn bg-main text-white">Search</button>
      </form>
      <div className="mt-5">
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
            <img className="w-full lg:h-[816px]" src={BannerImg1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full lg:h-[816px]" src={BannerImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full lg:h-[816px]" src={BannerImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="w-full lg:h-[816px]" src={BannerImg4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
