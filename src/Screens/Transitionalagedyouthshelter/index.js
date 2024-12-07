import "./index.css";

import Layout from "../../components/layout";
import React, { useState, useEffect } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowOutward } from "react-icons/md";

import Sponsor from "../../components/sponsor";
import houseimg from "../../Assets/images/houseimg.png";
import youth from "../../Assets/images/youth.png";
import Oc from "../../Assets/images/Oc.png";
import Closet from "../../Assets/images/closet.png";

import AOS from "aos";

import VolunteerOrientationimg from "../../Assets/images/VolunteerOrientationimg.png";

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../Assets/images/communityimg.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

function Transitionalagedyouthshelter() {
  useEffect(() => {
    AOS.init();
  }, []);

  const programslist = [
    {
      title: "Transitional Aged Youth (TAY)",
    },
    {
      title: "Transitional Housing Program",
    },
    {
      title: " Home Share / Home Share PLUS",
    },
    {
      title: " Housing Connection Program",
    },
    {
      title: " Resource Centers",
    },
  ];
  return (
    <>
      <Layout>
        <section className="communityOutreachDay">
          <div className="container">
            <Link to={"/our-programs"} className="communityOutreachDayheader d-flex gap-2 align-items-center">
              <MdKeyboardDoubleArrowLeft />
              Program Dedail
            </Link>
            <div className="row">
              <div className="col-md-12 mt-5">
                <h2 className="communityOutreachDaytitle">
                  Transitional Aged Youth Shelter
                </h2>
              </div>

              <div className="col-md-12 mt-4">
                <img
                  src={communityimg}
                  alt="Community Event"
                  className="communityimg"
                />
              </div>

              <div className="col-md-6 mt-4">
                <p className="communityOutreachDaypara mb-4">
                  Combining Housing Education and Skills for Students. A
                  transitional 12-24 month program for 18-24-year-olds.
                  Residents attend college, trade school, or complete a high
                  school diploma/GED requirements. Many of our residents were in
                  the foster care system and do not have help navigating the
                  education system. Our case managers help them set personal
                  goals and connect them to appropriate resources.
                </p>

                <p className="communityOutreachDaypara mb-4">
                  Combining Housing Education and Skills for Students. A
                  transitional 12-24 month program for 18-24-year-olds.
                  Residents attend college, trade school, or complete a high
                  school diploma/GED requirements. Many of our residents were in
                  the foster care system and do not have help navigating the
                  education system. Our case managers help them set personal
                  goals and connect them to appropriate resources.
                </p>

                <p className="communityOutreachDaypara">
                  No longer children, but certainly not yet adults, the young
                  people we serve are often lost in the shuffle of support
                  programs. We consider their specific needs in our program
                  choices, home setup, rules and regulations of the program, and
                  all other aspects. All TAY residents receive the same services
                  as our families in shelter, however they have a specialized
                  case manager as well as additional job training support
                  through our partner, Orange County.
                </p>

                <p className="communityOutreachDaypara mb-4">
                  Combining Housing Education and Skills for Students. A
                  transitional 12-24 month program for 18-24-year-olds.
                  Residents attend college, trade school, or complete a high
                  school diploma/GED requirements. Many of our residents were in
                  the foster care system and do not have help navigating the
                  education system. Our case managers help them set personal
                  goals and connect them to appropriate resources.
                </p>
              </div>

              <div className="programs1 col-md-5 mt-4">
                {programslist?.map(( data, index) => (
                  <div
                    key={index}
                    className="item d-flex justify-content-between align-items-center my-3"
                  >
                    <h4 className="mb-0">{data?.title}</h4>
                    <button className="btn d-flex align-items-center">
                      <MdArrowOutward className="ms-2" size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Sponsor />
        </section>
      </Layout>
    </>
  );
}
 

export default Transitionalagedyouthshelter;
