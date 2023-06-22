/* eslint-disable react/prop-types */
const Todo = ({todo, removeTodo, completeTodo, }) => {
  return (
    <div  className="todo"
    style={{textDecoration: todo.isCompleted ? "line-through" : "",
   opacity: todo.isCompleted ? 0.5 : 1,
  }}
    >
       <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category}) </p>
       </div>
    <div>
    <button className="Complete" onClick={() => completeTodo(todo.id)} > Completar  </button>
    <button className="Remove" onClick={() => removeTodo(todo.id)}>X  </button>
    </div>
    </div>
  )
}

export default Todo;