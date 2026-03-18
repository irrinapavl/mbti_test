import { useNavigate } from "react-router"
import { useAppSelector } from "../app/hooks"
import { selectMbtiType, selectScores } from "../app/selectors"

const Result = () => {

  const navigate = useNavigate()
  const mbti = useAppSelector(selectMbtiType)
  const scores = useAppSelector(selectScores)
  const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1])

  return (
    <main className="h-screen flex flex-col items-center pt-10 bg-black font-huninn">
      <h3 className="text-3xl text-lime">Ваш результат: {mbti}</h3>
      <div className="mt-1">
        {sortedScores.map(([fn, score]) => (
          <p className="text-2xl text-lime mt-2">{fn}: {score}</p>
        ))}
      </div>
      <button
        onClick={() => navigate('/')}
        className="outline-2 outline-magenta text-xl text-magenta hover:text-lilac hover:outline-lilac rounded cursor-pointer p-2 mt-5">
          На главную
      </button>
    </main>
  )
}

export default Result