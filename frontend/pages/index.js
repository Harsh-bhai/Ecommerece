import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useRef,useState } from "react";
import Carousel from "../components/carousel";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function Home({ fruits, Dairyproducts, Groceries }) {
  const refright = useRef();
  const refright1 = useRef();
  const refright2 = useRef();
  const img1=useRef()
  const img2=useRef()
  const img3=useRef()
  const [data, setData] = useState(null);

const toaster = async(  ) => {
  let databaseWorking = await toast.promise(
    fetch(
      `${process.env.NEXT_PUBLIC_HOST}`,
    ),
    {
      pending: 'Checking Database Connection',
      success: 'Database is Active!',
      error: 'Sorry Database is Not Active right now!',
    }
  );
  let response= await databaseWorking.json()
  console.log(response)
}

  // useEffect(() => {
  //   toaster()
  //   // Make the API request using Fetch API
    
  // }, []);

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

      <Link href={'/categories'}><div className="imgslider relative mb-1">
        <Carousel/>
       
        
      </div></Link>
      

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

      <div className=" bg-gray-100 flex flex-col justify-center ">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-72 h-full bg-green-500"></div>
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
                      {fruits.data && fruits.data.map((item) => {
                        return (
                          <Link key={item} href={`/product/${item.attributes.slug}`}><div className="Horizontal Scroll bar ">
                            <div className=" w-80 text-center items-center justify-center space-y-2 shadow-lg rounded-lg p-10 hover:scale-110 transiton transition-transform delay-50 hover:border-none shadow-green-300">
                              <img
                                src={`${process.env.NEXT_PUBLIC_HOST}` +item?.attributes.image.data.attributes.url }
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
                        100-(item.attributes.price / item.attributes.ogprice) * 100
                      )}% off
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
      <div className=" bg-gray-100 flex flex-col justify-center ">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-96 h-full bg-green-500"></div>
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
                      {Dairyproducts.data && Dairyproducts.data.map((item) => {
                        return (
                          <Link key={item} href={`/product/${item.attributes.slug}`}><div className="Horizontal Scroll bar ">
                            <div className=" w-80 text-center items-center justify-center space-y-2 shadow-lg rounded-lg p-10 hover:scale-110 transiton transition-transform delay-50 hover:border-none shadow-green-300">
                              <img
                                src={`${process.env.NEXT_PUBLIC_HOST}` +item?.attributes.image.data.attributes.url }
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
                        100-(item.attributes.price / item.attributes.ogprice) * 100
                      )}% off
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
      <div className=" bg-gray-100 flex flex-col justify-center ">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-72 h-full bg-green-500"></div>
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
                      {Groceries.data && Groceries.data.map((item) => {
                        return (
                          <Link key={item} href={`/product/${item.attributes.slug}`}><div className="Horizontal Scroll bar ">
                            <div className=" w-80 text-center items-center justify-center space-y-2 shadow-lg rounded-lg p-10 hover:scale-110 transiton transition-transform delay-50 hover:border-none shadow-green-300">
                              <img
                                src={`${process.env.NEXT_PUBLIC_HOST}` +item?.attributes.image.data.attributes.url }
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
                        100-(item.attributes.price / item.attributes.ogprice) * 100
                      )}% off
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
    `${process.env.NEXT_PUBLIC_HOST}/api/products?filters[category][$contains]=Fruits&populate=*`,
    {
      headers: headers,
    }
  );
  let fruits = await a.json();
  let b = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/products?filters[category][$contains]=Dairy&populate=*`,
    {
      headers: headers,
    }
  );
  let Dairyproducts = await b.json();

  let c = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/products?filters[category][$contains]=Groceries&populate=*`,
    {
      headers: headers,
    }
  );
  let Groceries = await c.json();

  return {
    props: { fruits, Dairyproducts, Groceries }, // will be passed to the page component as props
  };
}


