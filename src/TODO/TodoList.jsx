import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
function TodoList({task,toggleComplete,deleteTodo,editTodo}){
    return(
        <>
        
        <div className={`Todo ${task.isExiting ? 'exiting' : ''}`}>
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? 'completed' : ""}`}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon onClick={() => editTodo(task.id)} icon={faPenToSquare} />
        <FontAwesomeIcon onClick={() => deleteTodo(task.id)} icon={faTrash} />
      </div>
    </div>
        </>
    )
}
export default TodoList