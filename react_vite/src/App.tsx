
import './App.css'
import Map from './components/Map'
import User from './components/User'
import Box from './components/Box'
import Form from './components/Form'
import Form2 from './components/Form2'
import Timer from './components/Timer'
import { useState } from 'react'

function App() {
  // const sayHello = (name: string) => {
  //   alert(`안녕하세요, ${name}님!`)
  // }

  const sayHello = (name: string, e: React.MouseEvent<HTMLButtonElement>) => {
    alert(`안녕하세요, ${name}님!`)
    alert(`이벤트 타입: ${e.type}`)
  }

  const [showTimer, setShowTimer] = useState(false)

  return (
    <>
      <h1>컴포넌트(Component)</h1>
      {/* <Map /> */}
      <Box>
        <h2>Box 안의 내용</h2>
        <p>추가 내용</p>
      </Box>

      <Box>
        {/* <button onClick={() => sayHello('우영우')}>클릭</button> */}
        {/* event 전달 */}
        {/* <button onClick={(event) => sayHello('우영우', event)}>클릭</button> */}
        <button onDoubleClick={(event) => sayHello('우영우', event)}>클릭</button>
      </Box>

      {/* <Form /> */}
      {/* <Form2 /> */}
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Timer 보임/숨김</button>
    </>
  )
}

export default App

