import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { BiLogoReact } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="workexp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experince
          </h2>
          <hr />
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#666666" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="(15 Nov 2019 - 30 Nov 2020)"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaLaravel />}
            >
              <h4 className="vertical-timeline-element-title">
                Full Stack Developer
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Sapalogy Pvt. Ltd.
              </h5>
              <h6>
                {" "}
                Role And Responsibility : Team Member (Full Stack Developer)
              </h6>
              <p>
                1.Worked on creating blueprints, in creating design, creating
                the application pages. Create components, Form, Routes.
              </p>
              <p>
                {" "}
                2.Worked on responsiveness of the application and explored the
                fixed width and fluid layouts using bootstrap.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#666666" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="(1 Dec 2020 - 20 Sep 2021)"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<FaLaravel />}
            >
              <h4 className="vertical-timeline-element-title">
                Full Stack Developer
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Arihant Web Consultancy
              </h5>
              <h6>
                {" "}
                Role And Responsibility : Team Member (Full Stack Developer)
              </h6>
              <p>
                1.Worked on responsiveness of the application and explored the
                fixed width and fluid layouts using bootstrap.
              </p>
              <p>
                {" "}
                2.created and modified new and existing pages, new styled on
                pages with the help of JavaScript.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#666666" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="(15 Mar 2021 - 22 Sep 2021)"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<BiLogoReact />}
            >
              <h4 className="vertical-timeline-element-title">
                Full Stack Developer
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                CyberX Security Technologies.
              </h5>
              <h6>
                {" "}
                Role And Responsibility : Team Member (Full Stack Developer)
              </h6>
              <p>
                1.Determined the structure and design of web pages based on user
                requirement
              </p>
              <p> 2.Worked on Form Validation</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#666666" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="(15 Nov 2019 - 30 Nov 2020)"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<BiLogoReact />}
            >
              <h4 className="vertical-timeline-element-title">
                Front-End Developer (React JS)
              </h4>
              <h5 className="vertical-timeline-element-subtitle">
                Argus System
              </h5>
              <h6>
                {" "}
                Role And Responsibility : Team Member (Full Stack Developer)
              </h6>
              <p>
                1.Worked on Front end using React JS .Created reusable
                components and Routing to implement navigation between the
                components.
              </p>
              <p> 2.Worked on React JS components , Forms, Events, Router.</p>
              <p>
                {" "}
                3.Worked on responsiveness of the application and explored the
                fixed width and fluid layouts using bootstrap.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
