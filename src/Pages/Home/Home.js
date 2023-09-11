import React from "react";
import "./Home.css";
import { useTheme } from "../../Context/ThemeContext";
import Typewriter from "typewriter-effect";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Pdf_file = "http://localhost:3000/Resume.pdf";
const Home = () => {
  const [theme, setTheme] = useTheme();

  //Resume Download
  const downloadFileAtUrl = (url) => {
    const file_name = url.split("/").pop();
    const angerTag = document.createElement("a");
    angerTag.href = url;
    angerTag.setAttribute("download", file_name);
    document.body.appendChild(angerTag);
    angerTag.click();
    angerTag.remove();
  };

  const handleTheme = () => {
    setTheme((previousState) => (previousState == "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>

        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ["FullStack Developer", "Mern Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=7604977254"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                // href={Resume}
                onClick={() => {
                  downloadFileAtUrl(Pdf_file);
                }}
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
