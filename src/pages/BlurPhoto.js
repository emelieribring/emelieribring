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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      } else {
        entry.target.classList.remove('show')
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div>
      <h1 className='picture' style={{ filter: `blur(${blurValue}px)` }}>WEB DEVELOPER</h1>
      <div className='pictures' style={{ filter: `blur(${blurValueDog}px)` }}>
        <div id='pic1' className='hidden'></div>
        <div id='pic2' className='hidden'></div>
        <div id='pic3' className='hidden'></div>
      </div>
    </div>
  );
}

export default ImageBlur;
