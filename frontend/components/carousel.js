import React,{ useState, useEffect } from 'react';


const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ['/groceries.png','/dailyneeds.png', '/pottery.png' ];
    useEffect(() => {
        const interval = setInterval(() => {


          setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
      }, [currentImageIndex]);


    
  
  return (
    <div className="maindiv flex cursor-pointer overflow-hidden">
    <div><div  className="slide1 md:h-96 animate-fadeout h-full w-full ">
      <img src={images[currentImageIndex]} className=" " alt="no img" />
    </div></div></div>
  )
}

export default Carousel


          