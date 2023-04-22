import React, { useState } from "react";

const Form = () => {
  const handleUpCase = () => {
    console.log("upper case clicked");
    setState(state.toUpperCase());
  };

  const handleLowerCase = () => {
    console.log("upper case clicked");
    setState(state.toLowerCase());
  };

  const handleOnChange = (e) => {
    console.log("unchanged clicked");
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
    <div className="container">
      <div className="mb-3 mt-3">
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
      <h6>Words:</h6> {state.split(" ").length}
      <h6>Letters:</h6> {state.length}
      <h6>Preview:</h6>
      {state}
    </div>
  );
};

export default Form;
