import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Calculator from "./Calculator/Calculator";
function App() {
  return (
    <div className="appDiv">
      <h1>QAU GPA CALCULATOR</h1>
      <Calculator />
      <p>
        Developed with <FontAwesomeIcon icon={faHeart} color="#A52A2A" /> by{" "}
        <b><span >Shoaib</span></b>
      </p>
    </div>
  );
}

export default App;
