import React from "react";
import { BiPhone } from "react-icons/bi";
import ReservationFrom from "./ReservationForm";

const Reservation = () => {
  return (
    <div className="pt-[5rem] relative mt-[2rem] pb-[5rem] mb-[3rem] bg-[url('/images/bg-black.jpg')] bg-center bg-cover">
      {/* overlay  */}
      <div className="absolute w-full h-full bg-[#000000a6] top-0 left-0 right-0 bottom-0"></div>
      <div className="w-[80%] relative z-[20] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[3rem]">
        {/* Text Content  */}
        <div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[50px] text-white font-bold leading-[3rem] md:leading-[4rem] uppercase">
            do you have any dinner plan today? reserve your table
          </h1>
          <p className="text-[17px] mt-[1rem] text-white text-opacity-50">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit a
            nulla debitis architecto soluta alias vel atque pariatur quam quia?
          </p>
          <div className="flex mt-[2rem] items-center space-x-4">
            <div className="w-[3rem] h-[3rem] bg-red-500 rounded-full flex items-center justify-center flex-col">
              <BiPhone className="w-[1.7rem] h-[1.7rem] text-white" />
            </div>
            <div>
              <h1 className="text-[25px] text-white font-semibold">
                Quick order 24/7
              </h1>
              <h1 className="text-yellow-300 text-[30px] font-bold">
                +0123 456 789
              </h1>
            </div>
          </div>
        </div>
        <ReservationFrom />
      </div>
    </div>
  );
};

export default Reservation;
