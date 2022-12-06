import React from 'react'
import Link from 'next/link'

const Categories = ({products}) => {
  return (
    <div><section className="text-gray-600 body-font">  
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-24 h-full bg-green-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">Categories</h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

        {console.log(products)}
        {products.data.map((item)=>{
          return(
            <Link key={item.attributes.id} href={`/${item.attributes.pageurl}`}><div className="p-4 md:w-1/3 sm:mb-0 mb-6 cursor-pointer hover:scale-105 shadow-lg rounded-xl transiton transition-transform delay-50  hover:border-none">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={item.attributes.image.data.attributes.name}/> 

          </div>
          <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{item.attributes.title}</h2>
          <p className="text-base leading-relaxed mt-2">{item.attributes.description}</p>
          
        </div></Link>
          )

        })}

      </div>
    </div>
  </section></div>
  )
}



export default Categories


export async function getServerSideProps(context) {
  let headers={Authorization:process.env.getproductstoken}
  let a=await fetch('http://localhost:1337/api/categories-infos?populate=*',{headers:headers})
  let products=await a.json()
  console.log(products,"<products></products>")

  return {
    props: {products}, // will be passed to the page component as props
  }
}