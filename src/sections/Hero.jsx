import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className="w-full flex lg:flex-row flex-col justify-center gap-10 min-h-screen max-xontainer">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-monserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[50px] max-sm:leading-[1] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 max-lg:z-0 pr-10 relative">
            The New Arrival
          </span>
          <br /> <span className="text-coral-red mt-3 inline-block">Nike </span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mb-14 mt-6 sm:max-w-sm">
          Discover stylish Nike Arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex flex-wrap mt-20 justify-start items-start w-full gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 relative justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover w-full">
        <img
          src={bigShoeImg}
          alt="Shoe Collection"
          width={410}
          height={500}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
