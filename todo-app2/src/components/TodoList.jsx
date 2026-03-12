import DeleteTodo from './DeleteTodo'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="checkbox"
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
            <DeleteTodo id={todo.id} deleteTodo={deleteTodo} />
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="empty-message">할일을 추가해보세요!</p>
      )}
    </>
  )
}
