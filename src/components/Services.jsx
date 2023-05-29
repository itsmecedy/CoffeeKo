import React from "react";

function Services() {
  return (
    // wrapper
    <div className="flex justify-center flex-col  py-20">
      <div className="text-center max-w-[1480px] m-auto w-full text-[48px] mb-6">
        Services
      </div>
      {/* container */}
      <div className="flex justify-around m-auto space-x-5 text-right max-w-[1480px]">
        {/* services */}
        <div className="space-y-5 leading-5 max-w-[33.333%]">
          <div className=" text-3xl ">Brewed Perfection at Coffeeko</div>
          <div className="font-[Quattrocento] text-slate-600">
            Brewed Perfection at Coffeeko offers specialty coffees carefully
            crafted from the finest beans sourced from around the world. Take a
            sip and experience the perfect balance of taste and aroma, creating
            an unforgettable flavor experience. Relax in our signature
            atmosphere and enjoy your favorite cup of coffee.
          </div>
          <button className="bg-[#795C30] hover:bg-[#624b27] text-white rounded-lg px-4 py-3 font-[Quattrocento] ">
            More info
          </button>
        </div>
        <div className="space-y-5 leading-5 max-w-[33.333%]">
          <div className=" text-3xl ">Brewing Fresh Coffee Daily</div>
          <div className="font-[Quattrocento] text-slate-600">
            Coffeeko is a coffee shop providing the freshest coffee daily to its
            customers. Our coffee beans are carefully selected and freshly
            brewed every morning, ensuring the best cup of coffee every time.
            Stop in and try a cup of our rich, flavorful coffee today!
          </div>
          <button className="bg-[#795C30] hover:bg-[#624b27] text-white rounded-lg px-4 py-3 font-[Quattrocento] ">
            More info
          </button>
        </div>
        <div className="space-y-5 leading-5 max-w-[33.333%]">
          <div className=" text-3xl ">Brew the Best Coffee!</div>
          <div className="font-[Quattrocento] text-slate-600">
            Coffeeko is the premier coffee shop in town serving the best coffee
            to our customers! Our signature blend of premium coffees and unique
            flavorings will give you the perfect cup of joe every time. We offer
            a range of coffee drinks, from classic espresso to craft lattes and
            cappuccinos, and a selection of treats to go along with them. Stop
            by and let us brew the best coffee for you!
          </div>
          <button className="bg-[#795C30] hover:bg-[#624b27] text-white rounded-lg px-4 py-3 font-[Quattrocento] ">
            More info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
