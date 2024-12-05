import "./index.css";
import countyicon from "../../Assets/images/countyicon.svg";
import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import HeroSection from "../../components/herosection";
import Sponsor from "../../components/sponsor";
import ourworkbg from "../../Assets/images/ourworkbg.png";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../Assets/images/communityimg.png";
import { useNavigate } from "react-router-dom";
function Event() {

const navigate = useNavigate()
const learnnavigate = () =>{
  
  navigate("/communityOutreachDay")
  window.scrollTo({ top: 0, behavior: "smooth" });
}
  return (
    <>
      <Layout>
        <HeroSection
          heroimg={ourworkbg}
          pagename="Our Events"
          title2="Events"
          programpojectaboutherounderline="houseprogramunderlineourwork"
          programprojectsubttle="givedonationsubtitle"
        />

        <section className="community  ">
          <div className="container  py-5">
            <div className="row">
              <div className="mt-5 mb-4 d-flex gap-4">
                <button className="todaybtn">Today</button>
                <button className="todaybtn">Upcoming Events</button>
              </div>

              <div className="col-md-7 mt-5">
                <div className=" d-flex gap-4">
                  <p className="monday-text">
                    Mon <br /> <span className="monday2">2</span>
                  </p>
                  <div>
                    <h2 className="communitytitle ext-black">
                      Community Outreach Day
                    </h2>

                    <div className="communityschedual d-flex gap-2">
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <FiMapPin />
                        Central Park, Orange County
                      </p>
                      <div className="communityschedualdivider"></div>
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <RiCalendar2Line />
                        June 15th, 2024
                      </p>
                      <div className="communityschedualdivider"></div>

                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <CiClock2 />
                        10:00 AM - 2:00 PM
                      </p>
                    </div>

                    <p className="communitypara">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <button onClick={learnnavigate} className="todaybtn">Learn more</button>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-5">
                <img src={communityimg} className="img-fluid" />
              </div>
            </div>
            <div className="row">
            

              <div className="col-md-7 mt-5">
                <div className=" d-flex gap-4">
                  <p className="monday-text">
                    Mon <br /> <span className="monday2">2</span>
                  </p>
                  <div>
                    <h2 className="communitytitle ext-black">
                      Community Outreach Day
                    </h2>

                    <div className="communityschedual d-flex gap-2">
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <FiMapPin />
                        Central Park, Orange County
                      </p>
                      <div className="communityschedualdivider"></div>
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <RiCalendar2Line />
                        June 15th, 2024
                      </p>
                      <div className="communityschedualdivider"></div>

                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <CiClock2 />
                        10:00 AM - 2:00 PM
                      </p>
                    </div>

                    <p className="communitypara">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <button onClick={learnnavigate} className="todaybtn">Learn more</button>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-5">
                <img src={communityimg} className="img-fluid" />
              </div>
              <div className="col-md-7 mt-5">
                <div className=" d-flex gap-4">
                  <p className="monday-text">
                    Mon <br /> <span className="monday2">2</span>
                  </p>
                  <div>
                    <h2 className="communitytitle ext-black">
                      Community Outreach Day
                    </h2>

                    <div className="communityschedual d-flex gap-2">
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <FiMapPin />
                        Central Park, Orange County
                      </p>
                      <div className="communityschedualdivider"></div>
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <RiCalendar2Line />
                        June 15th, 2024
                      </p>
                      <div className="communityschedualdivider"></div>

                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <CiClock2 />
                        10:00 AM - 2:00 PM
                      </p>
                    </div>

                    <p className="communitypara">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <button onClick={learnnavigate} className="todaybtn">Learn more</button>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-5">
                <img src={communityimg} className="img-fluid" />
              </div>
              <div className="col-md-7 mt-5">
                <div className=" d-flex gap-4">
                  <p className="monday-text">
                    Mon <br /> <span className="monday2">2</span>
                  </p>
                  <div>
                    <h2 className="communitytitle ext-black">
                      Community Outreach Day
                    </h2>

                    <div className="communityschedual d-flex gap-2">
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <FiMapPin />
                        Central Park, Orange County
                      </p>
                      <div className="communityschedualdivider"></div>
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <RiCalendar2Line />
                        June 15th, 2024
                      </p>
                      <div className="communityschedualdivider"></div>

                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <CiClock2 />
                        10:00 AM - 2:00 PM
                      </p>
                    </div>

                    <p className="communitypara">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                    <button onClick={learnnavigate} className="todaybtn">Learn more</button>
                  </div>
                </div>
              </div>

              <div className="col-md-5 mt-5">
                <img src={communityimg} className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* <Leadership /> */}
        <Sponsor />
      </Layout>
    </>
  );
}

export default Event;
