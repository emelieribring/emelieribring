import React, { useEffect, useState } from 'react';
import './css/Home.css';


function ImageBlur() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const blurValue = Math.min(10, scrollPosition / 100); 
  const blurValueDog = Math.min(10, scrollPosition / 800); 


  return (
    <div>
      <h1 className='picture' style={{ filter: `blur(${blurValue}px)` }}>WEB DEVELOPER</h1>
      <div className='dogPicture' style={{ filter: `blur(${blurValueDog}px)` }}></div>
    </div>
  );
}

export default ImageBlur;
