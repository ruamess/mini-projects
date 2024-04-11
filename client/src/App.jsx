import Header from "./components/Header"
import { observer } from "mobx-react-lite"
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Post from "./pages/Post";


const App = observer(() => {


  return (
    <div className="flex flex-col w-screen min-h-screen text-white bg-bg transition-transform duration-1000">
      <Header />
      <Toaster position="top-center" />
      <main className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/post' element={<Post />} />
        </Routes>
      </main>
    </div>
  )
})

export default App
