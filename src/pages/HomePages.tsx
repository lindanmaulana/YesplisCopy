import { Fragment } from "react/jsx-runtime";
import Event from "../components/section/home/event/Index";
import Footer from "../components/section/home/footer/Index";
import Header from "../components/section/home/header/Index";
import HeroSection from "../components/section/home/hero/Index";
import useHomeStore from "../hooks/useHomeStore";

const HomePages = () => {
  const { languageHome } = useHomeStore();
  return (
    <Fragment>
      <Header />
      <main
        className={`${
          languageHome ? "brightness-50 bg-black/50" : "bg-transparent"
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
