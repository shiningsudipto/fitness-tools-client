import Categories from "./components/Categories";
import FeaturedProduct from "./components/FeaturedProduct";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProduct />
    </div>
  );
};

export default Home;
