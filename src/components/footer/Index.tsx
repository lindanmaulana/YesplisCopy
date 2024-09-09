import {
  PiInstagramLogoDuotone,
  PiTiktokLogoDuotone,
  PiXLogoDuotone,
  PiYoutubeLogoDuotone,
} from "react-icons/pi";

const FooterComponent = () => {
  return (
    <footer className="py-5">
      <div className="container max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-[26px] gap-7">
            <PiInstagramLogoDuotone />
            <PiXLogoDuotone />
            <PiTiktokLogoDuotone />
            <PiYoutubeLogoDuotone />
          </div>
          <h3 className="text-sm font-medium text-black/70">© 2024 Yesplis Indonesia. Hak cipta dilindungi undang-undang.</h3>
        </div>
      </div>
    </footer>
  );
};
export default FooterComponent;
