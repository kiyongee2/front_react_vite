
const Map = () => {
  const numbers = [1, 2, 3, 4, 5]
  const doubled = numbers.map(num => num * 2)
  console.log(doubled) // [2, 4, 6, 8, 10]

  const fruits = ['apple', 'banana', 'orange']

  const carList = [
    { id: 1, brand: '현대자동차', model: '소나타' },
    { id: 2, brand: '기아자동차', model: 'EV6' },
    { id: 3, brand: 'Ford', model: 'Mustang' }
  ]

  return (
    <div>
      <h2>map() 함수 사용</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h2>자동차 목록</h2>
      <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
        {carList.map((car) => (
          <li key={car.id}>
            {car.id}. {car.brand} {car.model}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Map

