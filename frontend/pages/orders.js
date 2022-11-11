import React from 'react'
import Link from 'next/link'

const Orders = () => {
  return (
    <div className='flex flex-col space-y-20 justify-center items-center my-20 text-4xl font-bold'><div>No Orders Till Now</div>
    <Link href={'/'}><button className=" text-white bg-green-600 mx-8  py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg"> Shop Now</button></Link></div>
  )
}

export default Orders