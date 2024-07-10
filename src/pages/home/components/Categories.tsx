import SectionTitle from "@/components/shared/SectionTitle";
import cImg1 from "../../../assets/images/category/Dumbbells.webp";
import cImg2 from "../../../assets/images/category/Exercise-Bikes.png";
import cImg3 from "../../../assets/images/category/Kettlebells.png";
import cImg4 from "../../../assets/images/category/Power-Racks.png";
import cImg5 from "../../../assets/images/category/Treadmills.png";
import cImg6 from "../../../assets/images/category/Weight-Benches.png";
import cImg7 from "../../../assets/images/category/Workout-Gloves.png";

const categories = [
  { image: cImg1, label: "Dumbbells" },
  { image: cImg2, label: "Exercise Bikes" },
  { image: cImg3, label: "Kettlebells" },
  { image: cImg4, label: "Power Racks" },
  { image: cImg5, label: "Treadmills" },
  { image: cImg6, label: "Weight Benches" },
  //   { image: cImg7, label: "Workout Gloves" },
];

const Categories = () => {
  return (
    <div className="px-[60px] my-5">
      <SectionTitle title="categories" subTitle="tools we provides" />
      <div className="grid grid-cols-3 gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group flex flex-col gap-y-3 items-center justify-center bg-secondaryColor hover:bg-secondaryColor600 rounded-md p-5 cursor-pointer transition duration-300 delay-75"
          >
            <img
              src={category.image}
              alt={category.label}
              className="w-[250px]"
            />
            <p className="text-xl font-bold text-white group-hover:text-primaryColor200 transition duration-300 delay-75">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
