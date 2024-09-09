import { useSelector } from "react-redux";
import { RootState } from "../redux/store/Store";

// type TStateHome = {
//   home: {
//     header: {
//       languageHome: boolean;
//       languageComponent: boolean
//     },
//     auth: {
//       login: boolean,
//       register: boolean
//     }
//   };
// };

const useHomeStore = () => {
  const selector = useSelector((state: RootState) => state.home);

  return {
    languageHome: selector.header.languageHome,
    languageComponent: selector.header.languageComponent,
    login: selector.auth.login,
    register: selector.auth.register
  };
};

export default useHomeStore;
