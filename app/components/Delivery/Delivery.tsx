import React from "react";
import Image from "next/image";
import DeliveryImg from "@/public/images/delivery.svg";
import { RiEBike2Fill } from "react-icons/ri";
import { BsDoorOpen } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";

const Delivery = () => {
  return (
    <div className="pt-[8rem] pb-[3rem]">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[3rem]">
        {/* Images  */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src={DeliveryImg} alt="delivery" />
        </div>
        {/* Text Content  */}
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] xl:text-[60px] font-bold leading-[3rem] md:leading-[4rem] uppercase">
            Your <span className="text-red-600">Favourite Burger </span>on The
            Way
          </h1>
          <p className="mt-[2rem] text-black text-[17px] text-opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fuga
            iste vero magni corporis nobis, blanditiis veniam provident
            temporibus laboriosam laborum, facilis aspernatur! Itaque pariatur
            amet iure harum cum praesentium.
          </p>
          <div className="flex items-center space-x-3 mt-[2rem]">
            <RiEBike2Fill className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery in 30 minutes
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <IoFastFood className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Free Shipping From 75$
            </h1>
          </div>
          <div className="flex items-center space-x-3 mt-[1rem]">
            <BsDoorOpen className="w-[2rem] h-[2rem] text-red-600" />
            <h1 className="text-[18px] text-black font-medium">
              Delivery on your Doorstep
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
