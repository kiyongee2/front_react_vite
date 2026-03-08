// 인터페이스 정의
interface UserProps {
  name: string
  age: number
}

// User 컴포넌트 정의
const User = ({ name, age }: UserProps) => {

  return (
    <div>
      <h2>User Component</h2>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  )
}

export default User

