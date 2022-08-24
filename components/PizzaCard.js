import Image from "next/image";
import React from "react";

function PizzaCard() {
  return (
    <div className=" w-full md:w-[22%] p-3 flex flex-col items-center justify-center py-5 px-10 cursor-pointer hover:shadow-lg">
      <Image src="/assets/pizza.png" alt="" width="500" height="500" />
      <h1 className="pt-5 text-3xl md:text-lg font-bold text-[#d1411e]">
        FIORI DI ZUCCA
      </h1>
      <span className="text-2xl md:text-lg font-bold text-[#666]">$19.90</span>
      <p className="text-2xl md:text-lg text-center text-[#777]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

export default PizzaCard;
