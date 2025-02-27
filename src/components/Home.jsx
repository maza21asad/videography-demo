import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div id="hero1">
      <div className="hero1-content">
        <video
          autoPlay
          muted
          loop
          src="https://videos.pexels.com/video-files/20153917/20153917-sd_640_360_24fps.mp4"
        ></video>
        <h1>I am a videographer</h1>
        <h3>
          I shoot professional video content and shoots for my clients using
          Iphone.
        </h3>
        <h4>Contact with me: +88019*****109</h4>
        <div className="contact">
          <div className="contact-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15713/15713434.png"
              alt="WhatsApp"
            />
          </div>
          <div className="contact-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
              alt="Instagram"
            />
          </div>
          <div className="contact-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
              alt="Facebook"
            />
          </div>
          <div className="contact-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"
              alt="YouTube"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
