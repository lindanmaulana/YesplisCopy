import { Fragment } from "react/jsx-runtime";
import Header from "../components/section/home/header/Index";
import useHeaderStore from "../hooks/useHeaderStore";
import Event from "../components/section/home/event/Index";
import HeroSection from "../components/section/home/hero/Index";
import Footer from "../components/section/home/footer/Index";

const HomePages = () => {
  const { language } = useHeaderStore();
  return (
    <Fragment>
      <Header />
      <main
        className={`${
          language ? "brightness-50 bg-black/50" : "bg-transparent"
        } z-50`}
      >
        <HeroSection />
        <Event />
        <Footer />
      </main>
    </Fragment>
  );
};

export default HomePages;
