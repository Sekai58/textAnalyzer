import React, { useState } from "react";

const Form = (props) => {
  const handleUpCase = () => {
    setState(state.toUpperCase());
  };

  const handleLowerCase = () => {
    setState(state.toLowerCase());
  };

  const handleOnChange = (e) => {
    setState(e.target.value);
  };

  const handleSpeech = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = state;
    window.speechSynthesis.speak(msg);
  };
  const handleExtraSpace = () => {
    const space = state.split(/[ ]+/);
    setState(space.join(" "));
  };
  const functionality = [
    {
      idx: 1,
      name: handleUpCase,
      title: "UpperCase",
    },
    {
      idx: 2,
      name: handleLowerCase,
      title: "LowerCase",
    },
    {
      idx: 3,
      name: handleSpeech,
      title: "Speaker",
    },
    {
      idx: 4,
      name: handleExtraSpace,
      title: "RemoveExtraSpace",
    },
  ];

  const [state, setState] = useState("Enter text to analyze...");

  return (
    <div
      className="container"
      style={{ color: props.mode === "dark" ? "light" : "dark" }}
    >
      <div
        className="mb-3 mt-3"
        style={{ color: props.mode === "dark" ? "light" : "dark" }}
      >
        <textarea
          className="form-control"
          value={state}
          onChange={handleOnChange}
          rows="6"
        />
      </div>
      {functionality.map((functions) => {
        return (
          <button
            key={functions.idx}
            className="btn btn-primary mx-2 mb-2"
            onClick={functions.name}
          >
            {functions.title}
          </button>
        );
      })}
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <div>
          <h6>Words: {state === "" ? 0 : state.trim().split(/\s+/).length}</h6>
        </div>
        <div>
          <h6>Letters: {state.length}</h6>
        </div>
        <div>
          <h6>Preview:</h6>
        </div>
        {state}
      </div>
    </div>
  );
};

export default Form;
