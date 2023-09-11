import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Image from "../../Components/Images/meenakshisunder183017@gmail.com.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Image} alt="profile_pic  " />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <p>
                "As a recent graduate with a strong passion for web development
                and a focus on the MERN (MongoDB, Express.js, React, Node.js)
                stack, I am eager to kickstart my career in the world of
                technology. My academic background has equipped me with a solid
                foundation in software engineering principles, and I have honed
                my skills through hands-on projects and internships. I thrive in
                dynamic and collaborative environments, and I am enthusiastic
                about staying current with the latest industry trends and best
                practices. My goal is to contribute my technical expertise,
                problem-solving abilities, and dedication to crafting
                exceptional web experiences for users.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
