import React from 'react'

// Box 컴포넌트는 children을 받아서 스타일이 적용된 div로 감싸서 렌더링하는 역할을 합니다.
interface BoxProps {
  children: React.ReactNode
}

function Box({ children }: BoxProps) {
  const style1 = {
    border: '2px solid black',
    padding: '20px',
    margin: '10px',
  }
 
  return (
    <div style={style1}>
      {children}
    </div>
  )
}

export default Box

