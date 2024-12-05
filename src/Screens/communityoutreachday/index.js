import "./index.css";

import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";
import VolunteerOrientationimg from "../../Assets/images/VolunteerOrientationimg.png";
import Sponsor from "../../components/sponsor";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../Assets/images/communityimg.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function CommunityOutreachDay() {
  return (
    <>
      <Layout>
        <section className="communityOutreachDay ">
          <div className="container   ">
            <div className=" communityOutreachDayheader d-flex gap-2  align-items-center">
              <MdKeyboardDoubleArrowLeft />
              All Events
            </div>
            <div className="row">
              <div className="col-md-12 mt-5">
                <div className=" d-flex gap-4">
                  <div>
                    <h2 className="communityOutreachDaytitle ext-black">
                      Community Outreach Day
                    </h2>

                    <div className="communityOutreachDayschedual d-flex gap-2">
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <FiMapPin />
                        Central Park, Orange County
                      </p>
                      <div className="communityOutreachDayschedualdivider"></div>
                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <RiCalendar2Line />
                        June 15th, 2024
                      </p>
                      <div className="communityOutreachDayschedualdivider"></div>

                      <p className="d-flex gap-2 align-items-center">
                        {" "}
                        <CiClock2 />
                        10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-5">
                <img src={communityimg} className="img-fluid communityimg" />
              </div>

              <div className="col-md-6 mt-3">
                <p className="communityOutreachDaypara mt-3">
                  Cras dapibus ullamcorper dictum. Vivamus nec erat placerat
                  felis scelerisque porttitor in ac turpis. In nec imperdiet
                  turpis. Suspendisse quis orci ut orci pulvinar eleifend. Nulla
                  eu mattis ipsum. Integer eget sagittis nulla. Praesent
                  consectetur lacus et maximus eleifend. Integer non lacus dui.
                  Mauris tortor diam, laoreet quis commodo vitae, sodales vel
                  augue.| Sed rutrum, libero non pretium tristique, arcu mi
                  sollicitudin ex, quis venenatis orci tellus vel dolor. Donec
                  gravida, dolor ut auctor facilisis, enim dolor pellentesque
                  lectus, nec vehicula nibh risus ac leo.
                </p>
              </div>
              <div className="col-md-6 mt-5">
                <div className="VolunteerOrientationblg d-flex gap-4 align-items-center">
                  <div>
                    <img
                      src={VolunteerOrientationimg}
                      className=" VolunteerOrientationblgimg"
                    />
                  </div>
                  <div>
                    <p className="VolunteerOrientationblgtitledate">
                      November 2nd, 2024
                    </p>
                    <h4>Volunteer Orientation</h4>
                    <button className="btn VolunteerOrientationblgtitledatereade">
                      Read more{" "}
                      <span>
                        <MdOutlineKeyboardDoubleArrowRight />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="VolunteerOrientationblg1 d-flex gap-4 align-items-center">
                  <div>
                    <img
                      src={VolunteerOrientationimg}
                      className=" VolunteerOrientationblgimg"
                    />
                  </div>
                  <div>
                    <p className="VolunteerOrientationblgtitledate">
                      November 2nd, 2024
                    </p>
                    <h4>Volunteer Orientation</h4>
                    <button className="btn VolunteerOrientationblgtitledatereade">
                      Read more{" "}
                      <span>
                        <MdOutlineKeyboardDoubleArrowRight />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="VolunteerOrientationblg1 d-flex gap-4 align-items-center">
                  <div>
                    <img
                      src={VolunteerOrientationimg}
                      className=" VolunteerOrientationblgimg"
                    />
                  </div>
                  <div>
                    <p className="VolunteerOrientationblgtitledate">
                      November 2nd, 2024
                    </p>
                    <h4>Volunteer Orientation</h4>
                    <button className="btn VolunteerOrientationblgtitledatereade">
                      Read more{" "}
                      <span>
                        <MdOutlineKeyboardDoubleArrowRight />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="VolunteerOrientationblg1 d-flex gap-4 align-items-center">
                  <div>
                    <img
                      src={VolunteerOrientationimg}
                      className=" VolunteerOrientationblgimg"
                    />
                  </div>
                  <div>
                    <p className="VolunteerOrientationblgtitledate">
                      November 2nd, 2024
                    </p>
                    <h4>Volunteer Orientation</h4>
                    <button className="btn VolunteerOrientationblgtitledatereade">
                      Read more{" "}
                      <span>
                        <MdOutlineKeyboardDoubleArrowRight />
                      </span>
                    </button>
                  </div>
                </div>

                <div className="VolunteerOrientationblg2 d-flex gap-4 align-items-center">
                  <div>
                    <img
                      src={VolunteerOrientationimg}
                      className=" VolunteerOrientationblgimg"
                    />
                  </div>
                  <div>
                    <p className="VolunteerOrientationblgtitledate">
                      November 2nd, 2024
                    </p>
                    <h4>Volunteer Orientation</h4>
                    <button className="btn VolunteerOrientationblgtitledatereade">
                      Read more{" "}
                      <span>
                        <MdOutlineKeyboardDoubleArrowRight />
                      </span>
                    </button>
                  </div>
                </div>
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

export default CommunityOutreachDay;
