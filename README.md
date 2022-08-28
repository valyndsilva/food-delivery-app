#

npx create-next-app --example with-mongodb project-name

## Create the UI

In components folder:

In Layout.js:

```
import Head from "next/head";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pizza Rustica | Pizza Delivery App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Pizzeria Rustica | Pizza Delivery Service"
        />
      </Head>
      <div className="min-h-screen flex flex-col  ">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

```

In Header.js:

```
import Image from "next/image";
import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import {
  AiOutlineClose,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { GiFullPizza, GiHamburgerMenu } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";

function Header() {
  const { systemTheme, theme, setTheme } = useTheme();

  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);
  //   if (!mounted) return null;

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div className="bg-gray-800 rounded-lg ml-2 p-3  items-center justify-center  opacity-70 hover:opacity-100">
          {" "}
          <BsFillSunFill
            className="h-8 w-5 cursor-pointer"
            onClick={() => setTheme("light")}
          />
        </div>
      );
    } else {
      return (
        <div className=" ml-2 p-3 items-center justify-center opacity-70 hover:opacity-100">
          {" "}
          <BsFillMoonStarsFill
            className="h-8 w-5 text-white cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        </div>
      );
    }
  };

  const [isNavOpen, setIsNavOpen] = useState(false);
  // console.log(isNavOpen);
  return (
    <>
      <header className="w-full shadow-xl  h-24 py-0 px-12 bg-[#d1411e] flex items-center justify-between sticky top-0 z-50">
        <div className="container px-4 md:px-0 h-full mx-auto flex items-center justify-between">
          {/* Logo Here */}
          <Link href="/">
            <span className="flex items-center text-yellow-400 text-xl font-bold italic">
              <GiFullPizza className="w-14 h-14 lg:w-12 lg:h-12 text-white mr-2" />
              Pizza<span className="text-white">Rustica</span>
            </span>
          </Link>

          {/* Menu links here  */}
          <nav
            id="menu" className="flex fixed top-0 right-0 px-10 py-5 md:py-16 z-50 items-center
            md:relative"
          >
            <div className="hidden
            lg:flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 ">
            <Link href="#">
              <a className="listItem" href="#">
                Products
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                Menu
              </a>
            </Link>
            <Link href="#">
              <span className="listItem" href="#">
                Deals
              </span>
            </Link>

            <Link href="#">
              <a className="listItem" href="#">
                About
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                Contact
              </a>
            </Link>
            </div>
            <div className="flex md:p-0 md:bg-transparent md:flex-row md:space-x-6 ml-4">
            <Link href="#">
              <a className="listItem flex items-center gap-2 lg:border-l pl-4">
                <MdLocationOn className="w-8 h-8" />
                <span className="hidden lg:inline-flex">Locations</span>
              </a>
            </Link>

            <Link href="#">
              <div className="flex md:flex-grow items-center justify-end relative">
                <AiOutlineShoppingCart className="w-8 h-8 ml-2 text-white opacity-70 hover:opacity-100" />
                <div className="absolute top-[5px] right-[-10px] w-5 h-5 rounded-[50%] bg-white p-1 flex items-center font-bold text-[#d1411e]">
                  2
                </div>
              </div>
            </Link>
            {renderThemeChanger()}
            {isNavOpen ? (
              <div
                className="lg:hidden p-4 rounded dark:bg-zinc-600 hover:dark:bg-zinc-500  cursor-pointer"
                onClick={() => setIsNavOpen(false)}
              >
                <AiOutlineClose className="h-6 w-6 cursor-pointer text-white hover:text-red-200" />
              </div>
            ) : (
              <div
                className="lg:hidden p-4 rounded dark:bg-zinc-600 hover:dark:bg-zinc-500  cursor-pointer"
                onClick={() => setIsNavOpen((prev) => !prev)}
              >
                <GiHamburgerMenu className="h-6 w-6 cursor-pointer text-white hover:text-red-200" />
              </div>
            )}
            </div>
          </nav>
          {/* This is used to open the menu on mobile devices */}

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div className="flex flex-col lg:hidden space-x-8 items-center z-100">
              <div className="fixed right-0 top-[6rem] bg-[#d1411e] border-t py-4 px-12 flex flex-col items-center justify-center space-y-12 w-full h-screen text-white">
                <Link href="#hero">
                  <a className="hover:text-red-200 py-4 px-4">
                    <span className="">Products </span>
                  </a>
                </Link>
                <Link href="#programs">
                  <a className="hover:text-red-200  py-4 px-4">
                    <span className="">Menu </span>
                  </a>
                </Link>
                <Link href="#reasons">
                  <a className="hover:text-red-200  py-4 px-4">
                    <span className="">Deals </span>
                  </a>
                </Link>
                <Link href="#plans">
                  <a className="hover:text-red-200  py-4 px-4">
                    <span className="">About </span>
                  </a>
                </Link>
                <Link href="#testimonials">
                  <a className="hover:text-red-200  py-4 px-4">
                    <span className="">Contact</span>
                  </a>
                </Link>
                <Link href="#join-us">
                  <a className="hover:text-red-200  py-4 px-4">Locations</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

```

