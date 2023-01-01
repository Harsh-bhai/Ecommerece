import { useState, useEffect } from 'react';

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['pottery.png', 'groceries.png', 'dailyneeds.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="relative h-64 overflow-hidden bg-gray-800">
      <img 
        src={images[currentImageIndex]} 
        className="absolute h-full w-full object-cover"
      />
    </div>
  );
}

export default ImageCarousel;
