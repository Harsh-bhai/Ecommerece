import React from 'react'
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router'
import cookies from 'js-cookie';


const Signup = ({reloadNav}) => {
  let Router=useRouter()
      useEffect(() => {
        if(cookies.get("jwtoken")){
          Router.push("/")
        }
      
      }, [])
 
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const handlechange= ( e ) => {
    if(e.target.name=="name"){
      setusername(e.target.value)
    }
    if(e.target.name=="email"){
      setemail(e.target.value)
    }
    if(e.target.name=="password"){
      setpassword(e.target.value)
    }
    
  }
  
  const handlesubmit = async (e) => {
    e.preventDefault()
    const data = { username, email, password }
   

   let res= await  fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/local/register`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        "Accept":"application/json"
      },
      body: JSON.stringify(data),
    })
  let response =await res.json()
  cookies.set('jwtoken',response.jwt)
    setemail("")
    setpassword("")
    setusername("")
    toast.success('Account Created Sucessfully', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      Router.push("/login")
      reloadNav()
    // setTimeout(() => {
    //   Router.reload()
    // }, 1000);
    
      

  }
  return (
    <div>
      <ToastContainer
position="bottom-right"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

      <div className="min-h-screen green-700ull flex  justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-24 w-auto" src="/vmartgreen.png" alt="Workflow" />
            <h2 className="mt-6 text-center text-2xl font-bold text-gray-900 my-4">Create a New Account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">Or
              <Link href={"/login"}><a href="#" className="font-medium text-green-700 hover:text-green-700"> Log In </a></Link></p>
          </div>
          <form onSubmit={handlesubmit} className=" space-y-4" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm  flex flex-col space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input value={username} onChange={handlechange} id="name" name="name" type="text" autoComplete="Name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm" placeholder="Your Name" />
              </div>
            </div>
            <div>
              <label htmlFor="email"  className="sr-only">Email address</label>
              <input value={email} onChange={handlechange} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input value={password} onChange={handlechange} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>

            {/* <div className="text-sm">
                <Link href={"/forgot"}><a className="font-medium text-green-600 hover:text-green-700 ml-72"> Forgot your password? </a></Link>
              </div> */}
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700">

                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup