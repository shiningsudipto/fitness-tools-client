import Benefit from "./components/Benefit";
import Categories from "./components/Categories";
import FeaturedProduct from "./components/FeaturedProduct";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import "./style.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProduct />
      <Benefit />
      <Gallery />
    </div>
  );
};

export default Home;
