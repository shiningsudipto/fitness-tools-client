import Card from "@/components/shared/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import { useGetProductsQuery } from "@/redux/features/product";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {
  const { data } = useGetProductsQuery(undefined);
  const firstFourProducts = data?.data.slice(0, 4);
  return (
    <div className="section-gap">
      <SectionTitle title="Featured Products" subTitle="top selling products" />
      <Card product={firstFourProducts} />
      <div className="mt-10 text-center">
        <Link
          to="/products"
          className="bg-secondaryColor text-white font-bold py-3 px-5 rounded-sm hover:bg-primaryColor"
        >
          Explore more
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProduct;
