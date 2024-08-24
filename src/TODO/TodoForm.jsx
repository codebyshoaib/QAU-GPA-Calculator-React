import { useState } from "react";

function TodoForm({addTodo}){
    const [value,setValue]=useState('');

    function handleChange(e){
        setValue(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        addTodo(value);
        setValue('');
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input value={value} type="text" placeholder="What's the task today?" className="todo-input" onChange={handleChange} />
            <button type="submit" className="todo-btn">Add task</button>
        </form>
    );
}
export default TodoForm