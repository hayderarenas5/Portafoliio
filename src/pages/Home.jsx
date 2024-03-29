import { Link } from "react-router-dom"
import PlayLayout from "../layouts/PlayLayout"

const Home = () => {
  return (
    <PlayLayout>
        <div className="flex justify-center py-6 ">
            <img className="rounded-full" src="/images/foto.jpg" alt="" />
        </div>
        <div className="grid gap-4 text-center px-2 pb-4 [&>p]:text-[#21243D] ">
            <p className="font-semibold text-2xl dark:text-white">Hola, soy Hayder tecnólogo en programación</p>
            <p className="md:w-[500px] md:mx-auto pt-3 dark:text-white">Soy una persona muy dedicada que cumple con las labores y requerimientos que se le
            exigen, honesta, sincera, responsable, pro activa, capaz de ejercer las labores que me
            sean asignadas...</p>
            <a href="/documents/HayderArenas_CV" download><button className="bg-secondary shadow-blue-400 shadow-md dark:bg-neutral-600 hover:bg-blue-600 transition-colors text-white p-2 rounded-md mx-auto">descargar documento</button></a>
            <a href="/documents/CartaDePresentacion.pdf" download><button className="bg-secondary shadow-blue-400 shadow-md dark:bg-neutral-600 hover:bg-blue-600 transition-colors text-white p-2 rounded-md mx-auto">descargar carta de presentacion</button></a>
        </div>
        <div className="w-[262px] pb-7 bg-[#EDF7FA] sm:w-[100%] md:w-[100%] dark:bg-neutral-600">
            <div className="flex items-center p-3 justify-center "> 
                <h3 className="text-center font-normal md:pl-24 flex-1 dark:text-white">Experiencias</h3>
                <Link to="/blog" className="text-secondary hover:underline hover:text-blue-600 md:pr-10">Ver todos</Link>
            </div>
            <div  className="bg-white w-[92%] mx-auto grid gap-2 md:flex md:items-center md:gap-0 dark:bg-neutral-500">
                <div className="text-center grid gap-2 [&>p]:text-[#21243D] border-r-2">
                    <h1 className="text-[#21243D] font-bold px-6 py-2 dark:text-white">Conocimientos básicos en media técnica</h1>
                    <p className="pb-2 dark:text-white">07  Jun  2020 | IE.Playa Rica</p>
                    <p className="line-clamp-3 pl-3 dark:text-white">Durante mi educación media técnica, adquirí conocimientos fundamentales en programación web, incluyendo HTML, CSS y Visual Studio Code, lo que marcó el inicio de mi formación en este campo.
                    </p>
                </div>
                
                <div className="text-center border-t-8 border-[#EDF7FA] md:border-none [&>p]:text-[#21243D] ">
                    <h1 className="text-[#21243D] font-bold px-6 py-2 dark:text-white">Avance de conocimientos en el SENA</h1>
                    <p className="pb-2 dark:text-white">01 Feb  2021 | SENA</p>
                    <p className="line-clamp-3 dark:text-white">Durante mi avance en el SENA, pude avanzar significativamente. Comencé de forma más profesional en la programación, aprendiendo varios lenguajes y frameworks de programación como Java, SQL, Python, Laravel, etc.
                    </p>
                </div>
            </div>
        </div>
        <div className="shadow-md mb-2">
            <h2 className="flex justify-center py-2 font-semibold text-[#21243D] dark:text-white">Habilidades de desarrollo</h2>
            <div className="flex justify-center pb-2 md:gap-8">
                <Link to="https://es.react.dev/">
                    <header className="w-[50px] hover:bg-[#CCF6F0] dark:hover:bg-[#97b4ae] hover:rounded-md duration-300">
                        <img  src="/images/skills/react.png" alt="" />
                    </header>
                </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/JavaScript">
                    <header className="w-[50px] hover:bg-[#CCF6F0] dark:hover:bg-[#97b4ae] hover:rounded-md duration-300">
                        <img  src="/images/skills/js.webp" alt="" />
                    </header>
                </Link>
                <Link to="https://www.java.com/es/">
                    <header className="w-[50px] hover:bg-[#CCF6F0] dark:hover:bg-[#97b4ae] hover:rounded-md duration-300">
                        <img  src="/images/skills/java.png" alt="" />
                    </header>
                </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/HTML">
                    <header className="w-[50px] hover:bg-[#CCF6F0] dark:hover:bg-[#97b4ae] hover:rounded-md duration-300">
                        <img  src="/images/skills/html.png" alt="" />
                    </header>
                </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/CSS">
                    <header className="w-[50px] hover:bg-[#CCF6F0] dark:hover:bg-[#97b4ae] hover:rounded-md duration-300">
                        <img  src="/images/skills/css.png" alt="" />
                    </header>
                </Link>
            </div>
        </div>
        
        <div className="md:w-[90%] mx-auto">
                <h1 className="font-semibold text-center py-3 md:text-2xl text-[#21243D] dark:text-white">Trabajos</h1>
                <hr className="w-[80%] mx-auto pb-3"/>
            <div className="pb-3 md:flex md:items-center">
                <header className="sm:flex sm:justify-center md:w-[650px] md:h-[100px] hover:scale-105 duration-250 cursor-pointer">
                    <Link to="/works">
                     <img  className="rounded-lg overflow-hidden" src="/images/works/pokedex.png" alt="" />
                    </Link>
                </header>
                <div className="flex justify-center gap-2 py-2 px-1 items-center">
                    <h2 className="font-bold uppercase text-[#21243D] dark:text-white">pokedex</h2>
                    <p className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</p>
                </div>
                <p className="line-clamp-4 text-[#21243D] px-4 dark:text-white">La Pokédex es una página dedicada a la serie animada Pokémon, en la que asumes el rol de un entrenador y accedes a una sección que contiene a todos los Pokémon existentes. En esta sección, puedes explorar los detalles de cada uno de ellos <Link to="/works" className="text-secondary hover:underline hover:text-blue-600"> Ver todos...</Link></p>
            </div>
            
            <hr className="w-[80%] mt-3 mx-auto"/>
            <div className=" pb-3 md:flex md:items-center">
                <header className="sm:w-[300px]  sm:mx-auto md:w-[395px] md:h-[160px] md:flex md:items-center">
                    <Link to="/works">
                        <img className="rounded-lg overflow-hidden h-24 transform hover:scale-105 transition duration-250 cursor-pointer" src="/images/works/ESLAND.png" alt="" />
                     </Link>
                </header>
                <div className="flex justify-center gap-2 py-2 px-1 items-center">
                    <h2 className="font-bold uppercase text-[#21243D] dark:text-white">Music </h2>
                    <p className="px-1 bg-[#142850] inline text-white rounded-2xl">2023</p>
                </div>
                <p className="line-clamp-4 text-[#21243D] px-4 dark:text-white">Music es una plataforma web que está conectada a la API de Spotify. Esto nos permite obtener información y canciones sobre los artistas que nos gusten.<Link to="/works" className="text-secondary hover:underline hover:text-blue-600"> Ver todos...</Link></p>
            </div>
            
        </div>
            <hr className=" w-[90%] mx-auto border border-primary"/>
            <h2 className="text-[#21243D] font-normal text-sm text-center px-4 pt-3 dark:text-white">Hayder Arenas© 2023 Todos los derechos reservados</h2>
    </PlayLayout>
  )
}

export default Home
