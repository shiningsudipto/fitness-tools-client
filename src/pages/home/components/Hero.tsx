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
            <img
              src={b1}
              className="w-full lg:h-[100vh] h-[35vh] object-cover"
              alt=""
            />{" "}
            <div className="absolute lg:top-[20%] top-[8%] lg:left-[100px] left-8">
              <p className=" text-white lg:text-4xl text-2xl font-semibold">
                Unleash Your Full Potential with Premium Fitness Gear!
              </p>
              <p className="text-white lg:text-3xl text-xl font-semibold lg:mt-6 mt-4 italic lg:mb-[200px] mb-[70px]">
                "Equip yourself with the tools to reach new heights in your
                fitness journey."
              </p>
              <Link
                to="/products"
                className="bg-secondaryColor text-white lg:font-bold font-semibold lg:py-3 lg:px-5  py-2 px-4 rounded-sm hover:bg-primaryColor"
              >
                Explore our products
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <img
              src={b2}
              className="w-full lg:h-[100vh] h-[35vh] object-cover"
              alt=""
            />{" "}
          </CarouselItem>
          <CarouselItem>
            <img
              src={b3}
              className="w-full lg:h-[100vh] h-[35vh] object-cover"
              alt=""
            />{" "}
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
