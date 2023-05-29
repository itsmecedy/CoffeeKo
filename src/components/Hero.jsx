import React from "react";
import Heroimg from "../assets/Hero.jpg";

function Hero() {
  return (
    <div className="relative">
      <img
        src={Heroimg}
        alt="Background"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 flex justify-center flex-col items-center text-center py-40 text-white space-y-8 ">
        <div className="text-7xl">The Perfect Cup of CoffeeKo</div>
        <div className=" max-w-2xl font-[Quattrocento] text-2xl ">
          CoffeeKo is the perfect coffee shop for your daily pick-me-up. Our
          coffee is roasted to perfection and brewed with the utmost care and
          attention, creating the perfect cup of coffee every time. Stop by and
          enjoy the perfect cup of coffee today.
        </div>
        <button className=" font-[Quattrocento] text-2xl px-4 py-3 rounded-lg bg-[#795C30] hover:bg-[#624b27]">
          Contact
        </button>
      </div>
    </div>
  );
}

export default Hero;
