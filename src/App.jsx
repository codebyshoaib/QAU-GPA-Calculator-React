import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from 'react-transition-group';
import "./App.css";
import Calculator from "./Calculator/Calculator";
import myImage from './assets/QAU.png';
import { useState } from "react";

function App() {
  const [inProp, setInProp] = useState(false);

  // Trigger the animation when the component mounts
  useState(() => {
    setInProp(true);
  }, []);

  return (
    <CSSTransition in={inProp} timeout={900} classNames="fade" appear>
      <div className="appDiv">
        <div className="logo">
          <img src={myImage} alt="" />
        </div>
        <Calculator />
        <p>
          Developed with <FontAwesomeIcon icon={faHeart} color="#A52A2A" /> by{" "}
          <b><span> <a href="https://facebook.com/j.shoaib2">Shoaib</a></span></b>
        </p>
      </div>
    </CSSTransition>
  );
}

export default App;
