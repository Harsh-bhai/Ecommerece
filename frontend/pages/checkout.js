import Script from "next/script";
import React, { useState } from "react";

const Checkout = ({ subtotal ,cart}) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
  };

  const submit = async () => {
    let orderid = "Oid" + Math.floor(10000 * Math.random());
  
    const data = { orderid: orderid, amount: subtotal, ...form, cart: cart };

    let a = await fetch("http://localhost:1337/api/orders/pretransaction", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        // "Authorization ":"Bearer 5d5ab4bb5bf8ccdce96e68054d89fd4e4e9ca042ed3f8a35531efc64bc0bb06b97c10c48b5efe5c1e0bfd4680e1033fb8a542ea2a0e593caa94725e7aa05f1e869b411fe5507f7398a117be01b0f99a223dc3f27b06acf904ea0190f41287df6a59f1d273315bccef82dbbdd59e5e9855f714ae21dce91d58707db6e32d38baf"
      },
      body: JSON.stringify(data),
    });
    let content = await a.json();
    console.log(content.body, "here");

    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: orderid /* update order id */,
        token: content.body.txnToken /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: subtotal /* update amount */,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.init(config)
        .then(function onSuccess() {
          // after successfully updating configuration, invoke JS Checkout
          window.Paytm.CheckoutJS.invoke();
        })
        .catch(function onError(error) {
          console.log("error => ", error);
        });
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <Script id="script"
        type="application/javascript"
        crossorigin="anonymous"
        src={` https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_MID}.js`}
      >
      </Script>
      <form onSubmit={handlesubmit} onChange={handlechange} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              First Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handlechange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              name="phone"
              value={form.phone}
              onChange={handlechange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="phone"
              type="number"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Address
            </label>
            <textarea
              value={form.address}
              name="address"
              rows={5}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="text"
              placeholder="Address  "
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="city"
            >
              City
            </label>
            <input
              name="city"
              value={form.city}
              onChange={handlechange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="city"
              type="text"
              placeholder="City"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="state"
            >
              State
            </label>
            <input
              name="state"
              value={form.state}
              onChange={handlechange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="state"
              type="text"
              placeholder="State"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="pincode"
            >
              Pincode
            </label>
            <input
              name="pincode"
              value={form.pincode}
              onChange={handlechange}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="pincode"
              type="number"
              placeholder="90210"
            />
          </div>
          <button onClick={submit} className="bg-green-500 font-semibold hover:bg-green-600 py-3 text-sm text-white uppercase p-4 my-8 ml-4 rounded-full">
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
