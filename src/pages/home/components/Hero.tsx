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

const Hero = () => {
  return (
    <div className="w-full">
      <Carousel className="">
        <CarouselContent className="">
          <CarouselItem className="">
            <img src={b1} className="w-full h-[100vh] object-cover" alt="" />{" "}
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
