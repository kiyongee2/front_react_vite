import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // 할 일 추가
  const addTodo = () => {
    if (input.trim() === '') {
      alert('할 일을 입력해주세요!')
      return
    }
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodos([...todos, newTodo])
    setInput('')
  }

  // 할 일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 할 일 완료 체크
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Enter 키로 할 일 추가
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>📝 할 일 관리 앱</h1>
        
        <div className="input-section">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="할 일을 입력하세요..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            추가
          </button>
        </div>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">할 일을 추가해주세요!</p>
          ) : (
            todos.map(todo => (
              <div key={todo.id} className="todo-item">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-button"
                >
                  삭제
                </button>
              </div>
            ))
          )}
        </div>

        <div className="stats">
          <p>전체: {todos.length} | 완료: {todos.filter(t => t.completed).length}</p>
        </div>
      </div>
    </div>
  )
}

export default App
