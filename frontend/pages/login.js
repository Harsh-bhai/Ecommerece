import React from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  let Router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("jwtoken")) {
      Router.push("/");
    }
  }, []);

  const [identifier, setidentifier] = useState("");
  const [password, setpassword] = useState("");
  const [login, setlogin] = useState(false);

  const handlechange = (e) => {
    if (e.target.name == "email") {
      setidentifier(e.target.value);
    }
    if (e.target.name == "password") {
      setpassword(e.target.value);
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const data = { identifier, password };

   
   
        let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/local`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtoken")}`,
          },
          body: JSON.stringify(data),
        })
        let response=await res.json()
        if(response.error){
          alert(response.error.message)
        }
        else{
          Router.push('/')
        }
        console.log(response)
        
        

      
      // toast.success("Logged In Successfully", {
      //   position: "top-left",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      
      setpassword("");
      setidentifier("");
    console.log("hehe");
    console.log("hogyabhai");
  };
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="min-h-fgreen-700ull flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto"
              src="/vmartgreen.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-2xl font-bold text-gray-900 my-4">
              Login to your Account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link href={"/signup"}>
                <a
                  href="#"
                  className="font-medium text-green-700 hover:text-green-700"
                >
                  {" "}
                  Create New Account{" "}
                </a>
              </Link>
            </p>
          </div>
          <form onSubmit={handlesubmit} className=" space-y-4" method="POST">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                value={identifier}
                onChange={handlechange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={password}
                onChange={handlechange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-700 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-700 focus:border-green-700 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>

            {/* <div className="text-sm">
                <Link href={"/forgot"}><a className="font-medium text-green-600 hover:text-green-700 ml-72"> Forgot your password? </a></Link>
              </div> */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
