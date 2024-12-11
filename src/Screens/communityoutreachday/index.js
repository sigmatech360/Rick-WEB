import "./index.css";
import Layout from "../../components/layout";
import React from "react";
import VolunteerOrientationimg from "../../Assets/images/VolunteerOrientationimg.png";
import Sponsor from "../../components/sponsor";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import communityimg from "../../Assets/images/communityimg.png";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

function CommunityOutreachDay() {
  const agendaItems = [
    { time: "5:00 PM - 6:00 PM", event: "Arrival and Registration" },
    { time: "6:00 PM - 6:30 PM", event: "Opening Remarks" },
    { time: "6:30 PM - 7:00 PM", event: "Keynote Speeches" },
    { time: "7:00 PM - 8:00 PM", event: "Live Entertainment" },
    {
      time: "8:00 PM - 9:00 PM",
      event: "Special Presentations & Closing Remarks",
    },
  ];
  return (
    <Layout>
      <section className="communityOutreachDay">
        <div className="container">
          <div className="communityOutreachDayheader d-flex gap-2 align-items-center">
            <MdKeyboardDoubleArrowLeft />
            All Events
          </div>
          <div className="row">
            <div className="col-md-12 mt-5">
              <h2 className="communityOutreachDaytitle">
                Community Outreach Day
              </h2>
              <div className="communityOutreachDayschedual">
                <p className="d-flex align-items-center">
                  <FiMapPin /> Central Park, Orange County
                </p>
                <div className="communityOutreachDayschedualdivider"></div>
                <p className="d-flex align-items-center">
                  <RiCalendar2Line /> June 15th, 2024
                </p>
                <div className="communityOutreachDayschedualdivider"></div>
                <p className="d-flex align-items-center">
                  <CiClock2 /> 10:00 AM - 2:00 PM
                </p>
              </div>
            </div>

            <div className="col-md-12 mt-4">
              <img
                src={communityimg}
                alt="Community Event"
                className="communityimg"
              />
            </div>

            <div className="col-md-6 mt-4">
              <p className="communityOutreachDaypara">
                Cras dapibus ullamcorper dictum. Vivamus nec erat placerat felis
                scelerisque porttitor in ac turpis. In nec imperdiet turpis.
                Suspendisse quis orci ut orci pulvinar eleifend. Nulla eu mattis
                ipsum. Integer eget sagittis nulla. Praesent consectetur lacus
                et maximus eleifend. Integer non lacus dui. Mauris tortor diam,
                laoreet quis commodo vitae, sodales vel augue.| Sed rutrum,
                libero non pretium tristique, arcu mi sollicitudin ex, quis
                venenatis orci tellus vel dolor. Donec gravida, dolor ut auctor
                facilisis, enim dolor pellentesque lectus, nec vehicula nibh
                risus ac leo.
              </p>

              <h3 className="mb-4">Agenda</h3>

              <div className="timeline">
                {agendaItems.map((item, index) => (
                  <div key={index} className="timeline-item d-flex ">
                    <div  className="timeline-dotparent">
                      {" "}
                      <div className="timeline-dot"></div>{" "}
                    </div>
                    <div className="timeline-content">
                      <p className="time mb-0">{item.time}</p>
                      <p className="event">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="VolunteerOrientationblg mb-3 col-md-5 mt-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className={` ${
                    index === 3 ? "2" : "1"
                  } item d-flex  align-items-center gap-3`}
                >
                  <img
                    src={VolunteerOrientationimg}
                    alt="Volunteer Orientation"
                    className="VolunteerOrientationblgimg"
                  />
                  <div>
                    
                    <p className="VolunteerOrientationblgtitledate">
                      November 2nd, 2024
                    </p>
                    <h4>Volunteer Orientation</h4>
                    <button className="btn VolunteerOrientationblgtitledatereade">
                      Read more <MdOutlineKeyboardDoubleArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Sponsor />
      </section>
    </Layout>
  );
}

export default CommunityOutreachDay;
