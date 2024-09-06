import { Link } from "react-router-dom";
import { dataHeroCard } from "./types";
import { SwiperSlide } from "swiper/react";
import SwiperComponent from "../../../swiper/Index";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const HeroSection = () => {
  return (
    <section className="py-5">
      <div className="container max-w-6xl">
        <div className="w-full h-full">
          <SwiperComponent
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
          >
            {dataHeroCard.map((res) => (
              <SwiperSlide key={res.id}>
                <Link to={res.url} className="w-full">
                  <img
                    src={res.image}
                    alt={res.title}
                    className="w-full h-72"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
