import React from 'react';
import PageHeader from './Components/PageHeader';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css"; 
import PurdueIcon from "./Images/Purdue.png";
import HSEIcon from "./Images/hse.png";

function Education() {
  return (
    <div className="education-container">
      <PageHeader title="What I have studied so far" subtitle="Education"/>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1d1836', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={<h1>2024-Present</h1>}
          iconStyle={{ background: 'ghostwhite', color: '#fff',  alignItems: 'center', justifyContent: 'center', display: "flex" }}
          icon={
            <img
              src={PurdueIcon}
              style={{
                height: "97%",
                width: "97%",
                objectFit: "contain",
              }}
            />
          }
        >
          <h3 style={{ fontSize: "3rem" }}>CS + Math + Finance</h3>
          <h4 style={{ fontSize: "1.5rem", color: "rgb(170, 166, 195)", marginBottom: "1.4rem" }}>
            Purdue University, West Lafayette, Indiana
          </h4>
          <a style={{ fontSize: "1.4rem" }}>
            Relevant Courses: Computer Organization, Introduction to Computer Science (CS 180), Discrete Mathematics, Python
            Programming, Object-Oriented Programming, Technology and Global Development
          </a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1d1836', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={<h1>2020-2024</h1>}
          iconStyle={{ background: 'ghostwhite', color: '#fff',  alignItems: 'center', justifyContent: 'center', display: "flex" }}
          icon={
            <img
              src={HSEIcon}
              style={{
                height: "97%",
                width: "97%",
                objectFit: "contain",
              }}
            />
          }
        >
          <h3 style={{ fontSize: "3rem" }}>Highschool</h3>
          <h4 style={{ fontSize: "1.5rem", color: "rgb(170, 166, 195)", marginBottom: "1.4rem" }}>
            Hamilton Southeastern Highschool, Fishers, Indiana
          </h4>
          <a style={{ fontSize: "1.4rem" }}>GPA: 3.93</a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
