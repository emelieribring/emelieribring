import React, { Component } from 'react';
import './VideoBackground.css';
import myVideo from './photos/strandvideo.mp4';

class VideoBackground extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const video = this.videoRef.current;
    const scrollValue = window.scrollY;
    video.style.transform = `translateY(-${scrollValue * 0.5}px)`; // Anpassa rörelsehastigheten här
  };

  render() {
    return (
      <div className="video-background">
        <video ref={this.videoRef} autoPlay loop muted>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

function Skills() {
  return (
    <div>
      <VideoBackground />
      {/* Här kan du placera ditt innehåll ovanpå videon */}
      <div className="content">
        <h1>Välkommen till mina färdigheter</h1>
        <p>Här är en video med rörelse i bakgrunden.</p>
      </div>
    </div>
  );
}

export default Skills;
