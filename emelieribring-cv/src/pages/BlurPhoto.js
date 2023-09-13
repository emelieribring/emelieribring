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

  return (
    <div>
      <div className='picture' style={{ filter: `blur(${blurValue}px)` }}
      />
    </div>
  );
}

export default ImageBlur;
