import Auth from "../auth/Index";
import AnouncementBar from "./AnouncementBar";
import NavigasiBar from "./NavigasiBar";

const Header = () => {
  return (
      <header className="sticky top-0 z-50 bg-color-third">
        <AnouncementBar />
        <NavigasiBar />
        <Auth />
      </header>
  );
};

export default Header;
