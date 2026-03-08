import { useEffect, useState } from 'react';
import './App.css';
import Component1 from './components/Component1';
import Timer from './components/Timer';

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [showTimer, setShowTimer] = useState(false);

  //1 증가
  const countUpdate = () => {
    setCount(count + 1);
  }

  //input 입력
  const inputChange = (e) => {
    setName(e.target.value);
  }

  //최초 랜더링
  /* useEffect(() => {
    console.log("count 랜더링");
  }, []);  */

  //count 랜더링
  useEffect(() => {
    console.log("count 랜더링");
  }, [count])   //count가 변경될때만 랜더링

  return (
    <div className="App">
      <Component1 />
      <span>count: {count}</span>&nbsp;
      <button onClick={countUpdate}>Update</button>
      <p></p>
      
      <input
        type="text"
        placeholder='이름 입력'
        value={name}
        onChange={inputChange}
      />
      <span>name: {name}</span>

      <h3>Timer 작동</h3>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
    </div>
  );
}

export default App;
 