import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState("light");

  const handleMode = () => {
    if (darkMode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#212529";
    }
  };
  return (
    <>
      <Navbar title="TextAnalyzer" mode={darkMode} modeHandle={handleMode} />
      <Form mode={darkMode} />
    </>
  );
}

export default App;
