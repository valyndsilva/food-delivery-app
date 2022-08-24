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
