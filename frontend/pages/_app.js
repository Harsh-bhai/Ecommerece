import Navbar from "../components/navbar";
import "../styles/globals.css";
import { useState,useEffect } from "react";
import NextNProgress from "nextjs-progressbar";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
try {
  if(localStorage.getItem("cartstate")){
    setCart(JSON.parse(localStorage.getItem("cartstate")))
  }
} catch (error) {
  console.error(error)
  localStorage.clear()
  
}


},
   [])
  
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const savecart = (mycart) => {
    localStorage.setItem("cartstate", mycart);
  };
  const addtocart = (itemcode, qty, price, size) => {
    let mycart = cart;
    if (!(itemcode in cart)) {
      mycart[itemcode] = { qty: 1, price, size };
    } else {
      mycart[itemcode].qty = cart.qty + 1;
    }
    setCart(mycart);
    savecart(mycart);
  };
  const clearcart = (mycart) => {
    setCart({});
    savecart({})

  };
  
  const removefromcart = (itemcode, qty, price, size) => {
    let mycart = cart;
    
    if ((itemcode in cart)) {
      mycart[itemcode].qty = cart.qty - 1;
    }
    if(mycart[itemcode].qty<0){
      delete mycart[itemcode]
    }
    setCart(mycart);
    savecart(mycart);
  };
  return (
    <>
      <Navbar cart={cart} addtocart={addtocart} removefromcart={removefromcart} clearcart={clearcart} subtotal={subtotal}/>
      <NextNProgress
        color="#09692c"
        startPosition={0.5}
        stopDelayMs={300}
        height={3}
        showOnShallow={true}
      />
      <Component cart={cart} addtocart={addtocart} removefromcart={removefromcart} clearcart={clearcart} subtotal={subtotal} {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
