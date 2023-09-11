import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/About/About";
import Techstack from "./Pages/Techstack/Techstack";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Education/Education";
import Workexperience from "./Pages/Workexp/Workexp";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import { useTheme } from "./Context/ThemeContext";
import MobileNav from "./Components/MobileNav/MobileNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container" style={{ overflow: "hidden" }}>
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Workexperience />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              Made With 🙂 SundarStack &copy; 2023
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
        color="#f29f67"
      />
    </>
  );
}

export default App;
