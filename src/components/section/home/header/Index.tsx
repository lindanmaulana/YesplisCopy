import AnouncementBar from "./AnouncementBar";
import NavigasiBar from "./NavigasiBar";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <AnouncementBar />
      <NavigasiBar />
    </header>
  );
};

export default Header;
