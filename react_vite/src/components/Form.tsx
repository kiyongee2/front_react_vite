import React, { useState } from "react"

const InputBox = () => {
  // input 요소의 value를 상태로 관리하기
  const [name, setName] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [flower, setFlower] = useState<string>('개나리')

  // input 요소의 값이 변경될 때마다 호출되는 이벤트 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  // 폼 제출 이벤트 핸들러
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // 폼 제출 시 페이지 새로고침 방지
    alert(`제출된 이름: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름: </label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={handleChange}
      />
      {/* <p>입력한 이름: {name}</p> */}
      <br /><br />
      <label htmlFor="text">텍스트: </label>
      <textarea
        id="text"
        value={text}
        onChange={handleTextChange}
        placeholder="텍스트를 입력하세요"   
      />
      <br /><br />
      <select value={flower} onChange={(e) => setFlower(e.target.value)}>
        <option value="개나리">개나리</option>
        <option value="장미">장미</option>
        <option value="해바라기">해바라기</option>
      </select>
      <br /><br />
      <input type="submit" />
    </form>
  )
}

export default InputBox