import { BiChevronDown } from "react-icons/bi";
import { IconAll } from "../../../../assets/icons/Icons";

import { useDispatch } from "react-redux";
import { handleLanguageHome } from "../../../../redux/slices/headerFeatures";
import { appDispatch } from "../../../../redux/store/Store";

const SwitchLanguage = () => {
  const dispatch = useDispatch<appDispatch>();
  const handleSwitchLanguage = () => {
    dispatch(handleLanguageHome());
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
