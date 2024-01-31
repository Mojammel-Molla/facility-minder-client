import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';

import BannerImage1 from '../../../assets/detail-banner1.jpg';
import BannerImage2 from '../../../assets/detail-banner2.jpg';
import BannerImage3 from '../../../assets/detail-banner3.jpg';
import BannerImage4 from '../../../assets/detail-banner4.jpg';
const DetailBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(' ');
  return (
    <div className="w-1/3">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={BannerImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage4} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={BannerImage1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={BannerImage4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DetailBanner;