In Footer.js:

```
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GiFullPizza } from "react-icons/gi";
import { FaFacebookF, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col h-auto md:h-[calc(100vh - 100px] bg-gray-800">
      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-4 pt-12 text-md">
        <div className="cols-span-1">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-md font-semibold text-white">About Us</h3>
            <Link href="#">
              <a className="listItem" href="#">
                Our Story
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                Menu
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                Deals
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                Locations
              </a>
            </Link>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-md font-semibold text-white">Corporate</h3>
            <Link href="#">
              <a className="listItem" href="#">
                Franchising
              </a>
            </Link>

            <Link href="#">
              <a className="listItem" href="#">
                Investor Relations
              </a>
            </Link>

            <Link href="#">
              <a className="listItem" href="#">
                Recruitment
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                Press Enquiries
              </a>
            </Link>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-md font-semibold text-white">Help & Service</h3>
            <Link href="#">
              <a className="listItem" href="#">
                Contact Us
              </a>
            </Link>

            <Link href="#">
              <a className="listItem" href="#">
                Speed Guarantee
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                FAQs
              </a>
            </Link>

            <Link href="#">
              <a className="listItem" href="#">
                Nutrition & Allergens
              </a>
            </Link>
          </div>
        </div>
        <div className="cols-span-1">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-md font-semibold text-white">Our Policies</h3>
            <Link href="#">
              <a className="listItem" href="#">
                Privacy Policy
              </a>
            </Link>

            <Link href="#">
              <a className="listItem" href="#">
                Terms & Conditions
              </a>
            </Link>
            <Link href="#">
              <a className="listItem" href="#">
                Cookies
              </a>
            </Link>

            <Link href="#">
              <a className="listItem" href="#">
                Responsible Disclosure
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-12">
        <Link href="/">
          <span className="flex items-center text-yellow-400 text-xl font-bold italic">
            <p>
              Follow<span className="text-white"> Us</span>
            </p>
          </span>
        </Link>
      </div>
      <div className="flex pt-5 pb-8 justify-center space-x-6 text-lg">
        <Link href="#">
          <a className="listItem rounded-full p-3 border" href="#">
            <BsInstagram className="w-6 h-6" />
          </a>
        </Link>

        <Link href="#">
          <span className="listItem rounded-full p-3 border" href="#">
            <FaFacebookF className="w-6 h-6" />
          </span>
        </Link>

        <Link href="#">
          <a className="listItem rounded-full p-3 border" href="#">
            <BsTwitter className="w-6 h-6" />
          </a>
        </Link>
        <Link href="#">
          <a className="listItem rounded-full p-3 border" href="#">
            <FaTiktok className="w-6 h-6" />
          </a>
        </Link>
        <Link href="#">
          <a className="listItem rounded-full p-3 border" href="#">
            <BsInstagram className="w-6 h-6" />
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-center text-white text-md py-5">
        <p>Copyright © 2022 Firezza. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

```

Featured.js:

```
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
function Featured() {
  const images = [
    "/assets/featured.png",
    "/assets/featured2.png",
    "/assets/featured3.png",
  ];

  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "left") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "right") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  return (
    <div className="w-full h-[50vh] md:h-[90vh] bg-[#d1411e] overflow-hidden relative">
      <BsChevronLeft
        className=" w-8 h-8 text-white absolute left-0 top-0 bottom-0 m-auto cursor-pointer z-[999]"
        onClick={() => handleArrow("left")}
      />
      <div
        className={`w-[300vw] h-full flex transition-all ease-in duration-250`}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className="w-[100vw] h-full relative" key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <BsChevronRight
        className="w-8 h-8 right-0 text-white absolute top-0 bottom-0 m-auto cursor-pointer z-[999]"
        onClick={() => handleArrow("right")}
      />
    </div>
  );
}

export default Featured;

```

