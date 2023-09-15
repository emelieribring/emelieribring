import React from 'react';
import './css/Projects.css';


function Experience() {

  const openTheRestaurantLink = () => {
    window.open('https://github.com/Medieinstitutet/the-restaurant-grupp4', '_blank');
  };
  
  const openNftRescueLink = () => {
    window.open('https://github.com/emelieribring/nft-rescue-dogs', '_blank');
  };

  const openToTheMoonLink = () => {
    window.open('https://github.com/emelieribring/to-the-moon', '_blank');
  };

  return (
    <div className='projectsCards'>
      <div class="flip-card">
      <div class="flip-card-inner">
          <div class="flip-card-front">
              <p class="title">THE RESTAURANT</p>
              <p>Hover Me</p>
          </div>
          <div id='restaurant' class="flip-card-back" onClick={openTheRestaurantLink}></div>
      </div>
      </div>
      <div class="flip-card">
      <div class="flip-card-inner">
          <div class="flip-card-front">
              <p class="title">NFT RESCUE</p>
              <p>Hover Me</p>
          </div>
          <div id='nftrescue' class="flip-card-back" onClick={openNftRescueLink}></div>
      </div>
      </div>
      <div class="flip-card">
      <div class="flip-card-inner">
          <div class="flip-card-front">
              <p class="title">TO THE MOON</p>
              <p>Hover Me</p>
          </div>
          <div id='toTheMoon' class="flip-card-back" onClick={openToTheMoonLink}></div>
      </div>
      </div>
    </div>
    );
  }

export default Experience;  