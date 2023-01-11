import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Slug = ({ product, addtocart }) => {
  const router = useRouter();
  const { slug } = router.query;
  const [available, setAvailable] = useState(false);
  const [pinumber, setPinumber] = useState();

  const handlechange = (e) => {
    if (e.target.name == "pincode") {
      setPinumber(e.target.value);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
  };

  const checkavialability = () => {
    let pincodes = [492001, 490001, 491223, 491771, 491226, 490036];
    if (pincodes.includes(parseInt(pinumber))) {
      setAvailable(true);
      toast.success('In Stock', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
    else{
      setAvailable(false)
      toast.error('Sorry ,Out Of Stock', {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
  };
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
position="bottom-right"
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
        <div className="container px-5 py-24 mx-auto">
          
          <div className=" mx-auto flex flex-wrap">
            <div className="flex justify-center items-start md:w-1/2">
              <img
                alt="ecommerce"
                className="rounded"
                src={product.attributes.image.data.attributes.name}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.attributes.title}
              </h1>

              <p className="leading-relaxed">
                {product.attributes.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">Qunatity</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                      <option>{product.attributes.size}</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mb-20">
                <span className="title-font font-semibold text-gray-900 text-4xl ">
                  ₹{product.attributes.price}
                </span>

                <div className="mb-20">
                  <div className="flex space-x-5 mt-10 ">
                    <Link href={"/cart"}>
                      <button
                        onClick={() => {
                          addtocart(
                            product.attributes,
                            1,
                            product.attributes.price
                          );
                        }}
                        className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full "
                      >
                        Buy Now
                      </button>
                    </Link>

                    <button
                      onClick={() => {
                        addtocart(
                          product.attributes,
                          1,
                          product.attributes.price
                        );
                      }}
                      className="flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded-full"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>

                <div className="flex space-x-10 mt-20">
                  <form
                    className="border-black flex flex-col"
                    onSubmit={handlesubmit}
                  >
                    <div className="form-floating flex">
                      <input
                        onChange={handlechange}
                        value={pinumber}
                        className=" rounded-md w-52 h-10 border-10 border-black p-4"
                        type="number"
                        name="pincode"
                        placeholder="Enter Delivery Pincode"
                        required
                      />
                      <button
                        onClick={() => {
                          checkavialability();
                        }}
                        className=" text-white bg-green-500 border-0  px-6 focus:outline-none hover:bg-green-600 rounded-full"
                      >
                        Check
                      </button>
                    </div>
                    {available && (
                      <p className="text-green-700 font-bold mx-4">In Stock</p>
                    )}
                  </form>
                </div>
                <hr />
                <div>
                  <div className="font-bold text-2xl">Description</div>

                  <p>{product.attributes.descriptionmore}</p>
                </div>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;

export async function getServerSideProps(context) {
  let headers = { Authorization: process.env.getproductstoken };
  let a = await fetch(
    "http://localhost:1337/api/products?filters[slug]=" +
      context.query.slug +
      "&populate=*",
    {
      headers: headers,
    }
  );
  let product = await a.json();

  return {
    props: { product: product.data[0] }, // will be passed to the page component as props
  };
}
