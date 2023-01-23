import Link from "next/link";
import React,{useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Success = ({ orders }) => {

useEffect(() => {
  toast.success('Order Placed Successfully', {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


}, [])


  return (
    
    <div className="min-h-screen">
      <section className="text-gray-600 body-font">
            <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        <h1 className="text-3xl font-semibold text-green-600 m-8 text-center">
              Thanks For Shopping!!!
            </h1>
        {orders && <div className="container px-5 py-4 mx-auto">
          <h1 className="text-center font-semibold text-3xl my-4">
            Here is Your Invoice
          </h1>
          <div className=" flex justify-center align-center ">
            
            <table className=" table border-separate border-spacing-4 rounded-lg p-4 border border-green-400 text-xs md:text-base  bg-green-200 ">
              <tbody>
                <tr>
                  <td className="border border-green-200 ">MID</td>
                  <td className="border border-green-200 ">
                    {orders && orders.MID}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">TXNID</td>
                  <td className="border border-green-200 ">
                    {orders && orders.TXNID}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">STATUS</td>
                  <td className="border border-green-200 ">{orders && orders.STATUS}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">ORDERID</td>
                  <td className="border border-green-200 ">{orders && orders.ORDERID}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">RESPMSG</td>
                  <td className="border border-green-200 ">{orders && orders.RESPMSG}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">TXNDATE</td>
                  <td className="border border-green-200 ">
                    {orders && orders.TXNDATE}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">BANKNAME</td>
                  <td className="border border-green-200 ">
                    {orders && orders.BANKNAME}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">CURRENCY</td>
                  <td className="border border-green-200 ">{orders && orders.CURRENCY}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">RESPCODE</td>
                  <td className="border border-green-200 ">{orders && orders.RESPCODE}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">BANKTXNID</td>
                  <td className="border border-green-200 ">{orders && orders.BANKTXNID}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">TXNAMOUNT</td>
                  <td className="border border-green-200  text-green-700" >₹{orders && orders.TXNAMOUNT}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">GATEWAYNAME</td>
                  <td className="border border-green-200 ">{orders && orders.GATEWAYNAME}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 ">PAYMENTMODE</td>
                  <td className="border border-green-200 ">{orders && orders.PAYMENTMODE}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>}
        <div className="flex justify-center items-center">
        <Link href={"/orders"}>
              <button className="flex-shrink-0 rounded-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600  text-lg mt-10 sm:mt-0">
                Check Your Orders
              </button>
            </Link>
        </div>
        
      </section>
    </div>
  );
};

export default Success;

export async function getServerSideProps(context) {
  let headers = { Authorization: process.env.getproductstoken };
  let a = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/orders?publicationState=preview&populate=*&sort=createdAt`,
    { headers: headers }
  );
  let order = await a.json();
  let orders=order.data[0].attributes.paymentinfo

  return {
    props: { orders },
  };
}
