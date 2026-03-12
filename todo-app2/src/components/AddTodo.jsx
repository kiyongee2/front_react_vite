export default function AddTodo({ input, setInput, addTodo, handleKeyPress }) {
  return (
    <div className="input-section">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="새로운 할일을 입력하세요"
        className="input-field"
      />
      <button onClick={addTodo} className="add-btn">추가</button>
    </div>
  )
}
