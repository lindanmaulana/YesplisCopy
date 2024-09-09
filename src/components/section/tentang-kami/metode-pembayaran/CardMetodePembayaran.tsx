import { ImageMetodePembayaran } from "../../../../assets/images/Images";
import Marquee from "../../../magicui/marquee";

const CardMetodePembayaran = () => {
  return (
    <div className="relative h-[400px] w-full grid grid-cols-3 overflow-hidden rounded-lg">
      <div className="">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          <img src={ImageMetodePembayaran.metodePembayaran1} alt="" />
        </Marquee>
      </div>
      <div className="">
        <Marquee pauseOnHover vertical reverse className="[--duration:20s]">
          <img src={ImageMetodePembayaran.metodePembayaran2} alt="" />
        </Marquee>
      </div>
      <div className="">
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          <img src={ImageMetodePembayaran.metodePembayaran3} alt="" />
        </Marquee>
      </div>
      <div className="absolute inset-x-0 top-0 pointer-events-none h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};

export default CardMetodePembayaran;
