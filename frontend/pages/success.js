import Link from "next/link";
import React from "react";

const Success = ({ orders }) => {
  console.log(orders,"orders")



  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className="text-3xl font-semibold text-green-600 m-8 text-center">
              Orders Placed Sucessfully !!!
            </h1>
        <div className="container px-5 py-4 mx-auto">
          <h1 className="text-center font-semibold text-3xl my-4">
            Here is Your Invoice
          </h1>
          <div className="w-full flex justify-center align-center">
            
            <table className=" table border-separate border-spacing-4 rounded-lg p-4 border border-green-400 w-60 bg-green-200">
              <tbody>
                <tr>
                  <td className="border border-green-200 w-60">MID</td>
                  <td className="border border-green-200 w-60">
                    {orders.MID}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">TXNID</td>
                  <td className="border border-green-200 w-60">
                    {orders.TXNID}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">STATUS</td>
                  <td className="border border-green-200 w-60">{orders.STATUS}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">ORDERID</td>
                  <td className="border border-green-200 w-60">{orders.ORDERID}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">RESPMSG</td>
                  <td className="border border-green-200 w-60">{orders.RESPMSG}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">TXNDATE</td>
                  <td className="border border-green-200 w-60">
                    {orders.TXNDATE}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">BANKNAME</td>
                  <td className="border border-green-200 w-60">
                    {orders.BANKNAME}
                  </td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">CURRENCY</td>
                  <td className="border border-green-200 w-60">{orders.CURRENCY}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">RESPCODE</td>
                  <td className="border border-green-200 w-60">{orders.RESPCODE}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">BANKTXNID</td>
                  <td className="border border-green-200 w-60">{orders.BANKTXNID}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">TXNAMOUNT</td>
                  <td className="border border-green-200 w-60 text-green-700" >₹{orders.TXNAMOUNT}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">GATEWAYNAME</td>
                  <td className="border border-green-200 w-60">{orders.GATEWAYNAME}</td>
                </tr>
                <tr>
                  <td className="border border-green-200 w-60">PAYMENTMODE</td>
                  <td className="border border-green-200 w-60">{orders.PAYMENTMODE}</td>
                </tr>
               
              </tbody>
            </table>
          </div>
        </div>
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
    "http://localhost:1337/api/orders?publicationState=preview&populate=*&sort=createdAt",
    { headers: headers }
  );
  let order = await a.json();
  let orders=order.data[0].attributes.paymentinfo

  return {
    props: { orders },
  };
}
