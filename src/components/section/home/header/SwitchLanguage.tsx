import { BiChevronDown } from "react-icons/bi";
import { IconAll } from "../../../../assets/icons/Icons";

import { useDispatch } from "react-redux";
import { handleLanguage } from "../../../../redux/slices/headerFeatures";

const SwitchLanguage = () => {
  const dispatch = useDispatch();
  const handleSwitchLanguage = () => {
    dispatch(handleLanguage());
  };

  return (
    <button
      onClick={handleSwitchLanguage}
      className="flex items-center justify-center gap-px"
    >
      <img src={IconAll.benderaIndonesia} alt="Indonesia" className="w-5 h-5" />
      <span className="text-sm font-semibold ps-1">ID</span>
      <BiChevronDown className="text-[40px]" />
    </button>
  );
};

export default SwitchLanguage;
