import React, { useState } from "react";
import "./Contact.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  //handle submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide All Fields");
      }
      const res = await axios.post(
        "http://localhost:8000/api/v1/portfolio/sendEmail",
        { name, email, msg }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xk-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocrCHQ3IPvFcZCuKSDXOYceFldC5FFG8qIQ&usqp=CAU"
                      alt="contact"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <Rotate>
              <div className="col-md-6 col-lg-6">
                <div className="row">
                  <div className="card2 d-flex card border-0 px-4 py-3">
                    <h6>
                      {" "}
                      Contact With
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>
                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">or</small>
                    <div className="line" />

                    <div className="row px-3">
                      <input
                        type="text"
                        className="mb-3"
                        placeholder="Enter Your Name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="row px-3">
                      <input
                        type="email"
                        className="mb-3"
                        placeholder="Enter Your Email"
                        name="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        className="mb-3"
                        placeholder="Enter Your Message"
                        name="msg"
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button onClick={handleSubmit} className="">
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
