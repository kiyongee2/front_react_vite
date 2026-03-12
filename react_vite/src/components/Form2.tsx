import React, { useState } from 'react'

const Form2 = () => {
  const [car, setCar] = useState({ brand: '', model: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`name: ${name}, value: ${value}`)
    // setCar({ ...car, [name]: value }) // 객체 형태로 상태 업데이트
    // [name]: value는 객체의 속성 이름을 동적으로 설정하는 ES6 문법입니다.
    setCar(values => ({ ...values, [name]: value })) 
  }

  return (
    <form>
      Brand : <input 
        type="text" 
        name="brand"
        value={car.brand} 
        onChange={handleChange} 
      />
      Model : <input 
        type="text" 
        name="model"
        value={car.model}
        onChange={handleChange} 
      />
      <p>입력한 자동차: {car.brand} {car.model}</p>
    </form>
  )
}

export default Form2
