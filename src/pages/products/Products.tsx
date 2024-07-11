import Card from "@/components/shared/Card";
import { useGetProductsQuery } from "@/redux/features/product";

const Products = () => {
  const { data } = useGetProductsQuery(undefined);
  const allProducts = data?.data;
  return (
    <div className="section-gap">
      <p>Hello, Products!</p>
      <Card product={allProducts} />
    </div>
  );
};

export default Products;
