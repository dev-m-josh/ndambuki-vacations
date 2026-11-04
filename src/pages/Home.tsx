import Destinations from "../components/Destinations";
import Experiences from "../components/Experiences";
import FeaturedPackages from "../components/FeaturedPackages";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
      <>
        <Hero />
      <Destinations />
      <Experiences />
      <WhyChooseUs />
      <FeaturedPackages />
      <HowItWorks />
      </>
  );
}

export default Home