import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  // To fix hydration UI mismatch issues, we need to wait until the component has mounted.
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div class="flex flex-col m-8 items-center justify-center ">
      <div class="w-full md:w-full">
        <table class="w-full flex flex-row flex-no-wrap  rounded-lg overflow-hidden sm:shadow-lg my-5 md:inline-table">
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
            {cart.products.map((product) => (
              <tr
                class="flex flex-col flex-no wrap md:table-row mb-10 md:mb-0"
                key={product._id}
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
                    {product.title}
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  <span className="">{product.extraOptions.map(extra =>
                  <span key={extra._id}>{extra.text}</span>
                  )}</span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5">
                  <span className="before:text-normal before:content-['Price: ']">
                  {product.price}
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
                  <span className="before:text-normal before:content-['Quantity: ']">
                  {product.qty}
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 truncate">
                  <span className="before:text-normal before:content-['Price: ']">
                  {product.price * product.qty}
                  </span>
                </td>
                <td class="border-grey-light border hover:bg-gray-100 p-5 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex-col space-y-2 md:space-y-0 md:inline-flex md:flex-row gap-6  border p-8 mt-5 items-center justify-center text-center ">
        <div className="font-medium text-lg">
          <b className=" mr-2">Subtotal:</b>${cart.total}
        </div>
        <div className="font-medium text-lg">
          <b className=" mr-2">Discount:</b>$0.00
        </div>
        <div className="font-medium text-lg">
          <b className=" mr-2">Cart Total:</b>${cart.total}
        </div>
        <button className="h-8 bg-[#d1411e] text-white px-4 rounded-lg font-bold cursor-pointer ">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
