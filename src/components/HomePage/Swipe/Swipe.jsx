import { NavLink } from 'react-router-dom';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { campersSwipe } from 'const';

import css from './Swipe.module.css';

export const Swipe = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
    >
      {campersSwipe.map(camper => (
        <SwiperSlide key={camper._id}>
          <div className={css.slide_wrap}>
            <img
              className={css.slide_img}
              src={camper.camperImg}
              alt={camper.altImg}
            />
            <div className={css.slide_description}>
              <h2 className={css.description_title}>{camper.title}</h2>
              <p className={css.description_subtitle}>{camper.text}</p>
              <NavLink to="/catalog" className={css.navigate}>
                {camper.navBtn}
              </NavLink>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
