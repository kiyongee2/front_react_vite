import { useEffect } from "react"

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer 동작 중...')
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="timer">
      <h2>Timer 동작 중...</h2>
    </div>
  )
}

export default Timer