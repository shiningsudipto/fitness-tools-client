import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import b1 from "../../../assets/images/b1.webp";
import b2 from "../../../assets/images/b2.webp";
import b3 from "../../../assets/images/b3.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full">
      <Carousel className="">
        <CarouselContent className="">
          <CarouselItem className="relative">
            <img src={b1} className="w-full h-[100vh] object-cover" alt="" />{" "}
            <div className="absolute top-[20%] left-[100px]">
              <p className=" text-white text-4xl font-semibold">
                Unleash Your Full Potential with Premium Fitness Gear!
              </p>
              <p className="text-white text-3xl font-semibold mt-6 italic mb-[200px]">
                "Equip yourself with the tools to reach new heights in your
                fitness journey."
              </p>
              <Link
                to="/products"
                className="bg-secondaryColor text-white font-bold py-3 px-5 rounded-sm hover:bg-primaryColor"
              >
                Explore our products
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img src={b2} className="w-full h-[100vh] object-cover" alt="" />{" "}
          </CarouselItem>
          <CarouselItem>
            <img src={b3} className="w-full h-[100vh] object-cover" alt="" />{" "}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
