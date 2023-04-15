import HomeHeader from "./headers/home.header";
import Footer from "./home.components/Footer";
import HeroSection from "./home.components/HeroSection";
import HomeBody from "./home.components/home.body";
import HomeNav from "./navbar/home.navbar";

const Home = () => {
  return (
    <>
      <HomeNav />
      <HeroSection />
      <HomeBody />
      <Footer />
    </>
  );
};

export default Home;
