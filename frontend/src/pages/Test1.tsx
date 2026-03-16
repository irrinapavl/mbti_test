import { useAppDispatch, useAppSelector } from "../app/hooks"
import { setAnswer } from "../app/answersSlice"
import { QUESTIONS } from "../public/questions"
import { useNavigate } from "react-router"
import { selectAnswers } from "../app/selectors"

const Test1 = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const answers = useAppSelector(selectAnswers)
  const set1 = QUESTIONS.slice(0, 16)

  const handleAnswer = (id: number, isYes: boolean) => {
    dispatch(setAnswer({ id, value: isYes }))
  }

  return (
    <main className="min-h-screen flex flex-col items-center bg-black font-huninn px-8">
      {set1.map(question => (
        <div key={question.id} className="flex flex-col items-center text-2xl mt-6">
          <div className="flex text-lemon">
            <span>{question.id}.</span>
            <h3 className="ms-2">{question.text}</h3>
          </div>
          <div className="flex w-96 justify-between text-crimson text-xl mt-2">
            <button 
              onClick={() => handleAnswer(question.id, false)}
              className={`outline hover:text-indigo 
              hover:outline-indigo rounded w-24 p-1 mt-3 cursor-pointer
              ${answers[question.id] === false && 'text-acid outline-acid'}`}>
              Это не я
            </button>
            <button 
              onClick={() => handleAnswer(question.id, true)}
              className={`outline hover:text-indigo 
              hover:outline-indigo rounded w-24 p-1 mt-3 cursor-pointer
              ${answers[question.id] === true && 'text-acid outline-acid'}`}>
              Это я
            </button>
          </div>
        </div>
      ))}
      <footer className="flex justify-center font-huninn py-4">
        <div className="flex justify-between bg-black w-2xl">
          <button 
            onClick={() => navigate('/')}
            className="outline-2 outline-teal text-xl text-teal hover:text-aqua hover:outline-aqua rounded w-24 p-1 mt-3 cursor-pointer">
              Назад
          </button>
          <button 
            onClick={() => navigate('/test2')}
            className="outline-2 outline-teal text-xl text-teal hover:text-aqua hover:outline-aqua rounded w-24 p-1 mt-3 cursor-pointer">
              Дальше
          </button>
        </div>
      </footer>
    </main>
  )
}

export default Test1