import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  return (
    <div className="flex flex-col w-screen min-h-screen text-blac bg-white-bg dark:text-white dark:bg-dark-bg transition duration-500">
      <Header />
      <main className="flex-grow">

      </main>
      <Footer />
    </div>
  )
}

export default App
