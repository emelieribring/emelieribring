import React from 'react';
import './css/Contact.css'


function Contact() {
  // Funktion som öppnar LinkedIn i en ny flik när länken klickas på
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com', '_blank');
  };

  // Funktion som öppnar GitHub i en ny flik när länken klickas på
  const openGitHub = () => {
    window.open('https://www.github.com', '_blank');
  };

  // Funktion som öppnar e-postprogrammet när länken klickas på
  const sendEmail = () => {
    window.location.href = 'mailto:example@email.com';
  };

  // Funktion som öppnar Instagram i en ny flik när länken klickas på
  const openInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  return (
    <div className='mainDiv'>
      <div className='linkedIN' onClick={openLinkedIn}>
        
      </div>
      <div className='Github' onClick={openGitHub}>
        
      </div>
      <div className='Email' onClick={sendEmail}>
        
      </div>
      <div className='Instagram' onClick={openInstagram}>
        
      </div>
    </div>
  );
}

export default Contact;