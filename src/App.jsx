
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Works from './pages/Works'
import Contact from './pages/Contact'
import './App.css'

function App() {
  
  return (
    <>
    <main className='bg-primary h-full dark:bg-neutral-800'>
      <section className='grid justify-center pt-4 md:px-2'>
      <div className='bg-white w-[270px] sm:w-[400px] sm:rounded-t-full md:w-[900px] md:rounded-t-full rounded-t-full dark:bg-neutral-600'>
        <nav className='flex gap-1 justify-between md:justify-end md:gap-6 md:pr-10 p-3 border-r-8 border-secondary rounded-tr-full font-semibold'>
          <Link className='hover:text-blue-600 dark:text-white' to="/">Inicio</Link>
          <Link className='hover:text-blue-600 dark:text-white' to="/blog">Blog</Link>
          <Link className='hover:text-blue-600 dark:text-white' to="/works">Trabajos</Link>
          <Link className='hover:text-blue-600 dark:text-white' to="/contacto">Contacto</Link>
        </nav>
      </div>
      </section>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/works' element={<Works />}/>
        <Route path='/contacto' element={<Contact />}/>
      </Routes>
    </main>
    </>

  )
}

export default App
