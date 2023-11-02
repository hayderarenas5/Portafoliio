import { useState } from "react"
import Modal from "../components/Modal"
import PlayLayout from "../layouts/PlayLayout"
import { IconHelpCircle } from "@tabler/icons-react"
import { Link } from "react-router-dom"

const Works = () => {

  const [isShowModal, setIsShowModal]=useState(false) 

  const handleOpenModal=()=>{
    setIsShowModal(true)
  }

  const handleClosedModal=()=>{
    setIsShowModal(false)
  }

  return (
    <PlayLayout>
      <section className="text-[#21243D] px-2 md:w-[85%] md:mx-auto ">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold py-2">Trabajos</h1>
          <button onClick={handleOpenModal}><IconHelpCircle/></button>
        </div>
        <hr className=" w-[10px]"/>
        <Link to="https://taupe-duckanoo-804b9a.netlify.app/">
        <div className="hover:bg-primary rounded-md transition-colors md:grid md:grid-cols-2 md:items-center py-3">
          <header>
            <img className="md:w-[300px] rounded-2xl" src="/images/works/ecomers.png" alt="" />
          </header>
          <div className="md:grid md:grid-cols-3 md:items-center relative py-3">
            <h2 className="text-lg py-1 font-semibold">E-commers</h2>
            <p>13 Sep | <span className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</span></p>
            <p className=" text-sm md:col-span-3">En nuestro ecommerce, encontrarás una variada selección de prendas de ropa de alta calidad, que abarcan desde elegantes trajes y vestidos hasta ropa casual y deportiva. Nuestra plataforma ha sido diseñada para brindarte una experiencia de compra sin complicaciones y para que encuentres las prendas que se adapten perfectamente a tu estilo y necesidades.
            </p>
          </div>
        </div>
        </Link>
        <hr />
        <Link to="https://fancy-llama-4cfb63.netlify.app/">
          <div className="hover:bg-primary rounded-md transition-colors md:grid md:grid-cols-2 md:items-center py-3 relative">
            <header>
              <img className="md:w-[300px] rounded-2xl" src="/images/works/galaxy.png" alt="" />
            </header>
            <div className="md:grid md:grid-cols-3 md:items-center relative py-3">
              <h2 className="text-lg py-1 font-semibold">Galaxi</h2>
              <p>13 Sep | <span className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</span></p>
              <p className="text-sm md:col-span-3">La plataforma InfoGalax fue creada con el propósito de proporcionar información sobre las opiniones y contenidos presentes en sitios web que se centran en temas relacionados con el espacio exterior. Además de acceder a estas opiniones, también te brinda la oportunidad de visualizar imágenes de fondo que son similares a las galaxias que se mencionan en el contenido.</p>
              
            </div>
          </div>
        </Link>
        <hr />
        <Link to="https://fabulous-sprite-cca245.netlify.app/">
          <div className="hover:bg-primary rounded-md transition-colors md:grid md:grid-cols-2 md:items-center py-3 relative">
            <header>
              <img className="md:w-[300px] rounded-2xl" src="/images/works/clima.png" alt="" />
            </header>
            <div className="md:grid md:grid-cols-3 md:items-center relative py-3">
              <h2 className="text-lg py-1 font-semibold">Clima</h2>
              <p>13 Sep | <span className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</span></p>
              <p className="text-sm md:col-span-3">Esta plataforma simula una aplicación meteorológica que te proporciona información precisa sobre las condiciones climáticas en tu ubicación actual. Antes de utilizarla, deberás permitir el acceso a tu ubicación en tiempo real para obtener datos precisos y relevantes.</p>
              
            </div>
          </div>
        </Link>
          <hr />
        <Link to="https://magenta-crumble-704621.netlify.app/">
          <div className="hover:bg-primary rounded-md transition-colors md:grid md:grid-cols-2 md:items-center py-3 relative">
            <header>
              <img className="md:w-[300px] rounded-2xl" src="/images/works/rick.png" alt="" />
            </header>
            <div className="md:grid md:grid-cols-3 md:items-center relative py-3">
              <h2 className="text-lg py-1 font-semibold">Rick And Morty</h2>
              <p>13 Sep | <span className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</span></p>
              <p className="text-sm md:col-span-3">Rick and Morty es una plataforma que te permite acceder a todo el contenido de la popular serie animada (Rick and Morty). Esta serie se caracteriza por explorar las diversas dimensiones que existen en su universo, revelando una amplia gama de seres vivos y realidades alternas.</p>
              
            </div>
          </div>
        </Link>
        <hr />
        <Link to="https://euphonious-naiad-b17e91.netlify.app/">
          <div className="hover:bg-primary rounded-md transition-colors md:grid md:grid-cols-2 md:items-center py-3 relative">
            <header>
              <img className="md:w-[300px] rounded-2xl" src="/images/works/users.png" alt="" />
            </header>
            <div className="md:grid md:grid-cols-3 md:items-center relative py-3">
              <h2 className="text-lg py-1 font-semibold">Usuarios</h2>
              <p>13 Sep | <span className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</span></p>
              <p className="text-sm md:col-span-3">Users es una plataforma que ofrece un completo sistema CRUD, que te permite crear, leer, actualizar y borrar datos de forma sencilla. Además, simula una base de datos donde puedes almacenar y gestionar tu información de manera eficiente.</p>
              
            </div>
          </div>
        </Link>
        <hr />
        <Link to="https://dainty-chebakia-3ba74a.netlify.app/">
          <div className="hover:bg-primary rounded-md transition-colors md:grid md:grid-cols-2 md:items-center py-3 relative">
            <header>
              <img className="md:w-[300px] rounded-2xl" src="/images/works/pokedex.png" alt="" />
            </header>
            <div className="md:grid md:grid-cols-3 md:items-center relative py-3">
              <h2 className="text-lg py-1 font-semibold">Pokedex</h2>
              <p>13 Sep | <span className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</span></p>
              <p className="text-sm md:col-span-3">La Pokédex es una página dedicada a la serie animada Pokémon, en la que asumes el rol de un entrenador y accedes a una sección que contiene a todos los Pokémon existentes. En esta sección, puedes explorar los detalles de cada uno de ellos.</p>
              
            </div>
          </div>
        </Link>
        <hr />
        <Link to="#">
          <div className="hover:bg-primary rounded-md transition-colors md:grid md:grid-cols-2 md:items-center py-3 relative">
            <header>
              <img className="md:w-[300px] rounded-2xl" src="/images/works/music.png" alt="" />
            </header>
            <div className="md:grid md:grid-cols-3 md:items-center relative py-3">
              <h2 className="text-lg py-1 font-semibold">GIFT MUSIC</h2>
              <p>13 Sep | <span className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</span></p>
              <p className="text-sm md:col-span-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              
            </div>
          </div>
        </Link>
      </section>
       <Modal isShowModal={isShowModal} handleClosedModal={handleClosedModal}/> 
    </PlayLayout>
  )
}

export default Works
