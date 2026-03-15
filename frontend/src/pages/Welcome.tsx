import { useNavigate } from "react-router"

const Welcome = () => {
  
  const navigate = useNavigate()

  return (
    <main className="h-screen flex flex-col items-center pt-8">
      <h1 className="text-4xl">Добро пожаловать!</h1>
      <h3 className="text-2xl mt-3">Всего 24 вопроса, чтобы узнать свой MBTI</h3>
      <button
        onClick={() => navigate('/test1')}
        className="bg-blue-500 text-xl rounded cursor-pointer p-3 mt-5 ">
          Пройти тест
      </button>
    </main>
  )
}

export default Welcome