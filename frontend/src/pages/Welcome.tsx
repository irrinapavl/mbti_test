import { useNavigate } from "react-router"
import { useEffect } from "react"
import { useAppDispatch } from "../app/hooks"
import { resetAnswers } from "../app/answersSlice"

const Welcome = () => {
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetAnswers())
  }, [dispatch])
  

  return (
    <main className="h-screen flex flex-col items-center pt-10 bg-black font-huninn px-8">
      <h1 className="text-4xl text-lime">Добро пожаловать!</h1>
      <h3 className="text-2xl text-lime mt-3">Ответьте на 64 вопроса, чтобы узнать свой MBTI</h3>
      <button
        onClick={() => navigate('/test1')}
        className="outline-2 outline-teal text-xl text-teal hover:text-aqua hover:outline-aqua rounded cursor-pointer p-2 mt-5">
          Пройти тест
      </button>
    </main>
  )
}

export default Welcome