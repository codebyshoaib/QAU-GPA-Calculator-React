
import { useState } from "react";

function EditForm({ addCourse }) {

  const [name,setName]=useState('');
  const [marks,setMarks]=useState('');
  const [credits,setCredits]=useState('')

  function handleName(e){
    setName(e.target.value);
  }
  function handleMarks(e){
    setMarks(e.target.value);
  }
  function handleCredits(e){
    setCredits(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    addCourse({ name, marks, credits });
    setName("");
    setMarks("");
    setCredits("");
  }
  
  return (
    <>
     
      <form className="course-form" onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Course Name"
          className="course-name"
          onChange={handleName}
        />
        <input
          value={marks}
          type="number"
          placeholder="Obt. Marks"
          className="marks"
          onChange={handleMarks}
        />
        <input
          value={credits}
          type="number"
          placeholder="Credit Hrs."
          className="credits"
          onChange={handleCredits}
        />
        <button type="submit" className="add-btn">
          Add Course
        </button>
      </form>
    </>
  );
}
export default EditForm;
