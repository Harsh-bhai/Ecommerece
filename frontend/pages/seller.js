import Link from "next/link";
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
        <input type="text" placeholder="Enter Mobile Number" className="border p-2 rounded-lg" />
        <Link href={"/sellerform"}><button type="submit" className="group relative  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none ">Start Selling</button></Link>
      </div>
      <section className="text-gray-600 body-font border-2 m-2 mb-10 p-5 shadow-2xl mt-20 bg-green-300 border-white">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Why Sell Online
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Best product, Best deals, Best offers, Quality product, 
                Best price, Instant delivery
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 bg-white">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 mb-5 flex-shrink-0 text-3xl text-black ">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-black text-bold text-2xl font-semibold">
                    Growth in the online retail market
                  </h3>
                  <p className="leading-relaxed text-base">
                    Witnessing tremendous growth for the past 5 years, retailers
                    are moving towards online selling.
                  </p>
                  <a className="m-1 text-black  items-center space-y-2">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeinecap="round"
                          strokeinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p> Avoid Huge Investments.</p>
                    </div>

                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeinecap="round"
                          strokeinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p> Large customer base to sell anywhere</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-black mb-5 flex-shrink-0 text-3xl ">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-black text-bold text-2xl font-semibold">
                    Get orders across India
                  </h3>

                  <p className="leading-relaxed text-base">
                    Receive orders from every part of the country and follow the
                    simple steps to fulfill the orders.
                  </p>
                  <a className="m-1 text-black  items-center space-y-2">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeinecap="round"
                          strokeinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p> Avoid Huge Investments.</p>
                    </div>

                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeinecap="round"
                          strokeinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p> Large customer base to sell anywhere</p>
                    </div>
                  </a>
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-black mb-5 flex-shrink-0 text-3xl">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-black text-bold text-2xl font-semibold">
                    Earn big
                  </h3>

                  <p className="leading-relaxed text-base">
                    Our payments process is the fastest in the industry - get
                    your payments in as little as 7 days of sales.
                  </p>
                  <a className="m-1 text-black  items-center space-y-2">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeinecap="round"
                          strokeinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p> Avoid Huge Investments.</p>
                    </div>

                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeinecap="round"
                          strokeinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p> Large customer base to sell anywhere</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
         <section className="text-gray-600 body-font border-2 m-2 mb-10 p-5 shadow-2xl bg-green-300 border-white rounded-xl">
          <div className="text-center ">
            <h1 className="sm:text-3xl text-5xl font-medium title-font text-gray-900  ">
              <p className="font-bold text-5xl">Benefits of Becoming a Seller</p>
            </h1>
            {/* <p className="text-2xl my-4 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-black ">
              You need just 4 things to be a V mart Seller.
            </p> */}
            <div className="flex mt-6 justify-center">
              <div className="w-48 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto flex flex-wrap -mt-8">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 md:w-full hover:shadow-xl hover:rounded-md shadow-green-500 bg-white">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col hover:shadow-xl hover:rounded-md shadow-green-500 ">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                    <img
                      src="https://img1a.flixcart.com/fk-sp-static/images/GrowthSellIcon.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium ">
                      Growth
                    </h2>
                    <p className="leading-relaxed text-base">
                      Widen your reach to a customer base of and grow your
                      business further with the support of account managers
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full hover:shadow-xl hover:rounded-md shadow-green-500 bg-white ">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col hover:shadow-xl hover:rounded-md shadow-green-500 ">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                    <img
                      src="https://img1a.flixcart.com/fk-sp-static/images/CostSellIcon.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium ">
                      Lowest cost of doing business
                    </h2>
                    <p className="leading-relaxed text-base">
                      Along with the most competitive rate card in the industry
                      you also get on time and reliable payments
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full hover:shadow-xl hover:rounded-md shadow-green-500 bg-white">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col hover:shadow-xl hover:rounded-md shadow-green-500">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                    <img
                      src="https://img1a.flixcart.com/fk-sp-static/images/TransparencySellIcon.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium ">
                      Transparency
                    </h2>
                    <p className="leading-relaxed text-base">
                      Equal opportunity for all sellers to grow bdshevdwgh dew
                      dewd
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full hover:shadow-xl hover:rounded-md shadow-green-500 bg-white">
                <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                    <img
                      src="https://img1a.flixcart.com/fk-sp-static/images/EasySellIcon.svg"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium ">
                      Ease
                    </h2>
                    <p className="leading-relaxed text-base">
                      You just need 1 product to become an seller on V Mart.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
     </div>
    </div>
  );
};

export default Seller;
