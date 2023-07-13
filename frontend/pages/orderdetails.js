import Link from "next/link";
import React from "react";

const Orderdetails = ({ orders }) => {
  return (
    <div className="">
      <h1 className="text-4xl font-semibold m-8">Order Details</h1>
      <div className="h-1 bg-gray-200 rounded overflow-hidden">
        <div className="w-64 h-full bg-green-500"></div>
      </div>
      <div className="flex flex-col  mx-10 justify-center ">
        <div className="flex space-x-4  items-center">
          <h2 className="md:text-2xl text-lg font-semibold m-8">Order Id : </h2>
          <div className="md:text-2xl text-lg ">{orders && orders.attributes.orderid}</div>
        </div>
        <div className="flex space-x-4  items-center">
          <h2 className="md:text-2xl text-lg font-semibold m-8">Address : </h2>
          <div className="md:text-2xl text-lg flex flex-wrap">
            {orders && orders.attributes.address}
          </div>
          <br />{" "}
        </div>
        <div className="flex space-x-4  items-center">
          <h2 className="md:text-2xl text-lg font-semibold m-8">
            Date and time of order :{" "}
          </h2>
          <div className="md:text-2xl text-lg ">
            {orders && orders.attributes.paymentinfo.TXNDATE}
          </div>
        </div>
        <div className="flex space-x-4  items-center">
          <h2 className="md:text-2xl text-lg font-semibold m-8">Delivery Status :</h2>
          <div className="md:text-2xl text-lg text-red-600 ">Pending</div>
        </div>
      </div>
      <div className="h-1 bg-gray-200 rounded overflow-hidden my-6">
        <div className="w-0 h-full bg-green-500 "></div>
      </div>
      <div className="flex  md:flex-row flex-col-reverse   ">
        <div className="w-1/5 mx-10">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-20">
              <div className="h-full w-10 absolute inset-0 flex orderss-center justify-center">
                <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 items-center w-10 h-10 rounded-full bg-green-500 inline-flex orderss-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-green-900 mb-1 tracking-wider">
                  Ordered
                </h2>
              </div>
            </div>
            <div className="flex relative pb-20">
              <div className="h-full w-10 absolute inset-0 flex orderss-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 items-center w-10 h-10 rounded-full bg-gray-500 inline-flex orderss-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Packaged
                </h2>
              </div>
            </div>
            <div className="flex relative pb-20">
              <div className="h-full w-10 absolute inset-0 flex orderss-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 items-center w-10 h-10 rounded-full bg-gray-500 inline-flex orderss-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Shipped
                </h2>
              </div>
            </div>
            <div className="flex relative pb-20">
              <div className="h-full w-10 absolute inset-0 flex orderss-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 items-center w-10 h-10 rounded-full bg-gray-500 inline-flex orderss-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Delivered
                </h2>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 items-center w-10 h-10 rounded-full bg-gray-500 inline-flex orderss-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  Returned
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          {orders && orders.attributes.products &&
            orders.attributes.products.map((item) => {
              return (
                <div
                  key={orders.products}
                  className="flex flex-col m-2 md:m-12 shadow-green-300 shadow-lg cursor-pointer rounded-lg space-y-8 p-8 h-72 transition-transform transform hover:scale-105 my-4"
                >
                  <div className="main flex space-x-4  ">
                    <div className="1 w-1/4 md:w-1/3 ">
                      <img
                        className="w-36  "
                        src={item[0] && (process.env.NEXT_PUBLIC_HOST+item[0].image.data.attributes.url)}
                        alt=""
                      />
                    </div>
                    <div className="1 w-1/2 md:w-1/3  ">
                      <div className="flex flex-col space-y-4">
                        <p className="font-bold">{item[0] && item[0].title}</p>
                        <p className="font-semibold">
                          Category :{item[0] && item[0].category}
                        </p>

                        <p className="font-bold">₹{item[0] && item[0].price}</p>
                        <p className="font-semibold">
                          Quantity : {item[0] && item[0].size}
                        </p>
                      </div>
                    </div>
                    <div className="1 w-1/4 md:w-1/3 flex items-center  ">
                      <Link href={`/product/${item[0] && item[0].slug}`}>
                        <button className=" text-white bg-green-600 md:mx-8  py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full md:text-lg text-sm">
                          Buy Again
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Orderdetails;

export async function getServerSideProps(context) {
  let headers = { Authorization: process.env.getproductstoken };
  let a = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/orders?publicationState=preview&populate=*&sort=createdAt`,
    { headers: headers }
  );
  let order = await a.json();
  let orders = order.data[0];

  return {
    props: { orders },
  };
}

//`/product/${item.attributes.slug}`