In PizzaList.js:

```

import React from "react";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  return (
    <div className="flex flex-col items-center py-10 px-3">
      <h1 className="text-center text-2xl font-bold pb-5">THE BEST PIZZA IN TOWN</h1>
      <p className="text-xl text-[#444] w-[90%] text-center md:text-left md:w-[70%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-full flex items-center justify-center flex-wrap py-10">
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
}

export default PizzaList;

```

In PizzaCard.js:

```
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


```

In pages directory create product/[id].js and order/[id].js:

In pages/product/[id].js:

```

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

```

In pages/order/[id].js:

```
import Image from "next/image";
import { useState, useEffect } from "react";
function Order() {
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return "done flex flex-col items-center mb-5";
    if (index - status === 1)
      return "inProgress flex flex-col items-center mb-5  animate-pulse";
    if (index - status > 1)
      return "undone mb-5  flex flex-col items-center opacity-30";
  };
  return (
    <div className="w-full flex-col p-12 md:inline-flex">
      <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 md:inline-table">
        <thead class="text-white">
          <tr class="bg-red-400 flex flex-col flex-no wrap md:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            <th className="border p-5 text-left">Order ID</th>
            <th className="border p-5 text-left">Customer Name</th>
            <th className="border p-5 text-left">Address</th>
            <th className="border p-5 text-left">Order Date</th>
            <th className="border p-5 text-left">Total</th>
          </tr>
        </thead>
        <tbody class="flex-1 sm:flex-none">
          <tr class="flex flex-col flex-no wrap md:table-row mb-5 mb:mb-0">
            <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
              <span className="font-medium text-[#d1411e] md:text-lg">
                CORALZO
              </span>
            </td>
            <td class="border-grey-light border hover:bg-gray-100 p-5 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
              <span className="">Jake Doe</span>
            </td>
            <td class="border-grey-light border hover:bg-gray-100 p-5">
              <span className="before:text-normal before:content-['Price: ']">
                Elton st. 212-33 LA
              </span>
            </td>
            <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
              <span className="before:text-normal before:content-['Price: ']">
                Date
              </span>
            </td>
            <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
              <span className="before:text-normal before:content-['Price: ']">
                $79.80
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="w-full flex-col items-center justify-evenly py-10 border md:inline-flex md:flex-row">
        <div className={statusClass(0)}>
          <Image src="/assets/paid.png" width={30} height={30} alt="" />
          <span>Payment</span>
          <div className="checkedIcon">
            <Image
              className="checkedIcon"
              src="/assets/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(1)}>
          <Image src="/assets/bake.png" width={30} height={30} alt="" />
          <span>Preparing</span>
          <div className="checkedIcon">
            <Image
              className="checkedIcon"
              src="/assets/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(2)}>
          <Image src="/assets/bike.png" width={30} height={30} alt="" />
          <span>On the way</span>
          <div className="checkedIcon">
            <Image
              className="checkedIcon"
              src="/assets/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
        <div className={statusClass(3)}>
          <Image src="/assets/delivered.png" width={30} height={30} alt="" />
          <span>Delivered</span>
          <div className="checkedIcon">
            <Image
              className="checkedIcon"
              src="/assets/checked.png"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full flex-col space-y-2 md:space-y-0 md:inline-flex md:flex-row gap-6  border p-8 mt-5 items-center justify-center text-center ">
        <div className="font-medium text-lg">
          <b className=" mr-2">Subtotal:</b>$79.60
        </div>
        <div className="font-medium text-lg">
          <b className=" mr-2">Discount:</b>$0.00
        </div>
        <div className="font-medium text-lg">
          <b className=" mr-2">Cart Total:</b>$79.60
        </div>
        <button className="h-8 bg-[#d1411e] text-white px-4 rounded-lg font-bold cursor-pointer ">
          Paid
        </button>
      </div>
    </div>
  );
}

export default Order;


```

In pages/cart.jsx:

