import React,{useState} from "react";
import Link from "next/link";

const Signup = () => {

  const handlesubmit= async(  ) => {
    const data = { email,password,phone };

  res=await fetch(`${process.env.baselink}/api/auth/local/register`, {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),

})
let response=await res.json()
console.log(response)
setemail('')
setpassword('')
setphone('')
  }

  const handlechange= ( e ) => {
    console.log(e)
    if (e.target.name="password"){
      setpassword(e.target.value)
    }
    else if (e.target.name="email"){
      setemail(e.target.value)
    }
    else if (e.target.name="phone"){
      setphone(e.target.value)
    }
  
  }

  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [phone, setphone] = useState()
  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="flex justify-center items-center py-8 ">
              <img src="/vmartgreen.png" className=" h-28 " alt="" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create a new account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/login"}><a
                href="#"
                className="font-medium text-green-600 hover:text-green-500"
              >
                {" "}
                Log In
              </a></Link>
            </p>
          </div>
          <form className="mt-8 space-y-6"  method="POST">
            <input type="hidden" name="email" onChange={handlechange} onSubmit={handlesubmit} value={email} />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input onChange={handlechange} onSubmit={handlesubmit} value={email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full  appearance-none rounded-md rounded-t-md border border-gray-300 p-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input onChange={handlechange} onSubmit={handlesubmit} value={password}
                
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full  appearance-none rounded-md rounded-b-md border border-gray-300 p-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input onChange={handlechange} onSubmit={handlesubmit} value={phone}
                
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="current-phone"
                  required
                  className="relative block w-full  appearance-none rounded-md rounded-b-md border border-gray-300 p-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              

              <div className="text-sm">
              <Link href={'/forgot'}><a
                  href="#"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Forgot your password?
                </a></Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-green-500 group-hover:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
