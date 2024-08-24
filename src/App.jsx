import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import Calculator from "./Calculator/Calculator";
import myImage from './assets/QAU.png';
function App() {
  return (
    <div className="appDiv">
      {/* <h4>QAU GPA CALCULATOR</h4> */}
      <div className="logo">
        <img src={myImage} alt="" />
      </div>
      <Calculator />
      <p>
        Developed with <FontAwesomeIcon icon={faHeart} color="#A52A2A" /> by{" "}
        <b><span> <a href="https://facebook.com/j.shoaib2">Shoaib</a></span></b>
      </p>
    </div>
  );
}

export default App;