```
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

function Cart() {
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div class="flex flex-col m-8 items-center justify-center">
      <div class="w-full md:w-full">
        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 md:inline-table">
          <thead class="text-white">
            <tr class="hidden bg-red-400 flex-col flex-no wrap md:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="border h-[10vh] p-5 text-left">Product</th>
              <th className="border p-5 text-left">Name</th>
              <th className="border p-5 text-left">Extras</th>
              <th className="border p-5 text-left">Price</th>
              <th className="border p-5">Quantity</th>
              <th className="border p-5 text-left">Total</th>
              <th className="border p-5 text-left">Actions</th>
            </tr>
          </thead>
          <tbody class="flex-1 ">

              <tr
                class="flex flex-col flex-no wrap md:table-row mb-10 md:mb-0"

              >
                <td class=" border-grey-light border hover:bg-gray-100 p-5">
                  <div className="h-[5.5vh] md:h-[10vh] relative">
                    <Image
                      src="/assets/pizza.png"
                      layout="fill"
                      objectFit="contain"
                      alt=""
                    />
                  </div>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
                  <span className="font-medium text-[#d1411e] md:text-lg">
                    CORALZO
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <span className="">Double ingredient, spicy sauce</span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5">
                  <span className="before:text-normal before:content-['Price: ']">
                    $19.90
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
                  <span className="before:text-normal before:content-['Quantity: ']">
                    2
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
                  <span className="before:text-normal before:content-['Price: ']">
                    $39.80
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  Delete
                </td>
              </tr>

          </tbody>
        </table>
      </div>
      <div className="w-full flex-col space-y-2 md:space-y-0 md:inline-flex md:flex-row gap-6  border p-8 mt-5 items-center justify-center text-center ">
        <div className="font-medium text-lg">
          <b className=" mr-2">Subtotal:</b>$79.60
        </div>
        <div className="font-medium text-lg">
          <b className=" mr-2">Discount:</b>$0.00
        </div>
        <div className="font-medium text-lg">
          <b className=" mr-2">Cart Total:</b>$79.60
        </div>
        <button className="h-8 bg-[#d1411e] text-white px-4 rounded-lg font-bold cursor-pointer ">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

```

## Create a Cluster in MongoDB cloud:

https://www.mongodb.com/developer/languages/javascript/nextjs-with-mongodb/

After creating the cluster, connect your application to MongoDB choosing "Connect your application" and copy the connection string into your .env file.

MONGODB_URL="connection_string"
connection_string looks like:

```
mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.tdm0q.mongodb.net/<DBNAME>?retryWrites=true&w=majority
```

We need to install mongoose to use MongoDB in NextJS

```
npm install mongoose
npm i mongodb
```

https://github.com/vercel/next.js/tree/canary/examples/with-mongodb-mongoose

Open lib/dbConnect.js and copy the configuration. Create a utils directory in the root and mongodb.js file in it. Paste the config into this file.

## Create the Models:

Create a models directory in the root and files Product.js and Order.js in it.

In Product.js:

```
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 250,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
      required: true,
      maxlength: 60,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);


```

In Order.js:

```
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 250,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      type: Number,
      required: true, // pay by cash - 0, paypal -1
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);


```

## Next.js REST API with MongoDB:

We don't need to build any express server here. We can use the pages/api folder from nextJS. Create products and orders folders in pages/api and in each an index.js file:

In pages/api/products/index.js:

```
import dbConnect from "../../../util/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res, next) {
  const { method } = req;

  // Connect to dbConnect
  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status.json({ message: err.message });
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}

```

Open Postman or Rapid API client in VSCode:
Send a POST request, to: http://localhost:3000/api/products​
In Body JSON add some sample data:

```
{
"title":"Pizza 1",
"img":"/assets/pizza.png",
"desc":"desc 1",
"prices":[12,13,14],
"extraOptions":[{"text":"BBQ Sauce", "price":2}]
}
```

You should receive a 200 OK response as below:

```
{
  "title": "Pizza 1",
  "desc": "desc 1",
  "img": "/assets/pizza.png",
  "prices": [
    12,
    13,
    14
  ],
  "extraOptions": [
    {
      "text": "BBQ Sauce",
      "price": 2,
      "_id": "630755ee7cade2b48f7a7e2f"
    }
  ],
  "_id": "630755ee7cade2b48f7a7e2e",
  "createdAt": "2022-08-25T10:58:54.510Z",
  "updatedAt": "2022-08-25T10:58:54.510Z",
  "__v": 0
}
```

Next, try to send a GET request to: http://localhost:3000/api/products​
You should receive a 200 OK response returning all the data.

