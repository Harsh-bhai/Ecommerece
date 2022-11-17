import React from "react";

const Seller = () => {
  return (
    <div>
     <div className="my-4 flex justify-center ">
     <img src="https://anuna.com/images/NewFolder/Become%20A%20Seller%20-%20Anuna.png?1604649915954"  alt="" className="rounded-lg md:w-full mx-4 " />
     </div>
     <div>
      <h1 className=" text-center text-4xl font-semibold my-8">Launch your business in 10 minutes</h1>
      <div className="flex justify-center items-center space-x-4">
        <input type="text" placeholder="Enter your Mobile Number here" className="border p-2 rounded-lg" />
        <button type="submit" className="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700">Start Selling</button>
      </div>
     </div>
    </div>
  );
};

export default Seller;
