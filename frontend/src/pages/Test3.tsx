import { QUESTIONS } from "../public/questions"
import { useNavigate } from "react-router"

const Test3 = () => {

  const navigate = useNavigate()
  const set3 = QUESTIONS.slice(16)

  return (
    <body className="flex flex-col items-center max-w-8xl mx-auto">
      <main>
        {set3.map(question => (
          <fieldset className="flex flex-col items-center font-serif text-xl mt-4">
            <div className="flex">
              <span key={question.id}>{question.id}.</span>
              <h3 className="ms-2">{question.text}</h3>
            </div>
            <div className="flex w-96 justify-between mt-2">
              <div>
                <input type="radio" id="yes" name="answer" value="yes" />
                <label htmlFor="yes" className="ms-2">Это я</label>
              </div>
              <div>
                <input type="radio" id="no" name="answer" value="no" />
                <label htmlFor="no" className="ms-2">Это не я</label>
              </div>
            </div>
          </fieldset>
        ))}
      </main>
      <footer className="flex justify-between">
        <button 
          onClick={() => navigate('/test2')}
          className="bg-blue-500 rounded w-24 p-3 mt-3 cursor-pointer">
            Назад
        </button>
        <button 
          onClick={() => navigate('/result')}
          className="bg-blue-500 rounded p-3 mt-3 cursor-pointer">
            Узнать результат
        </button>
      </footer>
    </body>
  )
}

export default Test3