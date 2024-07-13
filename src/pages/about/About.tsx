import SectionTitle from "@/components/shared/SectionTitle";
import img1 from "../../assets/images/about1.jpg";
import img2 from "../../assets/images/about2.webp";
// team
import img3 from "../../assets/images/h1.webp";
import img4 from "../../assets/images/h2.webp";
import img5 from "../../assets/images/t1.jpg";
import img6 from "../../assets/images/t2.jpg";
// icon
import { FaRegUserCircle } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Emily Smith",
    comment:
      "I love the quality and variety of fitness equipment available. It has really helped me stay motivated in my fitness journey!",
  },
  {
    name: "John Doe",
    comment:
      "Excellent customer service! I had a query about a product and received prompt and helpful assistance. Highly recommended.",
  },
  {
    name: "Sarah Johnson",
    comment:
      "The products are top-notch and reasonably priced. I've recommended Fitness Tools to all my friends.",
  },
  {
    name: "Michael Brown",
    comment:
      "Fast delivery and the products arrived in perfect condition. Will definitely shop here again.",
  },
  {
    name: "Jessica Martinez",
    comment:
      "Great experience shopping here! The website is easy to navigate, and I found exactly what I needed.",
  },
  {
    name: "David Wilson",
    comment:
      "The home gym equipment I bought exceeded my expectations. Thank you for helping me set up my home gym!",
  },
];

