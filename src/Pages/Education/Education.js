import React from "react";
import "./Education.css";
import { MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#138781" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2018 - 2021"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Diploma In EEE</h3>
            <h5 className="vertical-timeline-element-subtitle">
              PACR Polytechnic Virudhunagar, TamilNadu
            </h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#138781" }}
            contentArrowStyle={{ borderRight: "7px solid  grey" }}
            date="2017 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">SSLC</h3>
            <h5 className="vertical-timeline-element-subtitle">
              TNPMMN Hr Seconday Virudhunagar, TamilNadu
            </h5>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
