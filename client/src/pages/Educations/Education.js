import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date=""
            iconStyle={{ background: "#138731", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h5 className="vertical-timeline-element-title">
              Diploma (Computer Engg.)
            </h5>
            <h6 className="vertical-timeline-element-subtitle">Maharashtra Bord</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  gray" }}
            date=""
            iconStyle={{ background: "#138731", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h5 className="vertical-timeline-element-title">
              BE (Computer Tech)
            </h5>
            <h6 className="vertical-timeline-element-subtitle">RTMNU</h6>
          </VerticalTimelineElement>
        </VerticalTimeline>
        
      </div>
    </>
  );
};

export default Education;
