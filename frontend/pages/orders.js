import React, { useState } from "react";
import Link from "next/link";

const Orders = ({ orders }) => {
  return (
    <div>
      {console.log("Orders",orders)}
      {!orders? (
        <div className="flex flex-col space-y-10 justify-center items-center my-20 text-4xl font-bold">
          <div>No Orders Till Now</div>
          <Link href={"/"}>
            <button className=" text-white bg-green-600 mx-8  py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg">
              {" "}
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-5xl m-8 font-semibold">Your Orders</h1>
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500"></div>
        </div>

          {orders.data.map((item) => {
            return (
              <div
                key={item}
                className="flex flex-col m-12 shadow-green-300 shadow-lg cursor-pointer rounded-lg space-y-8 p-8 h-72 transition-transform transform hover:scale-105"
              >{console.log(item.attributes,"lkafjsadj")}
                <div className="main flex space-x-4  ">
                  <div className="1 w-1/3 ">
                    <img className="w-36  "
                      src={
                        item.attributes.products[0][0].image.data.attributes
                          .name
                      }
                      alt=""
                    />
                  </div>
                  <div className="1 w-1/3  ">
                    <div className="flex flex-col space-y-4">
                      <p className="font-bold">{item.attributes.products[0][0].title}</p>
                      <p className="font-bold">₹{item.attributes.products[0][0].price}</p>
                      <p className="font-semibold">{item.attributes.products[0][0].size}</p>
                      <p className="font-bold">Delivery Status : </p> <p>Pending</p>
                    </div>
                  </div>
                  <div className="1 w-1/3 ">
                  <div className="flex flex-col space-y-4">
                  <p className="font-bold">ORDER ID : </p><p>{item.attributes.orderid}</p>
                  <p className="font-bold">Time and date : </p> <p>{item.attributes.paymentinfo && item.attributes.paymentinfo.TXNDATE}</p>
                  
                  </div></div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  let headers = { Authorization: process.env.getproductstoken };
  let a = await fetch(
    "http://localhost:1337/api/orders?publicationState=preview&populate=*",
    { headers: headers }
  );
  let orders = await a.json();

  return {
    props: { orders },
  };
}
