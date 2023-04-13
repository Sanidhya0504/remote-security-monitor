import HomeHeader from "./headers/home.header";
import Footer from "./home.components/Footer";
import HeroSection from "./home.components/HeroSection";
import HomeNav from "./navbar/home.navbar";

const Home = () => {
  return (
    <>
      <HomeNav />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;
