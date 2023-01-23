import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-10 mx-auto">
      <div className=" ">
        <div className="img flex justify-center h-32"><img src="vmartgreen.png" alt="" /></div>
        <p className=" leading-relaxed text-center my-8 font-bold ">Only a reduction in the magnitude of hard work will not make villagers happy<br/>But exact payment of their hard work will make them happy.</p>
      </div>

      <section className="m-2 mb-5 font-bold p-5">
          <p className="text-white bg-green-400 rounded-lg p-4 leading-loose ">
            V Mart Marketplace is India’s leading platform for selling online.
            Be it a manufacturer, vendor or supplier, simply sell your products
            online on V Mart and become a top e-commerce player with minimum
            investment. Through a team of experts offering exclusive seller
            workshops, training, and seller support, V Mart focuses on
            empowering sellers across India. Selling on V Mart.com is easy and
            absolutely free. All you need is to register, list your catalog and
            start selling your products. Whats more? We have third party
            ‘Ecommerce Service Providers’ who provide logistics, cataloging
            support, product photoshoot and packaging materials. We have a
            program called Seller Protection Fund to safeguard sellers from
            losses via compensations. We provide V Mart Fulfilment services
            through which you can ensure faster delivery of your items, quality
            check by our experts and a delightful packaging. Combine these with
            the fastest payments in the industry and you get an excellent seller
            portal. No wonder V Mart is India’s favourite place to sell online.
          </p>
        </section>
       
        <section className="text-gray-600 body-font mx-40">
  <h1 className=' my-10 font-bold text-green-700 text-3xl text-center mx-[-53px]'>Developer</h1>

    <div className="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img className="object-cover object-center rounded" alt="hero" src="white1.png"/>
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Harsh Dewangan
        </h1>
        <h2 className='text-green-700 font-bold mb-2'>Web Developer ,Programmer ,Data Science </h2>
        <p className="mb-8 leading-relaxed">Hi ,I am Harsh Dewangan ,Student at Bhilai Institute Of Technology ,Durg.
         more about me here - Check my 
        <Link  href={'https://harshdewanganportfolio.netlify.app'}>
          <a target={'_blank'} className='text-green-700 font-bold cursor-pointer '> Portfolio.</a>
        </Link>
        </p>
        <div className="flex justify-center">
        </div>
      </div>
    </div>
  </section>
        <h1 className='text-center my-20 font-bold text-green-700 text-3xl'>Services Provided</h1>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Best quality items</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Fast services</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Free delivery</span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Exiciting deals </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Best discounts </span>
          </div>
        </div>
        <div className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-green-600 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">Easy returns</span>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  
  </div>
  )
}

export default About