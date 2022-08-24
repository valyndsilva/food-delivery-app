import Image from "next/image";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function Product() {
  const [size, setSize] = useState(0);
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const pizza = {
    id: 1,
    img: "/assets/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-10">
      <div className="col-span-1 md:col-span-2 items-center justify-center p-10">
        <div className=" h-[300px] w-full md:h-full relative">
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className="col-span-1 text-center space-y-4 md:text-left md:col-span-2 p-5">
        <h1 className="text-3xl md:text-3xl font-bold">{pizza.name}</h1>
        <span className="text-[#d1411e] text-2xl font-normal border-b-2 border-bottom-[#d1411e]">
          ${pizza.price[size]}
        </span>
        <p className="desc">{pizza.desc}</p>
        <div className="w-full items-center justify-center">
          <h3 className="font-bold text-xl">Choose the size:</h3>
          <div className="grid grid-cols-3 gap-6 items-center md:w-fit py-5 ">
            <div
              className="col-span-1 w-8 h-8 relative cursor-pointer justify-self-center"
              onClick={() => setSize(0)}
            >
              <Image src="/assets/size.png" layout="fill" alt="" />
              <span className="absolute top[-5px] right-[-20px] bg-teal-500 text-white text-sm py-0 px-1 rounded-xl">
                Small
              </span>
            </div>
            <div
              className="col-span-1  w-10 h-10 relative cursor-pointer justify-self-center"
              onClick={() => setSize(1)}
            >
              <Image src="/assets/size.png" layout="fill" alt="" />
              <span className="absolute top[-5px] right-[-20px] bg-teal-500 text-white text-sm py-0 px-1 rounded-xl">
                Medium
              </span>
            </div>
            <div
              className="col-span-1  w-12 h-12 relative cursor-pointer justify-self-center"
              onClick={() => setSize(2)}
            >
              <Image src="/assets/size.png" layout="fill" alt="" />
              <span className="absolute top[-5px] right-[-20px] bg-teal-500 text-white text-sm py-0 px-1 rounded-xl">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center">
          <h3 className="font-bold text-xl">Choose Ingredients:</h3>
          <div className="flex-col mb-7 gap-4 pt-5">
            <h3 className="font-semibold text-md">Cheese & Sauce Toppings:</h3>
            <div className="flex-col md:inline-flex md:flex-row md:flex-wrap gap-4 pt-5">
              <div className="checkboxItem">
                <input
                  className="w-6 h-6 md:w-5 md:h-5"
                  type="checkbox"
                  id="extra_cheese"
                  name="extra_cheese"
                />
                <label htmlFor="extra_cheese">Extra Cheese</label>
              </div>
              <div className="checkboxItem">
                <input
                  className="w-6 h-6 md:w-5 md:h-5"
                  type="checkbox"
                  id="goat_cheese"
                  name="goat_cheese"
                />
                <label htmlFor="goat_cheese">Goat Cheese</label>
              </div>
              <div className="checkboxItem">
                <input
                  className="w-6 h-6 md:w-5 md:h-5"
                  type="checkbox"
                  id="bbq_sauce"
                  name="bbq_sauce"
                />
                <label htmlFor="bbq_sauce">BBQ Sauce</label>
              </div>
              <div className="checkboxItem">
                <input
                  className="w-6 h-6 md:w-5 md:h-5"
                  type="checkbox"
                  id="spicy_sauce"
                  name="spicy_sauce"
                />
                <label htmlFor="spicy_sauce">Spicy Sauce</label>
              </div>
            </div>
            <div className="flex-col gap-4 pt-5">
              <h3 className="font-bold">Fruit & Veg Toppings:</h3>
              <div className="flex-col md:inline-flex md:flex-row md:flex-wrap gap-4 pt-5">
                <div className="checkboxItem">
                  <input
                    type="checkbox"
                    id="basil"
                    name="basil"
                    className="w-6 h-6 md:w-5 md:h-5"
                  />
                  <label htmlFor="basil">Basil</label>
                </div>
                <div className="checkboxItem">
                  <input
                    type="checkbox"
                    id="olives"
                    name="olives"
                    className="w-6 h-6 md:w-5 md:h-5"
                  />
                  <label htmlFor="olives">Olives</label>
                </div>
                <div className="checkboxItem">
                  <input
                    className="w-6 h-6 md:w-5 md:h-5"
                    type="checkbox"
                    id="mushrooms"
                    name="mushrooms"
                  />
                  <label htmlFor="mushrooms">Mushrooms</label>
                </div>
                <div className="checkboxItem">
                  <input
                    className="w-6 h-6 md:w-5 md:h-5"
                    type="checkbox"
                    id="jalapenos"
                    name="jalapenos"
                  />
                  <label htmlFor="jalapenos">Jalapenos</label>
                </div>
                <div className="checkboxItem">
                  <input
                    type="checkbox"
                    id="double"
                    name="double"
                    className="w-6 h-6 md:w-5 md:h-5"
                  />
                  <label htmlFor="pineapple">Pineapple</label>
                </div>
              </div>
            </div>
            <div className="flex-col mb-7 gap-4 pt-5">
              <h3 className="font-bold">Meat Toppings:</h3>
              <div className="flex-col md:inline-flex md:flex-row md:flex-wrap gap-4 pt-5">
                <div className="checkboxItem">
                  <input
                    type="checkbox"
                    id="double"
                    name="double"
                    className="w-6 h-6 md:w-5 md:h-5"
                  />
                  <label htmlFor="pepperoni">Pepperoni</label>
                </div>
                <div className="checkboxItem">
                  <input
                    type="checkbox"
                    id="beef_mince"
                    name="beef_mince"
                    className="w-6 h-6 md:w-5 md:h-5"
                  />
                  <label htmlFor="beef_mince">Beef mince</label>
                </div>
                <div className="checkboxItem">
                  <input
                    type="checkbox"
                    id="chicken_mince"
                    name="chicken_mince"
                    className="w-6 h-6 md:w-5 md:h-5"
                  />
                  <label htmlFor="chicken_mince">Chicken mince</label>
                </div>
                <div className="checkboxItem">
                  <input
                    type="checkbox"
                    id="ham"
                    name="ham"
                    className="w-6 h-6 md:w-5 md:h-5"
                  />
                  <label htmlFor="ham">Ham</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <input
            type="number"
            defaultValue={1}
            className="border border-gray-500 rounded-md w-16 text-center md:h-8"
          />
          <button className="px-3 rounded-md md:h-8 ml-2 bg-[#d1411e] text-white border-none font-medium cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
