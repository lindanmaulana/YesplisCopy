import { useSelector } from "react-redux";

type TStateHome = {
  home: {
    header: {
      language: boolean;
    };
  };
};

const useHeaderStore = () => {
  const selector = useSelector((state: TStateHome) => state.home.header);

  return {
    language: selector.language,
  };
};

export default useHeaderStore;
