import { IconSquareRoundedXFilled } from "@tabler/icons-react"

const Modal = ({isShowModal, handleClosedModal}) => {
  return (
    <section className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-300 ${isShowModal ?"visible opacity-100" : "invisible opacity-0"}`}>
        <div className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_280px)] md:w-[min(100%,_400px)] md:h-[380px] relative place-items-center">
          <p className="p-4">
En esta página, podrás conocer todos los desafíos que me he propuesto a lo largo de mi aprendizaje en la programación. La mayoría de estos desafíos involucra el consumo de APIs. Haciendo click en las imagenes, podrás acceder y explorar las plataformas con más detalle.<br></br><br></br>

Mis retos en programación abarcan una amplia variedad de proyectos que van desde la creación de plataformas web hasta la automatización de tareas con la ayuda de APIs.</p>
            <button onClick={handleClosedModal} type="button" className="text-red-600 top-1 right-1 hover:text-red-700 transition-colors absolute">
              <IconSquareRoundedXFilled />
            </button>
        </div> 
    </section>
  )
}

export default Modal
