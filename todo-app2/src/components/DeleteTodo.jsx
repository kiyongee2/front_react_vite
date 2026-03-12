export default function DeleteTodo({ id, deleteTodo }) {
  return (
    <button
      onClick={() => deleteTodo(id)}
      className="delete-btn"
    >
      삭제
    </button>
  )
}
