import Link from 'next/link'  
import React from 'react'

const Success = ({orders}) => {
  return (
    <div ><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-2/3 my-8 flex  justify-center m items-center sm:items-center mx-auto">
        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Your Order hs been Placed Sucessfully</h1>
        <Link href={'/orders'}><button className="flex-shrink-0 rounded-full text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600  text-lg mt-10 sm:mt-0">Check Your Orders</button></Link>
      </div>
{/* <h1 className='text-center font-semibold text-3xl my-4'>Here is Your Bill</h1>
      <div className="w-full flex justify-center align-center">
    <table className="border-separate border-spacing-2 border border-slate-400 w-60 bg-slate-300">
        <tbody >
          <tr>
            <td className="border border-slate-300 w-60">MID</td>
            <td className="border border-slate-300 w-60">kUwlsd90506126528048</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">TXNID</td>
            <td className="border border-slate-300 w-60">20221211111212800110168368504320473</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">STATUS</td>
            <td className="border border-slate-300 w-60">TXN_SUCCESS</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">ORDERID</td>
            <td className="border border-slate-300 w-60">Oid5076</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">RESPMSG</td>
            <td className="border border-slate-300 w-60">Detroit</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">TXNDATE</td>
            <td className="border border-slate-300 w-60">2022-12-11 11:44:31.0</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">BANKNAME</td>
            <td className="border border-slate-300 w-60">State Bank of India</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">CURRENCY</td>
            <td className="border border-slate-300 w-60">INR</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">RESPCODE</td>
            <td className="border border-slate-300 w-60">01</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">BANKTXNID</td>
            <td className="border border-slate-300 w-60">16488289974</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">TXNAMOUNT</td>
            <td className="border border-slate-300 w-60">1020.00</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">GATEWAYNAME</td>
            <td className="border border-slate-300 w-60">SBI</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">PAYMENTMODE</td>
            <td className="border border-slate-300 w-60">NB</td>
          </tr>
          <tr>
            <td className="border border-slate-300 w-60">CHECKSUMHASH</td>
            <td className="border border-slate-300 w-60"></td>
          </tr>
        </tbody>
      </table>
  </div> */}
    </div>
  </section></div>
  )
}

export default Success

export async function getServerSideProps(context) {
    let headers={Authorization:process.env.getproductstoken}
    let a=await fetch('http://localhost:1337/api/orders?publicationState=preview&populate=*',{headers:headers})
    let orders=await a.json()
    
    return {
      props: {orders}, 
    }
  }