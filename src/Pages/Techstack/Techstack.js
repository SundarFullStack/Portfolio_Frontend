import React from "react";
import "./Techstack.css";
import { TechstackUtilsList } from "../../Utils/TechstackUtilsList";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techStack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2>
          <hr />
          <p className="pb-3 text-center">
            👉 including programming languages, frameworks,databases, front-end,
            back-tools, APIs
          </p>
        </RubberBand>
              <div className="row">
               <Fade left>
          {TechstackUtilsList.map((tech) => (
           
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <tech.icon className="tech-icon" />
                      <div className="media-body">
                        <h5 className="font-weight-bold">{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          ))}
                       </Fade>
        </div>
      </div>
    </>
  );
};

export default Techstack;
