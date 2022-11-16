import Link from "next/link";
import React from "react";

const Dailyneeds = ({products}) => {
  console.log(products.data, "hre");
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.data.map((item) => {
              return (
                <Link
                  key={item.attributes.slug}
                  href={`${process.env.NEXT_PUBLIC_HOST}/products/${item.attributes.slug}`}
                >
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center h-full block"
                        src={item.attributes.image.data.attributes.name}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {item.attributes.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {item.attributes.title}
                      </h2>
                      <p className="mt-1">₹{item.attributes.price}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dailyneeds;

export async function getServerSideProps(context) {
  let headers = { Authorization: process.env.getproductstoken };
  let a = await fetch("http://localhost:1337/api/products?filters[category][$contains]=Daily needs&populate=*", {
    headers: headers,
  });
  let products = await a.json();
  
  return {
    props: { products }, // will be passed to the page component as props
  };
}
