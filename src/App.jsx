import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import TODO from "./TODO/TODO";
function App() {
  return (
    <div className="appDiv">
      <h1>Todo App</h1>
      <TODO></TODO>
      <p>
        Developed with <FontAwesomeIcon icon={faHeart} color="#A52A2A" /> by{" "}
        <bold><span >Shoaib</span></bold>
      </p>
    </div>
  );
}

export default App;
