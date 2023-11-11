
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Works from './pages/Works'

import './App.css'
import Contact from './pages/contact'

function App() {
  
  return (
    <>
    <main className='bg-primary h-full'>
      <section className='grid justify-center pt-4 md:px-2'>
      <div className='bg-white w-[270px] sm:w-[400px] sm:rounded-t-full md:w-[900px] md:rounded-t-full rounded-t-full'>
        <nav className='flex gap-1 justify-between md:justify-end md:gap-6 md:pr-10 p-3 border-r-8 border-secondary rounded-tr-full font-semibold'>
          <Link className='hover:text-blue-600' to="/">Inicio</Link>
          <Link className='hover:text-blue-600' to="/blog">Blog</Link>
          <Link className='hover:text-blue-600' to="/works">Trabajos</Link>
          <Link className='hover:text-blue-600' to="/contact">Contacto</Link>
        </nav>
      </div>
      </section>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/works' element={<Works />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </main>
    </>

  )
}

export default App
