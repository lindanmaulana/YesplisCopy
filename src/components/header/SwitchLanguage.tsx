import { BiChevronDown } from "react-icons/bi";
import { IconAll } from "../../assets/icons/Icons";
import { useDispatch } from "react-redux";
import { appDispatch } from "../../redux/store/Store";
import { handleLanguageComponent } from "../../redux/slices/headerFeatures";

const SwitchLanguage = () => {
  const dispatch = useDispatch<appDispatch>();
  const handleSwitchLanguage = () => {
    dispatch(handleLanguageComponent());
  };

  return (
    <button
      onClick={handleSwitchLanguage}
      className="flex items-center gap-2 p-3 border rounded-full"
    >
      <img src={IconAll.benderaIndonesia} alt="Indonesia" className="h-3" />
      <span className="text-xs font-semibold">ID</span>
      <BiChevronDown className="text-sm" />
    </button>
  );
};

export default SwitchLanguage;
