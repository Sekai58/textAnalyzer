import React from "react";

const About = (props) => {
  return (
    <div
      className="container d-flex align-center"
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
    >
      <p>
        All you need to do is paste your text into the toolbox, and it will
        analyze the text for you. You can perform following actions:
        <ul>
          <li>Viwe number of words</li>
          <li>View number of Letters</li>
          <li>Conver to Uppercase</li>
          <li>Convert to lower case</li>
          <li>Listen to the text</li>
          <li>Remove extra spaces</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
