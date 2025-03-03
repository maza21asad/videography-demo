import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="content1">
          <video
            autoPlay
            muted
            loop
            src="https://cdn.pixabay.com/video/2022/07/26/125570-733814536_tiny.mp4"
          ></video>
          <div className="cont1L">
            <h1>Videographer, Editor, Strategist.</h1>
            <p>
              I'm a professional videographer based in{" "}
              <strong>Dhaka, Bangladesh</strong>, specializing in high-quality
              video shoots using an <strong>iPhone</strong>. I bring creativity
              and precision to every project, from smooth cinematic shots to
              polished edits.
            </p>
          </div>
          <div className="cont1R">
            <img
              src="https://cdn.pixabay.com/photo/2020/12/05/20/50/man-5807158_1280.png"
              alt=""
            />
            <div id="imgBottom">NAME</div>
          </div>
        </div>

        {/* ================== */}
        <h2>🚗 Automotive Videography & More</h2>
        <p>
          With experience in <strong>car videography</strong>, I capture
          stunning visuals that make vehicles stand out. Whether it’s a promo
          shoot, social media content, or a personal project, I ensure each
          video tells a compelling story.
        </p>

        <h2>🌐 Explore My Work</h2>
        <p>
          View my latest projects on my{" "}
          <a href="#" className="link">
            official webpage
          </a>
          . I also upload regularly on{" "}
          <a href="#" className="link">
            Instagram
          </a>
          —follow me for updates!
        </p>

        <h3>📩 Get in Touch</h3>
        <div className="social-links">
          <a href="#">📱 Phone</a> |<a href="#">✉️ Email</a> |
          <a href="#">📷 Instagram</a> |<a href="#">📘 Facebook</a>
        </div>
        {/* ================================== */}

        <div className="media">
          <div className="video-container">
            <h2>🎬 Featured Video</h2>
            <video controls>
              <source src="video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="photo-gallery">
            <h2>📸 Photo Gallery</h2>
            <div className="gallery">
              <img src="photo1.jpg" alt="Car Shoot" />
              <img src="photo2.jpg" alt="Behind The Scenes" />
              <img src="photo3.jpg" alt="Editing Setup" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
