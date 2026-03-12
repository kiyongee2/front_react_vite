import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // 할일 추가
  const addTodo = () => {
    if (input.trim() === '') return
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    }
    setTodos([...todos, newTodo])
    setInput('')
  }

  // 할일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 할일 체크/언체크
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Enter 키 입력 시 추가
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="container">
      <h1>할 일 관리 앱</h1>
      
      <AddTodo 
        input={input} 
        setInput={setInput} 
        addTodo={addTodo} 
        handleKeyPress={handleKeyPress} 
      />

      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} 
      />
    </div>
  )
}
