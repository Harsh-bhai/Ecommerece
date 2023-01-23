import React from "react";
import Link from "next/link";

const Orders = ({ orders }) => {

  return (
    <div className="min-h-screen">
      { orders.data==[]? (
        <div className="flex flex-col space-y-10 justify-center items-center my-20 md:text-4xl font-bold text-sm">
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
          <h1 className="md:text-5xl m-8 font-semibold text-sm ">Your Orders</h1>
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500"></div>
        </div>

          {orders.data && orders.data.map((item) => {
            
            return (
              <div key={item} ><div  //Link here  href={'/orderdetails'}  temperory cuz paymentinfo is null 
              
              className="flex flex-col m-2 md:m-12 shadow-green-300 shadow-lg cursor-pointer rounded-lg space-y-8 p-8 h-72 transition-transform transform hover:scale-105"
            >
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
                    <p className="font-bold text-sm md:text-base">{item.attributes.products[0].length==1?item.attributes.products[0][0].title:item.attributes.products[0][0].title + " and more..."}</p>
                    
                    <p className="font-bold text-sm md:text-base">₹{item.attributes.amount}</p>
                    <p className="font-semibold text-sm md:text-base">{item.attributes.products[0][0].size}</p>
                    <p className="font-bold text-sm md:text-base">Delivery Status : </p> <p>Pending</p>
                  </div>
                </div>
                <div className="1 w-1/3 ">
                <div className="flex flex-col space-y-4">
                <p className="font-bold text-sm md:text-base">ORDER ID : </p><p>{item.attributes.orderid}</p>
                <p className="font-bold text-sm md:text-base">Time and date : </p> <p>{item.attributes.paymentinfo && item.attributes.paymentinfo.TXNDATE}</p>
                
                </div></div>
              </div>
            </div></div>
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
  // `${process.env.NEXT_PUBLIC_HOST}/api/orders?publicationState=preview&populate=*&filters[email][$contains]=${form.email}`,
  let a = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/orders?publicationState=preview&populate=*`,
    { headers: headers }
  );
  let orders = await a.json();

  return {
    props: { orders },
  };
}
