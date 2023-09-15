import React, { Component } from 'react';
import './VideoBackground.css';

import myVideo from './photos/strandvideo.mp4';

class VideoBackground extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const video = document.querySelector('.video-background video');
    const scrollValue = window.scrollY;
    video.style.transform = `translateY(-${scrollValue * 0.5}px)`; // Justera rörelsehastigheten här
  };

  render() {
    return (
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default VideoBackground;
