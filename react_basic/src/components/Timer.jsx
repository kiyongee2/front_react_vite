import { useEffect } from "react"

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 실행중...");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 종료됨");
    }
  }, [])

  return(
    <div>
      <p>타이머를 시작합니다. 콘솔창을 보세요.</p>
    </div>
  )
}

export default Timer;