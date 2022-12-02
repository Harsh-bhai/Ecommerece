import React,{useState} from 'react'
import Script from 'next/script'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Sellerform = () => {
  const Router=useRouter()

const [form, setform] = useState({firstname:'',lastname:'',phone:'',email:'',city:'',state:'',pincode:''})
console.log(form)
const handlechange= ( e ) => {
  setform({...form,[e.target.name]:e.target.value})
}
const handlesubmit= async( e ) => {
  e.preventDefault()
  const data = {...form };

  let a=await fetch('http://localhost:1337/api/sellers', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  let prod=await a.json()
  console.log(prod,"hereprod")
  Router.push("/sellersuccess")
  
}






<Head>  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link></Head>
  return (
    <div className="p-4 bg-gradient-to-r from-green-50 to-green-500 overflow-hidden">

<style jsx>{`
  #slider {
    overflow-y: hidden;
    overflow-x: hidden;
  }

  @keyframes slider {

    25% {
      left: 0%;
    }

    57% {
      left: -100%;
    }

    99% {
      left: -200%;
    }


  }

  #slider figure {
    width: 300%;
    position: relative;
    animation: 9s slider infinite;
  }


  #slider figure .const {
    width: 33.333333333%;
    height: 100%;
    float: left;
  }`}
</style>

  <div className="flex flex-row overflow-hidden ">
    <div
      className="w-2/3 border-2 rounded-xl shadow-gray-400-600 shadow-2xl flex justify-center justify-items-center bg-gradient-to-r from-green-50 to-green-500">

      <form onSubmit={handlesubmit} action="" className="m-0  pb-2 p-5  space-y-0  ">

        <div className="w-full h-10 font-bold text-left flex text-green-500 text-3xl mb-8">
          Starting Selling</div>


        <div className="form-floating mb-3">
          <label htmlFor="" className="font-semibold mx-8 ">First Name</label>
          <input type="text" onChange={handlechange} value={form.firstname} name='firstname' className="form-control rounded-lg p-2" placeholder="First Name" required/>
        </div>

        <hr className="h-10 border-black" />
 
        <div className="form-floating mb-3">
          <label htmlFor="" className="font-semibold mx-8 ">Last Name</label>
          <input type="text" onChange={handlechange} value={form.lastname} name='lastname' className="form-control rounded-lg p-2" placeholder="Last Name" required/>
        </div>

        <hr className="h-10 border-black" />

        <div className="form-floating mb-3">
          <label htmlFor="" className="font-semibold mx-4 ">Phone Number</label>
          <input type="number" onChange={handlechange} value={form.phone} name='phone' className="form-control rounded-lg p-2" placeholder="Phone Number" required/>
        </div>

        <hr className="h-10 border-black" />

        <div className="form-floating mb-3">
          <label htmlFor="" className="font-semibold mx-[3.3rem] ">Email</label>
          <input type="email" onChange={handlechange} value={form.email} name='email' className="form-control rounded-lg p-2" placeholder="Email" required/>
        </div>

        <hr className="h-10 border-black" />

        <div className="flex space-x-10">

          <div className="form-floating mb-3">
            <label htmlFor="" className="font-semibold mx-4 ">City</label>
            <input type="text" onChange={handlechange} value={form.city} name='city' className="form-control rounded-lg p-2" placeholder="Address" required/>
          </div>

          <div className="form-floating mb-3">
            <label htmlFor="" className="font-semibold mx-4 ">State</label>
            <input type="text" onChange={handlechange} value={form.state} name='state' className="form-control rounded-lg p-2" placeholder="Address" required/>
          </div>

          <div className="form-floating mb-3">
            <label htmlFor="" className="font-semibold mx-4 ">Pincode</label>
            <input type="number" onChange={handlechange} value={form.pincode} name='pincode' className="form-control rounded-lg p-2" placeholder="Address" required/>
          </div>
        </div>

       

        <hr className="h-10 border-black" />

        <button className=" text-white bg-green-600 mx-8  py-2 px-6 focus:outline-none hover:bg-green-700 rounded-full text-lg">Submit</button>


      </form>
    </div>


    <div>
      <div
        className="w-[45rem] border-2 m-5 rounded-3xl shadow-gray-400-600 shadow-2xl p-10 h-44 bg-gradient-to-r from-green-500">
        <p className="font-semibold mx-4 text-2xl">Already Have An Account ?</p>
        <Link href={'/login'}><button className="px-5 py-2 rounded-2xl mt-2 w-80 bg-yellow-600 font-bold text-white brightness-150">LogIn</button></Link>
      </div>

      <div className="m-5 p-5 px-60 h-[35rem] shadow-xl border-10 rounded-full border-10 shadow-slate-400 flex justify-center justify-items-center bg-gradient-to-l from-green-500  ">
          <div id="slider" className="h-[40rem] w-96">
            <figure className=" w-fit h-[40rem]">
              <div className="const">
                <div className="text-3xl font-bold text-center">Step 1: <br/>Sumit Your Details</div>
                <div className="flex justify-center relative -top-60   ">
                  <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
                  <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_pounvezv.json"
                    background="transparent" speed="1" style={{width: '600px', height: '800px' }} loop autoplay>
                  </lottie-player>
                </div>
              </div>

              <div className="const">
                <p className="font-bold text-3xl text-center">Step 2: <br/>Now Your V-Mart Seller</p>
                <div className="flex justify-center  relative -top-28">
                  <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
                  <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_vzrmnv8v.json"
                    background="transparent" speed="1.5" style={{width: '600px', height: '600px'}} loop autoplay>
                  </lottie-player>
                </div>
              </div>

              <div>
                <p className="font-bold text-3xl text-center p-4">Step 3: <br/> Earn More Profit₹</p>
                <div className="flex justify-center  relative -top-32">
                  <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
                  <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_47pyyfcf.json"
                    background="transparent" speed="1" style={{width: '500px',height: '500px'}} loop autoplay>
                  </lottie-player>
                </div>
              </div>
            </figure>
          </div>
      </div>
    </div>

  </div>

  <div className="flex justify-center justify-items-center mt-10 space-x-4">
    <div className="border-3 bg-green-500 rounded-full h-10 w-10"></div>
    <div className="border-3 bg-green-600 rounded-full h-10 w-10"></div>
    <div className="border-3 bg-green-700 rounded-full h-10 w-10"></div>
    <div className="border-3 bg-green-800 rounded-full h-10 w-10"></div>
    <div className="border-3 bg-green-900 rounded-full h-10 w-10"></div>

  </div> <section className="text-gray-600 div-font mt-14 bg-gray-100 bg-gradient-to-r from-green-50 to-green-500  ">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1
        className="sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900 underline underline-offset-8 decoration-4 decoration-green-300">
        Why Sell On V Mart</h1>
    </div>
    <div className="flex flex-wrap -m-2 ">
      <div
        className="p-2 lg:w-1/3 md:w-1/2 w-full hover:shadow-2xl shadow-slate-600 hover:bg-gradient-to-r from-red-300 to-red-800 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-5 ">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" className="w-14 h-14 border-2 rounded-full p-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>


          <div className="flex-grow ">
            <h2 className=" title-font font-bold">Sell Across India</h2>
            <p className="">Reach over 50 crore+ customers across 27000+ pincodes</p>
          </div>
        </div>
      </div>
      <div
        className="p-2 lg:w-1/3 md:w-1/2 w-full hover:shadow-2xl shadow-slate-600 hover:bg-gradient-to-r from-red-300 to-red-800 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" className="w-12 h-10 border-3 rounded-full ">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>

          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold">Account Management</h2>
            <p className="text-gray-500">Our Dedicated managers will help your business on Flipkart</p>
          </div>
        </div>
      </div>
      <div
        className="p-2 lg:w-1/3 md:w-1/2 w-full hover:shadow-2xl shadow-slate-600 hover:bg-gradient-to-r from-red-300 to-red-800">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" className="w-24 h-14 rounded-full border-2 p-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
          </svg>

          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold">Simple Pricing Calculator</h2>
            <p className="text-gray-500">Use our simple pricing calculator to decide the best and competitive selling
              price for your product</p>
          </div>
        </div>
      </div>
      <div
        className="p-2 lg:w-1/3 md:w-1/2 w-full hover:shadow-2xl shadow-slate-600 hover:bg-gradient-to-r from-red-300 to-red-800">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-5">
          <div className="text-5xl">0%</div>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold">Lower Commissions</h2>
            <p className="text-gray-500">With Lower commission , you take maximum profits with you</p>
          </div>
        </div>
      </div>
      <div
        className="p-2 lg:w-1/3 md:w-1/2 w-full hover:shadow-2xl shadow-slate-600 hover:bg-gradient-to-r from-red-300 to-red-800">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="w-14 h-14 p-1 border-2 rounded-full">
            <path fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd" />
          </svg>

          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold">
              Transparency</h2>
            <p className="text-gray-500">Equal opportunity for all sellers to grow</p>
          </div>
        </div>
      </div>

      <div
        className="p-2 lg:w-1/3 md:w-1/2 w-full hover:shadow-2xl shadow-slate-600 hover:bg-gradient-to-r from-red-300 to-red-800 ">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" className="w-14 h-14 rounded-full border-2 p-1">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>

          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-bold">Business on the go</h2>
            <p className="text-gray-500">Easy to access and oprate , with just smartphone</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>


</div>
  )
}

export default Sellerform