```

[
  {
    "_id": "630754def77e65865213eb62",
    "title": "Pizza 1",
    "desc": "desc 1",
    "img": "/assets/pizza.png",
    "prices": [
      12,
      13,
      14
    ],
    "extraOptions": [
      {
        "text": "BBQ Sauce",
        "price": 2,
        "_id": "630754def77e65865213eb63"
      }
    ],
    "createdAt": "2022-08-25T10:54:22.915Z",
    "updatedAt": "2022-08-25T10:54:22.915Z",
    "__v": 0
  },
  {
    "_id": "630755adf77e65865213eb65",
    "title": "Pizza 2",
    "desc": "desc 2",
    "img": "/assets/pizza.png",
    "prices": [
      12,
      13,
      14
    ],
    "extraOptions": [
      {
        "text": "BBQ Sauce",
        "price": 2,
        "_id": "630755adf77e65865213eb66"
      }
    ],
    "createdAt": "2022-08-25T10:57:49.921Z",
    "updatedAt": "2022-08-25T10:57:49.921Z",
    "__v": 0
  },
  {
    "_id": "630755ee7cade2b48f7a7e2e",
    "title": "Pizza 3",
    "desc": "desc 3",
    "img": "/assets/pizza.png",
    "prices": [
      12,
      13,
      14
    ],
    "extraOptions": [
      {
        "text": "Spicy Sauce",
        "price": 2,
        "_id": "630755ee7cade2b48f7a7e2f"
      }
    ],
    "createdAt": "2022-08-25T10:58:54.510Z",
    "updatedAt": "2022-08-25T10:58:54.510Z",
    "__v": 0
  }
]
```

Next let's fetch data using getServerSideProps in index.js using axios:

First install axios:

```
npm install axios
```

Then in index.js,

```

import axios from "axios";
import { useEffect } from "react";
import { Featured, PizzaList } from "../components";
const Home = ({ pizzaList }) => {
  return (
    <main className="">
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  const pizzaList = res.data;
  return {
    props: {
      pizzaList: pizzaList,
    },
  };
};

```

Next, let's update the component PizzaList.js:

```
import React from "react";
import PizzaCard from "./PizzaCard";

function PizzaList({ pizzaList }) {
  return (
    <div className="flex flex-col items-center py-10 px-3">
      <h1 className="text-center text-2xl font-bold pb-5">
        THE BEST PIZZA IN TOWN
      </h1>
      <p className="text-xl text-[#444] w-[90%] text-center md:text-left md:w-[70%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className="w-full flex items-center justify-center flex-wrap py-10">
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;

```

Next, update the PizzaCard.js component:

```
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PizzaCard({ pizza }) {
  return (
    <div className=" w-full md:w-[22%] p-3 flex flex-col items-center justify-center py-5 px-10 cursor-pointer hover:shadow-lg">
      <Link href={`/product/${pizza._id}`}>
      <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className="pt-5 text-3xl md:text-lg font-bold text-[#d1411e]">
        {pizza.title}
      </h1>
      <span className="text-2xl md:text-lg font-bold text-[#666]">
        ${pizza.prices[0]}
      </span>
      <p className="text-2xl md:text-lg text-center text-[#777]">
        {pizza.desc}
      </p>
    </div>
  );
}

export default PizzaCard;
```

Next, let's create an api endpoint for single product in pages/api/products create [id].js

```
import dbConnect from "../../../util/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  // Connect to dbConnect
  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status.json({ message: err.message });
    }
  }
  if (method === "PUT") {
    // update product
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  if (method === "DELETE") {
    // delete product
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}


```

And, update details for single product pages too:

In pages/product/[id].js:

