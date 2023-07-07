import React,{useEffect} from 'react'
import Link from 'next/link'

const Categories = ({products}) => {
  useEffect(() => {
    console.log(products,"here")

  }, [])
  
  return (
    <div><section className="text-gray-600 body-font">  
    <div className="container px-5 py-14 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-200 rounded overflow-hidden">
          <div className="w-40 h-full bg-green-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-2 sm:mb-0">Categories</h1>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

        {products.data && products.data.map((item)=>{
          return(
            <Link key={item.attributes.id} href={`/${item.attributes.pageurl}`}><div className="p-4 md:w-1/3 sm:mb-0 mb-6 cursor-pointer hover:scale-105 shadow-lg rounded-xl transiton transition-transform delay-50  hover:border-none">
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={`${process.env.NEXT_PUBLIC_HOST}` +item.attributes.image.data.attributes.formats.thumbnail.url }/> 
            {/* item.attributes && item.attributes.image.data.attributes.name */}

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
  let a=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/categories-infos?populate=*`)
  let products=await a.json()
  return {
    props: {products}, // will be passed to the page component as props
  }
}