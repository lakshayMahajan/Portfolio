import React from 'react';
import './About.css'; 
import PageHeader from './Components/PageHeader';

function About() {
  const getFontSize = () => {
    if (window.innerWidth < 480) return "1rem";
    if (window.innerWidth < 768) return "1.2rem";
    if (window.innerWidth < 1024) return "1.5rem";
    return "1.8rem";
  };

  return (
    <div className="about-container">
      <PageHeader title="Introduction" subtitle="Overview." />
      <div className="about-content">
        <div className="about-image-container">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE6wS1beCOcXQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696275382751?e=1746662400&v=beta&t=LuisUM-W_rSusv_1LYKz0UgVrxFfYByJBvxJcuGgbYE"
            className="about-image"
          />
          <div className="button-container">
            <button
              className="button github-button"
              onClick={() => window.location.href = "https://github.com/lakshayMahajan"}
            >
              Github
            </button>
            <button
              className="button linkedin-button"
              onClick={() => window.location.href = "https://www.linkedin.com/in/lakshaymahajan006/"}
            >
              LinkedIn
            </button>
          </div>
          <button
            className="button resume-button"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Resume
          </button>
        </div>

        <div
          className="text-container"
          style={{ fontSize: getFontSize() }}
        >
          <a>👨‍💻 I'm a Software Engineer with 2 years of experience in full-stack development, specializing in building scalable web applications and debugging tools.</a>
          <a>🎓 Freshman currently pursuing Computer Science, Mathematics, and Finance at Purdue University.</a>
          <a>🛠 I specialize in full-stack development and AI-powered analytics, building debugging portals, intelligent scheduling tools, and scalable solutions that drive real-world impact.</a>
          <a>🔧 Passionate about automation and optimization, I tackle complex problems with innovative, efficient solutions.</a>
          <a>💡 Always exploring, I love staying ahead of the curve.</a>
        </div>
      </div>
    </div>
  );
}

export default About;