```
import Image from "next/image";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";

function Product({ pizza }) {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(pizza.prices[0]);
  const [qty, setQty] = useState(1);

  const [extras, setExtras] = useState([]);

  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  // const pizza = {
  //   id: 1,
  //   img: "/assets/pizza.png",
  //   name: "CAMPAGNOLA",
  //   price: [19.9, 23.9, 27.9],
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.",
  // };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  };
  const handleChange = (e, option) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };
  // console.log(extras);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 py-10">
      <div className="col-span-1 md:col-span-2 items-center justify-center p-10">
        <div className=" h-[300px] w-full md:h-full relative">
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className="col-span-1 text-center space-y-4 md:text-left md:col-span-2 p-5">
        <h1 className="text-3xl md:text-3xl font-bold">{pizza.title}</h1>
        <span className="text-[#d1411e] text-2xl font-normal border-b-2 border-bottom-[#d1411e]">
          ${price}
        </span>
        <p className="desc">{pizza.desc}</p>
        <div className="w-full items-center justify-center">
          <h3 className="font-bold text-xl">Choose the size:</h3>
          <div className="grid grid-cols-3 gap-6 items-center md:w-fit py-5 ">
            <div
              className="col-span-1 w-8 h-8 relative cursor-pointer justify-self-center"
              onClick={() => handleSize(0)}
            >
              <Image src="/assets/size.png" layout="fill" alt="" />
              <span className="absolute top[-5px] right-[-20px] bg-teal-500 text-white text-sm py-0 px-1 rounded-xl">
                Small
              </span>
            </div>
            <div
              className="col-span-1  w-10 h-10 relative cursor-pointer justify-self-center"
              onClick={() => handleSize(1)}
            >
              <Image src="/assets/size.png" layout="fill" alt="" />
              <span className="absolute top[-5px] right-[-20px] bg-teal-500 text-white text-sm py-0 px-1 rounded-xl">
                Medium
              </span>
            </div>
            <div
              className="col-span-1  w-12 h-12 relative cursor-pointer justify-self-center"
              onClick={() => handleSize(2)}
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

          <div className="flex-col md:inline-flex md:flex-row md:flex-wrap gap-4 pt-5">
            {pizza.extraOptions.map((option) => (
              <div className="checkboxItem" key={option._id}>
                <input
                  className="w-6 h-6 md:w-5 md:h-5"
                  type="checkbox"
                  id={option.text}
                  name={option.text}
                  onChange={(e) => handleChange(e, option)}
                />
                <label htmlFor="extra_cheese">{option.text}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-5">
          <input
            min="1"
            onChange={(e) => setQty(e.target.value)}
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

// Fetch a single product
export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  const pizza = res.data;
  return {
    props: {
      pizza: pizza,
    },
  };
};



```

## Redux using Redux Toolkit for State Management:

```

npm install redux react-redux @reduxjs/toolkit
```

Create a new folder in the root called redux and in it cartSlice.js:

In redux/cartSlice.js:

```
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    cartQuantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.cartQuantity += 1;
      state.total += action.payload.price * action.payload.qty;
    },
    reset: (state) => {
      state = initialState;
    },
  },
});

// export actions and reducer
export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;

```

Nex, create in redux another file called store.js file:

In redux/store.js:

```
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});

```

To get access to the redux store and use the cartSlice and actions we need to update the \_app.js:

```
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/Layout";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;

```

Next, let's use the store and quantity in Header.js component using the useSelector hook:

```
import { useSelector } from "react-redux";

...
function Header() {
  ...

  const quantity = useSelector((state) => state.cart.cartQuantity);

  return (
    ....
               <Link href="#">
                <div className="flex md:flex-grow items-center justify-end relative">
                  <AiOutlineShoppingCart className="w-8 h-8 ml-2 text-white opacity-70 hover:opacity-100" />
                  <div className="absolute top-[5px] right-[-10px] w-5 h-5 rounded-[50%] bg-white p-1 flex items-center font-bold text-[#d1411e]">
                  {quantity}
                  </div>
                </div>
              </Link>

```

The cart quantity is set to 0.

Dispatching the cart actions:
Next, when we click on the "Add to cart" button we need to dispatch an action and increase the cart quantity and set the number of products and set the total.

Open pages/product/[id].js:

```
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

function Product({ pizza }) {
  ..
  const dispatch = useDispatch();

  // Dispatching the cart actions:
  const handleClick = () => {
    dispatch(addProduct({ ...pizza, extras, price, qty }));
  };

  return(
    ...
      <button
            className="px-3 rounded-md md:h-8 ml-2 bg-[#d1411e] text-white border-none font-medium cursor-pointer"
            onClick={handleClick}
          >
            Add to Cart
          </button>
```

Open the Header component and update the cart link to /cart:

```
              <Link href="/cart">
                <div className="flex md:flex-grow items-center justify-end relative">
                  <AiOutlineShoppingCart className="w-8 h-8 ml-2 text-white opacity-70 hover:opacity-100" />
                  <div className="absolute top-[5px] right-[-10px] w-5 h-5 rounded-[50%] bg-white p-1 flex items-center font-bold text-[#d1411e]">
                    {quantity}
                  </div>
                </div>
              </Link>

```

Now when we click on the cart icon it takes you to the cart page.

Next, we update the cart page pages/cart.jsx:

```
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  ...

  return (
    ...


```
