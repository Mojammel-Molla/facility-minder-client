import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useEffect, useState } from 'react';

const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  const axios = useAxiosPublic();
  useEffect(() => {
    axios.get('/reviews').then(res => {
      setReviews(res.data);
    });
  }, [axios]);
  console.log(reviews);

  return (
    <div className="md:my-16">
      <h1 className="text-4xl text-center font-bold my-5">Our Happy Clients</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {reviews?.map(review => (
          <SwiperSlide key={review._id}>
            <div className="card w-96 h-72 bg-base-100 shadow-2xl cursor-grab my-3">
              <div className="card-body">
                <img
                  className="h-10 w-10 rounded-full"
                  src={review.image}
                  alt=""
                />
                <h2 className="card-title">{review.name}</h2>
                <p>{review.comment}</p>
                <div className="justify-start">
                  <button className="font-medium">Date: {review.date}</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ClientReviews;
