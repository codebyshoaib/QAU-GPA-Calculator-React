import { useState } from "react";

function EditForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task);
  
    function handleChange(e) {
      setValue(e.target.value);
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      editTodo(task.id, value);
    }
  
    return (
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          placeholder="Update Task"
          className="todo-input"
          onChange={handleChange}
        />
        <button type="submit" className="todo-btn">Update</button>
      </form>
    );
  }
export default EditForm