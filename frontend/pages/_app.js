import Navbar from "../components/navbar";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/footer";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  <Head>
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
    />
  </Head>;
  useEffect(() => {
    try {
      if (localStorage.getItem("cartstate")) {
        setCart(JSON.parse(localStorage.getItem("cartstate")));
      }
      if (localStorage.getItem("subtotal")) {
        setSubtotal(localStorage.getItem("subtotal"));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [reloadkey, setReloadkey] = useState(1);
  const savecart = (mycart) => {
    localStorage.setItem("cartstate", JSON.stringify(mycart));
    let subt = 0;
    if (mycart == []) {
      setSubtotal(subt);

      localStorage.setItem("subtotal", subtotal);
    } else {
      console.log(true);
      for (let i = 0; i < cart.length; i++) {
        subt = subt + mycart[i][1];
      }
      setSubtotal(subt);

      localStorage.setItem("subtotal", subtotal);
    }
    console.log("mycart", mycart);
  };
  const addtocart = (item, qty, price) => {
    let mycart = cart;
    for (let index = 0; index < qty; index++) {
      mycart.push([item, price]);
    }
    setCart(mycart);
    savecart(mycart);
    setReloadkey(Math.random());
  };
  const clearcart = () => {
    setCart([]);
    localStorage.setItem("cartstate", cart);
    setSubtotal(0);
    // savecart([]);
  };

  const removefromcart = (item, qty) => {
    let mycart = cart;
    let index = mycart.indexOf(item);
    mycart.splice(index);
    setCart(mycart);
    savecart(mycart);
  };

  const logout = () => {
    localStorage.removeItem("jwtoken");
    setReloadkey(Math.random());
  };
  return (
    <>
      <Navbar
        cart={cart}
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
      <Component
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
