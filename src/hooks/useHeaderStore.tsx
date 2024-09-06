import { useSelector } from "react-redux";

type TStateHome = {
  home: {
    header: {
      languageHome: boolean;
      languageComponent: boolean
    };
  };
};

const useHeaderStore = () => {
  const selector = useSelector((state: TStateHome) => state.home.header);

  return {
    languageHome: selector.languageHome,
    languageComponent: selector.languageComponent
  };
};

export default useHeaderStore;
