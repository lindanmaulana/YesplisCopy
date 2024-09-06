import { Swiper } from "swiper/react";
import { TSwiperProps } from "./types";

const SwiperComponent = (props: TSwiperProps) => {
  const { children, spaceBetween, slidesPerView, loop, modules, navigation, autoplay } = props;
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      modules={modules}
      navigation={navigation}
      autoplay={autoplay}
    >
      {children}
    </Swiper>
  );
};

export default SwiperComponent;
