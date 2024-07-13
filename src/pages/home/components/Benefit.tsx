import img1 from "../../../assets/images/Benefits1.webp";
import img2 from "../../../assets/images/Benefits2.webp";

const Benefit = () => {
  return (
    <div className="section-gap">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="relative">
          <img
            src={img1}
            alt=""
            className="absolute lg:w-[400px] w-[60%] lg:h-[400px] object-cover rounded-md"
          />
          <img
            src={img2}
            alt=""
            className="absolute lg:w-[400px] w-[60%] lg:h-[400px] object-cover lg:top-[200px] lg:left-[200px] top-[100px] left-[40%] rounded-md"
          />
        </div>
        <div className="lg:mt-auto mt-[330px]">
          <p className="text-4xl font-bold mb-3 text-primaryColor">Benefit!</p>
          <p className="mb-5 text-xl font-semibold">
            Benefits of Fitness Products from Fitness Tolls!
          </p>
          <p className="">
            At Fitness Tolls, our range of fitness equipment offers numerous
            benefits to enhance your workout experience and overall health.
            Treadmills provide a versatile and convenient way to improve
            cardiovascular health, burn calories, and stay active indoors,
            regardless of weather conditions. Exercise bikes offer a low-impact
            cardiovascular workout that is gentle on the joints, making them
            ideal for users of all fitness levels. Dumbbells and kettlebells
            help in building strength and muscle tone while improving
            flexibility and balance. Weight benches and power racks are
            essential for safe and effective strength training, supporting a
            variety of exercises to target different muscle groups. Lastly,
            workout gloves ensure a secure grip and protect your hands during
            intense lifting sessions. With Fitness Tolls, you can achieve your
            fitness goals with high-quality, reliable equipment.
          </p>
          <p className="my-4 text-xl font-semibold">
            Why Choose Fitness Tolls?
          </p>
          <p>
            Choosing Fitness Tolls means opting for quality, variety, and
            customer satisfaction. Our products are designed to meet the needs
            of both beginners and seasoned fitness enthusiasts, ensuring that
            everyone can find the right equipment to support their fitness
            journey. We prioritize durability and functionality, providing
            equipment that stands up to rigorous use. Additionally, our
            user-friendly online store makes it easy to browse and purchase
            products, with detailed descriptions and customer reviews to guide
            your choices. At Fitness Tolls, we are committed to helping you
            achieve your fitness goals with the best equipment and support
            available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
