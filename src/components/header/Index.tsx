import { Link } from "react-router-dom";
import LogoComponent from "../logo/Index";
import SwitchLanguage from "./SwitchLanguage";
import useHeaderStore from "../../hooks/useHomeStore";
import { dataMenuHeader } from "./types";

const HeaderComponent = () => {
  const { languageComponent } = useHeaderStore();
  return (
    <header className="sticky top-0 z-50 py-3 border-b bg-color-third">
      <div className="container max-w-6xl">
        <div className="relative flex items-center justify-between">
          <LogoComponent />
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-7">
              {dataMenuHeader.map((res) => (
                <li className="text-sm font-semibold hover:text-primary" key={res.id}>
                  <Link to={res.url} className="flex items-center gap-px">
                  <span>{res.title}</span> {res.icon && <res.icon />}
                </Link>
                </li>
              ))}
            </ul>
            <SwitchLanguage />
          </div>
          {languageComponent ? (
            <div
              className={`absolute right-0 flex flex-col items-start gap-1 bg-color-third overflow-hidden border rounded-lg shadow-md top-10`}
            >
              <button className="text-[10px] hover:bg-color-primary w-full py-1 px-3 hover:text-color-third">
                Indonesia
              </button>
              <button className="text-[10px] hover:bg-color-primary w-full py-1 px-3 hover:text-color-third">
                English (US)
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
