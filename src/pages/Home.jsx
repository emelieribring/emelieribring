import React from 'react';
import './css/Home.css';
import ImageBlur from './BlurPhoto.js';


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


function Home() {
  return (
  <div>
    <div className='mainDiv'>
      <ImageBlur></ImageBlur>
      <div className='line'>
        <p className='aboutMeFont'>ABOUT ME</p>
        <p className='emelie'>Emelie</p>
        <p className='ribring'>Ribring</p>
      </div>
    </div>
    <div className='secondDiv'>
      <div className='secondLine'>
        <div className='borderAboutMe'>
        <p className='hidden' id='textAboutMe'>HEJ! <br />
        Jag heter Emelie. Jag är en 25 år ung studerande webbutvecklare. 
        Just nu går jag andra året på medieinstitutet och kommer våren 2024 bli webbutvecklare, javascriptutvecklare & blockchainutvecklare.
        Denhär sidan är till för dig som vill veta lite mer om mig och vad jag kan erbjuda. Här kan du hitta alla mina arbeten, 
        mina kompetenser och bara kul fakta om mig! Vi kan börja HÄR!</p>
        </div>
        <div className='borderMoreAbout'>
          <p className='hidden' id='moreAboutText'>Jag heter Emelie. Jag är en 25 år ung studerande webbutvecklare. 
        Just nu går jag andra året på medieinstitutet och kommer våren 2024 bli webbutvecklare, javascriptutvecklare & blockchainutvecklare.
        Denhär sidan är till för dig som vill veta lite mer om mig och vad jag kan erbjuda. Här kan du hitta alla mina arbeten, 
        mina kompetenser och bara kul fakta om mig! Vi kan börja HÄR!</p>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Home;