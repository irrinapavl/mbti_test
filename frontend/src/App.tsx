import { Route, Routes } from "react-router"
import Welcome from "./pages/Welcome"
import Test1 from "./pages/Test1"
import Test2 from "./pages/Test2"
import Test3 from "./pages/Test3"
import Test4 from "./pages/Test4"
import Result from "./pages/Result"
import RestoreScroll from "./util/RestoreScroll"

function App() {

  return (
    <>
    <RestoreScroll />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/test4" element={<Test4 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
