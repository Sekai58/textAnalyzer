import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
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
      <BrowserRouter>
        <Navbar title="TextAnalyzer" mode={darkMode} modeHandle={handleMode} />

        <Routes>
          <Route path="/home" element={<Form mode={darkMode} />}></Route>
          <Route path="/about" element={<About mode={darkMode} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
