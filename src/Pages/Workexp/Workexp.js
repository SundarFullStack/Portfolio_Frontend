import React from "react";
import "./Workexp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiTestinglibrary } from "react-icons/si";
const Workexp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
          <VerticalTimeline lineColor="#1e1e2c">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2021 - 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiTestinglibrary />}
            >
              <h3 className="vertical-timeline-element-title">
                Testing Engineer
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Saint Gobain PVT LTD,Chennai
              </h5>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Workexp;
