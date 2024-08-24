import { useState } from "react";

function EditForm({ editCourse, course }) {
  const [name, setName] = useState(course.name);
  const [marks, setMarks] = useState(course.marks);
  const [credits, setCredits] = useState(course.credits);

  const handleChange = (setter) => (e) => setter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    editCourse(course.id, { name, marks, credits });
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <input
        value={name}
        type="text"
        placeholder="Course Name"
        className="course-name"
        onChange={handleChange(setName)}
      />
      <input
        value={marks}
        type="number"
        placeholder="Obt. Marks"
        className="marks"
        onChange={handleChange(setMarks)}
      />
      <input
        value={credits}
        type="number"
        placeholder="Credit Hrs."
        className="credits"
        onChange={handleChange(setCredits)}
      />
      <button type="submit" className="add-btn">
        Update
      </button>
    </form>
  );
}

export default EditForm;