const About = () => {
  return (
    <div className="section-gap">
      {/* About US */}
      <section>
        <SectionTitle title={"About us"} subTitle={"who we are"} />
        <div className="flex lg:flex-row flex-col justify-between gap-x-5 gap-y-5">
          <img src={img1} alt="" className="lg:w-[35%] w-full rounded-md" />
          <div>
            <h2 className="heading mb-4">History of Fitness Tools</h2>
            <p>
              Fitness Tolls was founded in 2024 with the aim of revolutionizing
              the fitness equipment industry. Recognizing the growing demand for
              high-quality, affordable fitness products, our founders set out to
              create a brand that would meet the needs of fitness enthusiasts of
              all levels. From humble beginnings as a small startup, Fitness
              Tolls has grown into a leading e-commerce platform, serving
              thousands of customers across Bangladesh.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse justify-between gap-x-5 gap-y-5">
          <div className="space-y-5">
            <div>
              <h2 className="heading mb-4">Our Mission</h2>
              <p>
                Our mission at Fitness Tolls is to empower individuals to lead
                healthier, more active lives by providing them with the best
                fitness equipment and accessories. We are committed to offering
                products that combine innovation, quality, and affordability,
                ensuring that everyone has the opportunity to achieve their
                fitness goals.
              </p>
            </div>
            <div>
              <h2 className="heading mb-4">Our Vision</h2>
              <p>
                Our vision is to become the most trusted and respected fitness
                equipment brand globally. We strive to continuously innovate and
                expand our product range, staying ahead of the latest fitness
                trends and technologies. At Fitness Tolls, we envision a world
                where fitness is accessible to all, and we aim to inspire and
                support our customers on their journey to better health and
                wellness.
              </p>
            </div>
          </div>
          <img
            src={img2}
            alt=""
            className="lg:w-[35%] w-full rounded-md lg:mt-0 mt-5"
          />
        </div>
      </section>
      {/* About Team */}
      <section className="flex flex-col gap-y-5">
        <SectionTitle title={"Team"} subTitle={"team introduction"} />
        <div className="flex lg:flex-row flex-col gap-x-5">
          <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5">
            <img
              src={img3}
              alt=""
              className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="">
              <h3 className="font-semibold text-xl mb-2">CEO and Co-Founder</h3>
              <h4 className="font-semibold text-lg mb-4">John Smith</h4>
              <p>
                John Smith co-founded Fitness Tools with a vision to
                revolutionize home fitness equipment. With over 15 years of
                experience in product development and business strategy, John
                leads the company with a focus on innovation and customer
                satisfaction. His dedication to fitness stems from a lifelong
                passion for health and wellness.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-x-5">
            <img
              src={img4}
              alt=""
              className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="space-y-5">
              <h3 className="font-semibold text-xl mb-2">
                Chief Marketing Officer
              </h3>
              <h4 className="font-semibold text-lg mb-4">Emily Davis</h4>
              <p>
                Emily Davis drives Fitness Tools' marketing initiatives,
                leveraging her expertise in digital marketing and brand
                strategy. With a background in consumer behavior and market
                trends, Emily ensures that Fitness Tools remains at the
                forefront of the fitness industry, engaging with customers and
                promoting healthy lifestyles.
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5">
            <img
              src={img5}
              alt=""
              className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="">
              <h3 className="font-semibold text-xl mb-2">
                Head of Product Development
              </h3>
              <h4 className="font-semibold text-lg mb-4">Michael Johnson</h4>
              <p>
                Michael Johnson heads the product development team at Fitness
                Tools, bringing a wealth of experience in engineering and
                design. He is committed to creating durable, user-friendly
                fitness equipment that meets the diverse needs of customers.
                Michael's focus on quality and functionality drives the
                continuous improvement of Fitness Tools' product line.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-x-5 gap-y-5">
            <img
              src={img6}
              alt=""
              className="lg:w-[250px] lg:h-[300px] object-cover rounded-md"
            />
            <div className="">
              <h3 className="font-semibold text-xl mb-2">
                Customer Experience Manager
              </h3>
              <h4 className="font-semibold text-lg mb-4">Sarah Lee</h4>
              <p>
                Sarah Lee is dedicated to enhancing customer satisfaction at
                Fitness Tools. With a background in customer service and
                operations management, Sarah ensures that every customer
                interaction is positive and seamless. She focuses on building
                long-term relationships with customers by understanding their
                needs and providing exceptional support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section>
        <SectionTitle
          title={"Testimonials"}
          subTitle={"our satisfied customers"}
        />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="ms-[15px] h-[170px]">
                    <CardContent className="p-6 px-8">
                      <div className="flex items-center gap-x-4 mb-4">
                        <FaRegUserCircle className="text-2xl text-secondaryColor" />
                        <p className="font-semibold">{item?.name}</p>
                      </div>
                      <p>{item?.comment}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      {/* Contact */}
      <section>
        <SectionTitle
          title={"Contact Information"}
          subTitle={"don't forget to send feedback"}
        />
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-y-5">
          <div className="">
            <h3 className="text-xl font-medium mb-4">Address:</h3>
            <p>Fitness Tools Headquarters</p>
            <p>1234 Fitness Lane</p>
            <p>Health City, Wellness State, 56789</p>
          </div>

          <div className="">
            <h3 className="text-xl font-medium mb-4">Customer Service:</h3>
            <p className="flex items-center gap-x-3">
              <FaSquarePhone className="text-secondaryColor text-lg" /> (123)
              456-7890
            </p>
            <p className="flex items-center gap-x-3">
              <MdEmail className="text-secondaryColor text-lg" />
              <a
                href="mailto:support@fitnesstools.com"
                className="text-primaryColor"
              >
                support@fitnesstools.com
              </a>
            </p>
          </div>

          <div className="">
            <h3 className="text-xl font-medium mb-4">Business Hours:</h3>
            <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="">
            <h3 className="text-xl font-medium mb-4">Follow Us:</h3>
            <p className="flex items-center gap-x-3 ">
              <FaFacebookSquare className="text-secondaryColor text-lg" />
              <a
                href="https://www.facebook.com/fitnesstools"
                className="text-primaryColor"
              >
                facebook.com/fitnesstools
              </a>
            </p>
            <p className="flex items-center gap-x-3 ">
              <FaTwitterSquare className="text-secondaryColor text-lg" />
              <a
                href="https://www.twitter.com/fitnesstools"
                className="text-primaryColor"
              >
                twitter.com/fitnesstools
              </a>
            </p>
            <p className="flex items-center gap-x-3 ">
              <FaInstagramSquare className="text-secondaryColor text-lg" />
              <a
                href="https://www.instagram.com/fitnesstools"
                className="text-primaryColor"
              >
                instagram.com/fitnesstools
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
