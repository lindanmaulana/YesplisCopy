import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Button = (props: { children: ReactNode; styleButton?: string, onClick?: () => void, url?: string }) => {
  return (
    <Link to={`${props.url}`} onClick={props.onClick}
      className={`bg-[#E8EAF8] font-semibold text-sm px-6 py-2 rounded text-color-primary ${props.styleButton}`}
    >
      {props.children}
    </Link>
  );
};

export default Button;
