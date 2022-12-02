import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useRef } from "react";

// import { useEffect } from "react";

export default function Home({ fruits, Dairyproducts, Groceries }) {
  const refright = useRef();
  const refright1 = useRef();
  const refright2 = useRef();
  const img1=useRef()
  const img2=useRef()
  const img3=useRef()

  const toggleleft = () => {
    if (refright.current.classList.contains("md:-translate-x-1/2")) {
      refright.current.classList.remove("md:-translate-x-1/2");
    }
    refright.current.classList.add("md:translate-x-0");
    if (refright.current.classList.contains("md:-translate-x-1/2")) {
      refright.current.classList.remove("md:-translate-x-1/2");
    }
    refright.current.classList.add("md:translate-x-0");
  };
  const toggleleft1 = () => {
    if (refright1.current.classList.contains("md:-translate-x-1/2")) {
      refright1.current.classList.remove("md:-translate-x-1/2");
    }
    refright1.current.classList.add("md:translate-x-0");
    if (refright1.current.classList.contains("md:-translate-x-1/2")) {
      refright1.current.classList.remove("md:-translate-x-1/2");
    }
    refright1.current.classList.add("md:translate-x-0");
  };
  const toggleleft2 = () => {
    if (refright2.current.classList.contains("md:-translate-x-1/2")) {
      refright2.current.classList.remove("md:-translate-x-1/2");
    }
    refright2.current.classList.add("md:translate-x-0");
    if (refright2.current.classList.contains("md:-translate-x-1/2")) {
      refright2.current.classList.remove("md:-translate-x-1/2");
    }
    refright2.current.classList.add("md:translate-x-0");
  };
  const toggleleft3 = () => {
    if (img1.current.classList.contains("md:-translate-x-full")) {
      img1.current.classList.remove("md:-translate-x-full");
    }
    img1.current.classList.add("md:translate-x-0");
    if (img1.current.classList.contains("md:-translate-x-full")) {
      img1.current.classList.remove("md:-translate-x-full");
    }
    img1.current.classList.add("md:translate-x-0");
  };
  const toggleright = () => {
    if (refright.current.classList.contains("md:translate-x-0")) {
      refright.current.classList.remove("md:translate-x-0");
    }
    refright.current.classList.add("md:-translate-x-1/2");
  };
  const toggleright1 = () => {
    if (refright1.current.classList.contains("md:translate-x-0")) {
      refright1.current.classList.remove("md:translate-x-0");
    }
    refright1.current.classList.add("md:-translate-x-1/2");
  };
  const toggleright2 = () => {
    if (refright2.current.classList.contains("md:translate-x-0")) {
      refright2.current.classList.remove("md:translate-x-0");
    }
    refright2.current.classList.add("md:-translate-x-1/2");
  };
  const toggleright3 = () => {
    if (img1.current.classList.contains("md:translate-x-0")) {
      img1.current.classList.remove("md:translate-x-0");
    }
    img1.current.classList.add("md:-translate-x-full");
  };

  return (
    <div>
      {/* <div id="indicators-carousel" className="relative" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className=" duration-700 ease-in-out" data-carousel-item="active">
            <img src="/banner1.jpg" alt="..."/>
        </div>
        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="https://previews.123rf.com/images/elenabsl/elenabsl2001/elenabsl200100005/137269692-grocery-shopping-promotional-sale-banner-fast-shopping-cart-full-of-fresh-colorful-food.jpg" alt="..."/>
        </div>
        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div> */}

      <div className="imgslider relative">
        <img
          src="slidebutton.jpg"
          className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute right-0 top-40 buttonright pulse md:block hidden  
                " onClick={toggleleft3}
          alt=""
        />
        <img
          src="slidebuttonr.jpg"
          className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute left-0 top-40 buttonleft pulse md:block hidden 
                "onClick={toggleright3}
          alt=""
        />
        <div className="maindiv flex  overflow-hidden">
          <div><div  className="slide1 h-96  w-full translate-x-0 transform transition-transform">
            <img src="/banner1.jpg" className="  " alt="" />
          </div></div>
         
        </div>
      </div>

      <style jsx>
        {`
          .pulse {
            box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
            animation: pulse 2s infinite;
          }
          .pulse:hover {
            animation: none;
          }

          @-webkit-keyframes pulse {
            0% {
              -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
            }
            70% {
              -webkit-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
            }
            100% {
              -webkit-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
            }
          }
          @keyframes pulse {
            0% {
              -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
              box-shadow: 0 0 0 0 rgba(204, 169, 44, 0.4);
            }
            70% {
              -moz-box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
              box-shadow: 0 0 0 10px rgba(204, 169, 44, 0);
            }
            100% {
              -moz-box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
              box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
            }
          }
        `}
      </style>

      {/* <div className="banner flex justify-center items-center my-4 ">
        <img src="/banner1.jpg" alt="" className="w-[75rem] rounded-lg" />
      </div> */}

      <div className=" bg-gray-100 flex flex-col justify-center mb-28">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-green-500"></div>
        </div>
        <div className="flex  sm:flex-row flex-col  py-6 ">
          <h1 className="sm:w-2/5 text-gray-900 font-semibold title-font  ml-20 mb-2 sm:mb-0 text-5xl">
            Fruits
          </h1>
        </div>
        <div>
          <div className="slider relative">
            <div className="items flex space-x-10 overflow-scroll md:overflow-hidden w-full ">
              <section className="">
                <div className="">
                  <img
                    src="slidebutton.jpg"
                    className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute right-0 top-56 buttonright pulse md:block hidden  
                "
                    onClick={toggleright}
                    alt=""
                  />
                  <img
                    src="slidebuttonr.jpg"
                    className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute left-0 top-56 buttonleft pulse md:block hidden 
                "
                    onClick={toggleleft}
                    alt=""
                  />
                  <div className="">
                    <div
                      ref={refright}
                      className="w-full h-fit py-10 px-8 space-x-11 flex items-center overflow-hidden product-container cursor-pointer  md:translate-x-0 transition-transform transform duration-700"
                    >
                      {fruits.data.map((item) => {
                        return (
                          <Link key={item} href={`/product/${item.attributes.slug}`}><div className="Horizontal Scroll bar ">
                            <div className=" w-80 text-center items-center justify-center space-y-2 shadow-lg rounded-lg p-10">
                              <img
                                src={item.attributes.image.data.attributes.name}
                                alt=""
                                className="w-60 h-60 rounded-lg"
                              />
                              <p className="font-bold">
                                {item.attributes.title}
                              </p>
                              <p className="font-semibold text-xl">
                                ₹{item.attributes.price}
                              </p>
                              <p className="text-green-700 font-semibold">
                                {Math.floor(
                                  (item.attributes.price /
                                    item.attributes.ogprice) *
                                    100
                                )}
                                % off
                              </p>
                            </div>
                          </div></Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 flex flex-col justify-center mb-28">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-green-500"></div>
        </div>
        <div className="flex  sm:flex-row flex-col  py-6 ">
          <h1 className="sm:w-2/5 text-gray-900 font-semibold title-font  ml-20 mb-2 sm:mb-0 text-5xl">
            Dairy Products
          </h1>
        </div>
        <div>
          <div className="slider relative">
            <div className="items flex space-x-10 overflow-scroll md:overflow-hidden w-full ">
              <section className="">
                <div className="">
                  <img
                    src="slidebutton.jpg"
                    className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute right-0 top-56 buttonright pulse md:block hidden  
                "
                    onClick={toggleright1}
                    alt=""
                  />
                  <img
                    src="slidebuttonr.jpg"
                    className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute left-0 top-56 buttonleft pulse md:block hidden 
                "
                    onClick={toggleleft1}
                    alt=""
                  />
                  <div className="">
                    <div
                      ref={refright1}
                      className="w-full h-fit py-10 px-8 space-x-11 flex items-center overflow-hidden product-container cursor-pointer  md:translate-x-0 transition-transform transform duration-700"
                    >
                      {Dairyproducts.data.map((item) => {
                        return (
                          <Link key={item} href={`/product/${item.attributes.slug}`}><div className="Horizontal Scroll bar ">
                            <div className=" w-80 text-center items-center justify-center space-y-2 shadow-lg rounded-lg p-10">
                              <img
                                src={item.attributes.image.data.attributes.name}
                                alt=""
                                className="w-60 h-60 rounded-lg"
                              />
                              <p className="font-bold">
                                {item.attributes.title}
                              </p>
                              <p className="font-semibold text-xl">
                                ₹{item.attributes.price}
                              </p>
                              <p className="text-green-700 font-semibold">
                                {Math.floor(
                                  (item.attributes.price /
                                    item.attributes.ogprice) *
                                    100
                                )}
                                % off
                              </p>
                            </div>
                          </div></Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100 flex flex-col justify-center mb-28">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-green-500"></div>
        </div>
        <div className="flex  sm:flex-row flex-col  py-6 ">
          <h1 className="sm:w-2/5 text-gray-900 font-semibold title-font  ml-20 mb-2 sm:mb-0 text-5xl">
            Groceries{" "}
          </h1>
        </div>
        <div>
          <div className="slider relative">
            <div className="items flex space-x-10 overflow-scroll md:overflow-hidden w-full ">
              <section className="">
                <div className="">
                  <img
                    src="slidebutton.jpg"
                    className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute right-0 top-56 buttonright pulse md:block hidden  
                "
                    onClick={toggleright2}
                    alt=""
                  />
                  <img
                    src="slidebuttonr.jpg"
                    className="z-10 h-20 cursor-pointer rounded-2xl opacity-50 absolute left-0 top-56 buttonleft pulse md:block hidden 
                "
                    onClick={toggleleft2}
                    alt=""
                  />
                  <div className="">
                    <div
                      ref={refright2}
                      className="w-full h-fit py-10 px-8 space-x-11 flex items-center overflow-hidden product-container cursor-pointer  md:translate-x-0 transition-transform transform duration-700"
                    >
                      {Groceries.data.map((item) => {
                        return (
                          <Link key={item} href={`/product/${item.attributes.slug}`}><div className="Horizontal Scroll bar ">
                            <div className=" w-80 text-center items-center justify-center space-y-2 shadow-lg rounded-lg p-10">
                              <img
                                src={item.attributes.image.data.attributes.name}
                                alt=""
                                className="w-60 h-60 rounded-lg"
                              />
                              <p className="font-bold">
                                {item.attributes.title}
                              </p>
                              <p className="font-semibold text-xl">
                                ₹{item.attributes.price}
                              </p>
                              <p className="text-green-700 font-semibold">
                                {Math.floor(
                                  (item.attributes.price /
                                    item.attributes.ogprice) *
                                    100
                                )}
                                % off
                              </p>
                            </div>
                          </div></Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  let headers = { Authorization: process.env.getproductstoken };
  let a = await fetch(
    "http://localhost:1337/api/products?filters[category][$contains]=Fruits&populate=*",
    {
      headers: headers,
    }
  );
  let fruits = await a.json();
  let b = await fetch(
    "http://localhost:1337/api/products?filters[category][$contains]=Dairy&populate=*",
    {
      headers: headers,
    }
  );
  let Dairyproducts = await b.json();

  let c = await fetch(
    "http://localhost:1337/api/products?filters[category][$contains]=Groceries&populate=*",
    {
      headers: headers,
    }
  );
  let Groceries = await c.json();

  return {
    props: { fruits, Dairyproducts, Groceries }, // will be passed to the page component as props
  };
}
