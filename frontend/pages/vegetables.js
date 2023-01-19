import Link from "next/link";
import React from "react";

const Vegetables = ({products}) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
            <h1 className="text-5xl text-black m-4 mx-16 mb-8 font-semibold">Vegetables</h1>
      <div className="h-1 my-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-80 h-full bg-green-500"></div>
        </div>
        <div className="container px-5 py-10
         mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.data && products.data.map((item) => {
              return (<>
                <Link
                  key={item.attributes.slug}
                  href={`${process.env.NEXT_PUBLIC_FHOST}/product/${item.attributes.slug}`}
                  // href={`http://localhost:3000/product/apple`}
                >
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full border rounded-lg flex flex-col items-center shadow-lg cursor-pointer hover:scale-110 transiton transition-transform delay-50 hover:shadow-none hover:border-none">
                    <a className="block relative h-48 rounded overflow-hidden  ">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center h-full block"
                        src={item.attributes.image.data && item.attributes.image.data.attributes.name}
                      />
                    </a>
                    <div className="mt-4 flex flex-col justify-center items-center  ">
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.attributes.title}
                      </h2>
                      <div className="paise flex justify-center items-center space-x-2">
                        <p className="font-bold">
                          ₹{item.attributes.price}
                        </p>
                        <p className="line-through">
                          ₹{item.attributes.ogprice}
                        </p>
                      </div>
                    </div>
                    <p className="text-green-700 font-semibold ">
                    {Math.floor(
                        100-(item.attributes.price / item.attributes.ogprice) * 100
                      )}% off
                    </p>
                  </div>
                </Link>
                </>);
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vegetables;

export async function getServerSideProps(context) {
  let headers = { Authorization: process.env.getproductstoken };
  let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/products?filters[category][$contains]=Vegetables&populate=*`, {
    headers: headers,
  });
  let products = await a.json();
  
  return {
    props: { products }, // will be passed to the page component as props
  };
}
