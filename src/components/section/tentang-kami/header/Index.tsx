import { Link } from "react-router-dom";
import LogoComponent from "../../../logo/Index";
import { PiArrowLineUpRightBold } from "react-icons/pi";
import SwitchLanguage from "./SwitchLanguage";
import useHeaderStore from "../../../../hooks/useHeaderStore";

const HeaderComponent = () => {
  const { languageComponent } = useHeaderStore();
  return (
    <header className="sticky top-0 py-5 bg-third">
      <div className="container max-w-6xl">
        <div className="relative flex items-center justify-between">
          <LogoComponent />
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-7">
              <li className="text-sm font-semibold hover:text-primary">
                <Link to="/">Tiket Gelang</Link>
              </li>
              <li className="text-sm font-semibold hover:text-primary">
                <Link to="/">Custom Website</Link>
              </li>
              <li className="text-sm font-semibold hover:text-primary">
                <Link to="/" className="flex items-center gap-px">
                  <span>Beli Tiket</span> <PiArrowLineUpRightBold />
                </Link>
              </li>
              <li className="text-sm font-semibold hover:text-primary">
                <Link to="/" className="flex items-center gap-px">
                  <span>Buat Event</span> <PiArrowLineUpRightBold />
                </Link>
              </li>
            </ul>
            <SwitchLanguage />
          </div>
          <div className={`absolute right-0 flex flex-col items-start gap-1 overflow-hidden border rounded-lg shadow-md top-10 ${languageComponent ? "block" : "hidden"}`}>
            <button className="text-[10px] hover:bg-primary w-full py-1 px-3 hover:text-third">Indonesia</button>
            <button className="text-[10px] hover:bg-primary w-full py-1 px-3 hover:text-third">English (US)</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
