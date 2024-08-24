import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
uuidv4();
import "./TODO.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import EditForm from "./EditForm";

function TODO() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false ,isExiting:false},
    ]);
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

const deleteTodo = (id) => {
    
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isExiting: true } : todo
    ));

    setTimeout(() => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, 500); 
  };
  const editTodo = (id, updatedTask = null) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: updatedTask === null ? !todo.isEditing : false,
              task: updatedTask !== null ? updatedTask : todo.task,
            }
          : todo
      )
    );
  };
  

  return (
    <>
      <div className="TodoWrapper">
        <TodoForm addTodo={addTodo}> </TodoForm>
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditForm key={index}
            editTodo={editTodo}
            task={todo} />
          ) : (
            <TodoList
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            ></TodoList>
          )
        )}
      </div>
    </>
  );
}
export default TODO;
