import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="TextAnalyzer" />
      <div className="container">
        <Form />
      </div>
    </>
  );
}

export default App;
