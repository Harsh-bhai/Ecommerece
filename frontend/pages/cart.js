import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Cart = ({ subtotal, cart, addtocart, removefromcart, clearcart }) => {
  // const count = (list,item) => {
  //   const b = {};

  //   for (const num of list) {
  //     b[num] = b[num] ? b[num] + 1 : 1;
  //   }
  //   return b[item.toString()]
  // };
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row shadow-md my-10">
        <div className="md:w-3/4  bg-white px-10 py-10">
          <div className="flex justify-between  border-b ">
            <h1 className="font-semibold text-sm md:text-2xl">Shopping Cart</h1>
            <div className="2item flex space-x-8">
              <h2 className="font-semibold text-sm md:text-2xl">{cart.length} Items</h2>
              <button
                className="bg-green-500 font-semibold hover:bg-green-600 p-3 text-sm text-white uppercase rounded-full"
                onClick={clearcart}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="flex mt-10 justify-between mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">
              Price
            </h3>
          </div>
          {cart.map((item) => {
            return (
              <div
                key={item}
                className="flex items-center justify-between hover:bg-gray-100 -mx-8 px-6 py-5"
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src={`${item[0].image.data.attributes.name}`}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item[0].title}</span>
                    <span className="text-green-500 text-xs">
                      {item[0].category}
                    </span>
                    <a
                      onClick={() => {
                        removefromcart(item, 1);
                      }}
                      href="#"
                      className="font-semibold hover:text-red-700 text-red-400 text-xs"
                    >
                      Remove
                    </a>
                  </div>
                </div>

                <span className="text-center w-1/5 font-semibold text-sm">
                  ₹{item[0].price}
                </span>
              </div>
            );
          })}

          <Link href={"/categories"}>
            <a
              href="#"
              className="flex font-semibold text-green-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-green-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </Link>
        </div>

        <div id="summary" className="md:w-1/4 px-8 py-10">
          <h1 className="font-semibold text-sm md:text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">
              Items {cart.length}
            </span>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>₹{subtotal}</span>
            </div>
            <Link href={"/checkout"}>
              <button className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase w-full rounded-full">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
