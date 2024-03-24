import { NavLink } from 'react-router-dom';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import camp1 from '../../images/swipes/camp1.webp';
import camp2 from '../../images/swipes/camp2.webp';
import camp3 from '../../images/swipes/camp3.webp';

import css from './Swipe.module.css';

const Swipe = () => {
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
      <SwiperSlide>
        <div className={css.slide_wrap}>
          <img className={css.slide_img} src={camp1} alt="Our best camper" />
          <div className={css.slide_description}>
            <h2 className={css.description_title}>Best choice</h2>
            <p className={css.description_subtitle}>
              We are expert in camper rental
            </p>
            <NavLink to="/catalog" className={css.navigate}>
              Rent camper
            </NavLink>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={css.slide_wrap}>
          <img className={css.slide_img} src={camp2} alt="Our best camper" />
          <div className={css.slide_description}>
            <h2 className={css.description_title}>Best Journey</h2>
            <p className={css.description_subtitle}>
              We make your drive memorable
            </p>
            <NavLink to="/catalog" className={css.navigate}>
              Rent camper
            </NavLink>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={css.slide_wrap}>
          <img className={css.slide_img} src={camp3} alt="Our best camper" />
          <div className={css.slide_description}>
            <h2 className={css.description_title}>Best Prices</h2>
            <p className={css.description_subtitle}>
              Enjoy your holidays with us
            </p>
            <NavLink to="/catalog" className={css.navigate}>
              Rent camper
            </NavLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipe;
