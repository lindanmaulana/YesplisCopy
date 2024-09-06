import { ReactNode } from "react";

const Button = (props: { children: ReactNode; styleButton?: string }) => {
  return (
    <button
      className={`bg-[#E8EAF8] font-semibold text-sm px-6 py-2 rounded text-primary ${props.styleButton}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
