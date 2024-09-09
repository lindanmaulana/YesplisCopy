import { Link } from "react-router-dom";
import { dataFooter, dataIkutiKami } from "./types";

const Footer = () => {
  return (
    <footer className="pt-5 border">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-6 gap-5 py-5">
          {dataFooter.map((res, index) => (
            <div
              className={`flex flex-col gap-2 ${
                index === dataFooter.length - 1 ? "col-span-2 ps-10" : "col-span-1"
              }`}
            >
              <h3 className="mb-3 text-sm font-bold">{res.title}</h3>
              {!res.listOne && !res.listTwo && !res.listThree ? (
                <div className="grid grid-cols-2 gap-2">
                    {/* Button Ikuti kami */}
                  {dataIkutiKami.map((result) => (
                    <Link
                      to={`${result.url}`}
                      key={result.id}
                      className={`flex items-center justify-start gap-4 ${result.background} px-4 py-2 rounded text-base font-semibold text-color-third`}
                    >
                      <result.icon />
                      <span>{result.title}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                ""
              )}
              <ul className="flex flex-col gap-3">
                <li className="text-xs font-medium">
                  <Link to={`${res.listOne?.url}`}>{res.listOne?.list}</Link>
                </li>
                <li className="text-xs font-medium">
                  <Link to={`${res.listTwo?.url}`}>{res.listTwo?.list}</Link>
                </li>
                <li className="text-xs font-medium">
                  <Link to={`${res.listThree?.url}`}>
                    {res.listThree?.list}
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <h4 className="py-4 text-xs font-medium text-center border-y">Yesplis © 2024. All rights reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
