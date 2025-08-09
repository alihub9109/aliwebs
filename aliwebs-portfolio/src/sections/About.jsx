import React from 'react';
import '../styles/About.css';

function About(){

    return (
        <>
  {/* About Section */}
  <section id="about" className="about modular-section">
    <div className="section-header">
      <span className="section-number">01</span>
      <h2 className="section-title">
        About <span>Me</span>
      </h2>
    </div>
    <div className="about-grid">
      <div className="avatar-container" data-parallax="">
        <div className="avatar" data-tilt="" data-tilt-scale="1.05">
          <picture>
            <source srcSet="assets/img/portrait-ai.png" type="image/png" />
            <img
              src="assets/img/portrait-ai.png"
              alt="Ali's 3D AI Generated Portrait"
              loading="lazy"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </picture>
          <div className="hover-info">
            <div className="info-card">
              <h3>Fun Fact</h3>
              <p>
                I build AI-powered websites 50% faster than traditional methods!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Ali, a passionate web developer specializing in creating
            beautiful, functional websites powered by AI technologies for
            startups and businesses in Lebanon.
          </p>
          <p>
            With expertise in modern web technologies and AI integration, I
            bridge the gap between innovative design and technical
            implementation to deliver SEO-optimized websites that drive results.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>AI Web Development</h3>
              <p>
                Incorporating AI tools to streamline development and create
                smarter, responsive websites for local businesses.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>First Website Built</h3>
              <p>
                Created my first responsive portfolio using HTML, CSS and basic
                JavaScript, laying the foundation for my AI web development
                services.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2021</div>
            <div className="timeline-content">
              <h3>Coding Discovery</h3>
              <p>
                Fell in love with programming after taking an online web
                development course, sparking my journey into AI-powered website
                creation.
              </p>
            </div>
          </div>
        </div>
        <div className="about-actions">
          <a href="#cta">
            <button className="glow-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fa-signature"
                viewBox="0 0 576 512"
                width={18}
                height={18}
                fill="currentColor"
              >
                <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2L80 448c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 8.9 0c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6l0-43.6-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z" />
              </svg>{" "}
              Get a Free Quote
            </button>
          </a>
          <div className="social-links">
            <a href="https://github.com/alihub9109" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                aria-hidden="true"
                focusable="false"
                width={18}
                height={18}
                fill="currentColor"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            {/* <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a> */}
            <a href="https://codepen.io/ThatDevAli" aria-label="CodePen">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-hidden="true"
                focusable="false"
                width={18}
                height={18}
                fill="currentColor"
              >
                <path d="M502.3 159.7l-234-156c-8-4.9-16.5-5-24.6 0l-234 156C3.7 163.7 0 170.8 0 178v156c0 7.1 3.7 14.3 9.7 18.3l234 156c8 4.9 16.5 5 24.6 0l234-156c6-4 9.7-11.1 9.7-18.3V178c0-7.1-3.7-14.3-9.7-18.3zM278 63.1l172.3 114.9-76.9 51.4L278 165.7V63.1zm-44 0v102.6l-95.4 63.7-76.9-51.4L234 63.1zM44 219.1l55.1 36.9L44 292.8v-73.7zm190 229.7L61.7 334l76.9-51.4L234 346.3v102.6zm22-140.9l-77.7-52 77.7-52 77.7 52-77.7 52zm22 140.9V346.3l95.4-63.7 76.9 51.4L278 448.8zm190-156l-55.1-36.9L468 219.1v73.7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    );
}

export default About;
