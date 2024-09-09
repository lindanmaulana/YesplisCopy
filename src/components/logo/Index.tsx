import { Link } from "react-router-dom";

const LogoComponent = () => {
  return (
    <Link to="/" className="text-xl font-bold">
      <span className="pt-2 rounded-t text-color-third bg-color-primary ps-2">LinmI</span>
      <span className="bg-third text-color-primary">dShop</span>
    </Link>
  );
};

export default LogoComponent;
