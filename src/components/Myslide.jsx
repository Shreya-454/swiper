import img1 from "../assets/images/img1.webp";
import img2 from "../assets/images/img2.webp";
import img3 from "../assets/images/img3.webp";
import img4 from "../assets/images/img4.webp";
import img5 from "../assets/images/img5.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Myslide = () => {
  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className=" d-flex justify-content-center align-items-center">
          <Swiper
            spaceBetween={100}
            slidesPerView={4}
            loop={true}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <img src={img1} alt="1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img1} alt="1" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Myslide