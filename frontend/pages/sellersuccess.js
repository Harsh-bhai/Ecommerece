import Link from "next/link";
import React from "react";

const Sellersuccess = () => {
  return (
    <div className="flex my-20 items-center min-h-screen flex-col space-y-4">
      <h1 className="text-3xl font-semibold">Thanks for Submitting the form</h1>
      <h1 className="text-3xl font-semibold">We will contact you soon</h1>
      <Link href={'/categories'}><button className=" text-white bg-green-600 mx-8  py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg my-20">
        Continue Shopping
      </button></Link>
    </div>
  );
};

export default Sellersuccess;
