import React from 'react';
import './css/Home.css';
import ImageBlur from './BlurPhoto.js';
import VideoBackground from './VideoBackground';


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
    <VideoBackground></VideoBackground>
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
          <p className='hidden' id='moreAboutText'>Jag är uppvuxen ute i Stockholms skärgård, på vackra Värmdö, 
          men sedan två år tillbaka bor jag i Solna med min sambo Fredrik & hund Vega. Mitt intresse för 
          programmering började i tidig ålder när jag under min korta bloggkarriär envist försökte ändra om i stilmallen, men 
          det är inte förens nu när jag börjat plugga som jag förstått viden av kod. Det är en större och mer spännade värld än 
          vad jag först kunde ana.</p>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Home;