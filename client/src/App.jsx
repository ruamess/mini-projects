import Header from "./components/Header"
import { observer } from "mobx-react-lite"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Auth from "./pages/Auth";

const App = observer(() => {


  return (
    <div className="flex flex-col w-screen min-h-screen text-white bg-bg">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </main>
    </div>
  )
})

export default App
