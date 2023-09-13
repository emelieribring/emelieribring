import React from 'react';
import './css/Home.css';
import ImageBlur from './BlurPhoto.js';


function Home() {
  return (
  <div>
    <div className='mainDiv'>
      <div className='startAboutMe'>
        <p className='aboutMeText'>ABOUT ME</p>
        <p className='emelie'>Emelie</p>
        <p className='ribring'>Ribring</p>
        <div className='line'></div>
      </div>
      <div className='pictureMe'>
      <ImageBlur></ImageBlur>
      </div>
    </div>
    <div className='secondDiv'>
      <div className='secondLine'>
        <div className='borderAboutMe'>
        <p className='textAboutMe'>Hej! <br />
        Jag heter Emelie Ribring, är 25 år gammal och studerar just nu till webbutvecklare på medieinstitutet. <br />
        Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium.</p>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Home;