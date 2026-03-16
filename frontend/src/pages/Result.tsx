import { useNavigate } from "react-router"
import { useAppSelector } from "../app/hooks"
import { selectMbtiType } from "../app/selectors"

const Result = () => {
  
  const mbti = useAppSelector(selectMbtiType)
  const navigate = useNavigate()

  return (
    <main className="h-screen flex flex-col items-center pt-10 bg-black font-huninn">
      <h3 className="text-3xl text-lime">Ваш результат: {mbti}</h3>
      <button
        onClick={() => navigate('/')}
        className="outline-2 outline-magenta text-xl text-magenta hover:text-lilac hover:outline-lilac rounded cursor-pointer p-2 mt-5">
          На главную
      </button>
    </main>
  )
}

export default Result