import Navbar from "../components/navbar";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/footer";
import Head from "next/head";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cookies from "js-cookie"
function MyApp({ Component, pageProps }) {
  <Head>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
    />
  </Head>;
  useEffect(() => {
    try {
      if (cookies.get("cartstate")) {
        setCart(JSON.parse(cookies.get("cartstate")));
      }
      if (cookies.get("subtotal")) {
        setSubtotal(cookies.get("subtotal"));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    // let token=cookies.get("jwtoken")
    // if( token){
    //   setUser({value:token})
    // }
  }, []);

  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [reloadkey, setReloadkey] = useState(1);
  let Router=useRouter()
  // const [user, setUser] = useState({value:null})
  const savecart = (mycart) => {
    cookies.set("cartstate", JSON.stringify(mycart));
    let subt = 0;
    if (mycart == []) {
      setSubtotal(subt);

      cookies.set("subtotal", subtotal);
    } else {
      for (let i = 0; i < cart.length; i++) {
        subt = subt + mycart[i][1];
      }
      setSubtotal(subt);

      cookies.set("subtotal", subtotal);
    }
  };
  const addtocart = (item, qty, price) => {
    let mycart = cart;
    for (let index = 0; index < qty; index++) {
      mycart.push([item, price]);
      toast.success('Item Added', {
        position: "bottom-right",
        autoClose: 1000 ,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    setCart(mycart);
    savecart(mycart);
    setReloadkey(Math.random());
  };
  const clearcart = () => {
    setCart([]);
    cookies.set("cartstate", cart);
    setSubtotal(0);
    // savecart([]);
  };

  const removefromcart = (item, qty) => {
    let mycart = cart;
    let index = mycart.indexOf(item);
    mycart.splice(index,1);
    setCart(mycart);
    savecart(mycart);
  };

  const logout = () => {
    cookies.remove("jwtoken");
    setReloadkey(Math.random());
    // Router.reload()
    toast.success('Logged Out', {
      position: "bottom-right",
      autoClose: 1000 ,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };


  const reloadNav= (  ) => {
    setReloadkey(Math.random())
  }
  return (
    <>
      <Navbar key={reloadkey}
        cart={cart}
        reloadNav={reloadNav}
        addtocart={addtocart}
        removefromcart={removefromcart}
        clearcart={clearcart}
        subtotal={subtotal}
        logout={logout}
      />
      <NextNProgress
        color="#09692c"
        startPosition={0.5}
        stopDelayMs={300}
        height={3}
        showOnShallow={true}
      />
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
      <Component
      reloadNav={reloadNav}
        cart={cart}
        addtocart={addtocart}
        removefromcart={removefromcart}
        clearcart={clearcart}
        subtotal={subtotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
