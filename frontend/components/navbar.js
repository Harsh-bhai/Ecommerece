import React from "react";
import { useRef, useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle, AiOutlineShoppingCart } from "react-icons/ai";

import Link from "next/link";
const Navbar = ({ cart, logout }) => {
  const [login, setlogin] = useState(false);
  const [dropdown, setdropdown] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwtoken")) {
      setlogin(true);
    }

  
  }, []);
  const toggle = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div>
      <div className="navbar flex flex-col md:flex-row items-center bg-green-400 md:py-3 shadow-lg py-2 ">
        <div className=" top-0 left-0 absolute m-7 md:m-10 text-3xl font-thin md:hidden">
          {" "}
          <GiHamburgerMenu onClick={toggle} />
        </div>
        <Link href={"/"}>
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 md:z-10 my-4 md:my-0 ml-10 cursor-pointer">
            <img src="/white.png" className="w-60 md:w-80 -ml-4 " alt="" />
            {/* <span className="ml-3 text-xl">MyShop</span> */}
          </div>
        </Link>
        <div
          ref={ref}
          className="navitems flex flex-col md:flex-row md:items-center md:bg-inherit bg-green-400 px-10 py-4 md:py-0 absolute top-0 left-0 transform transition-transform -translate-x-full h-full md:h-auto md:w-full w-2/3 md:static md:translate-x-0  md:transition-none ease-in-out z-20"
        >
          <span
            className="absolute top-8 left-8
          "
            onClick={toggle}
          >
            <AiFillCloseCircle className="text-4xl font-extralight md:hidden" />
          </span>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8  mainitems my-24 md:my-4 space-y-6 md:space-y-0">
            <Link href={"/about"}>
              <div
                onClick={toggle}
                className="hover:text-green-600 text-gray-700 cursor-pointer"
              >
                About
              </div>
            </Link>
            {/* <Link  href={"/services"}><div onClick={toggle} className='hover:text-green-600 text-gray-700 cursor-pointer'>Services</div></Link> */}
            <Link href={"/categories"}>
              <div
                onClick={toggle}
                className="hover:text-green-600 text-gray-700 cursor-pointer"
              >
                Categories
              </div>
            </Link>
            <Link href={"/contact"}>
              <div
                onClick={toggle}
                className="hover:text-green-600 text-gray-700 cursor-pointer"
              >
                Feedback
              </div>
            </Link>
            <Link href={"/seller"}>
              <div
                onClick={toggle}
                className="hover:text-green-600 text-gray-700 cursor-pointer"
              >
                Become a Seller
              </div>
            </Link>
            <Link href={"/orders"}>
              <div
                onClick={toggle}
                className="hover:text-green-600 text-gray-700 cursor-pointer"
              >
                My Orders
              </div>
            </Link>
          </div>
        </div>
        <div className="right flex flex-col items-center space-y-4 md:flex-row md:space-y-0">
          {/* <div className="flex justify-center">
            <div className=" xl:w-96">
              <div className="input-group relative flex items-stretch w-full rounded">
                <input
                  type="search"
                  className="  form-control  min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <span
                  className="cursor-pointer input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
                  id="basic-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    className="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div> */}

          <div className="mini flex justify-center items-center mr-6">
            {console.log(login, "login")}
            {login ? (
              <button
                onClick={logout}
                className=" text-white bg-green-600 mx-8  py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg"
              >
                Logout
              </button>
              
              
            ) : (
              <Link href={"/login"}>
                <button className=" text-white bg-green-600 mx-8  py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg">
                  Login
                </button>
              </Link>
            )}
            <Link href={"/cart"}>
              <div className="flex  cursor-pointer">
                <AiOutlineShoppingCart className="text-3xl" />
                <p className=" text-xl">({cart.length})</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
