import { Link, useNavigate } from "react-router-dom"
import ConteinerAuth from "../components/layouts/ConteinerAuth"
import { loginThunk } from "../store/slices/user.slice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Login = () => {

  const navigate=useNavigate()

  const token = useSelector((store)=>store.user.token)

  const dispatch=useDispatch()

  const handleSubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)
    const data= Object.fromEntries(formData)
    
    dispatch(loginThunk(data))
  }

  useEffect(()=>{
    if (token!=="") {
      //?Ya el usuario esta logeado
      navigate("/")
    }
  }, [token])

  return (
    <ConteinerAuth>
       {/* Imagen */}
       <div className="hidden md:block">
          <img className="max-w-[380px]" src="/images/bannerLogin.png" alt="" />
        </div>

        {/* formulario */}
        <form onSubmit={handleSubmit} className="[&>label]:grid [&>label]:gap-4 grid gap-5 w-[min(100%,300px)] mx-auto items-center">
          <h1 className="text-3xl uppercase font-semibold">Iniciar Sesión</h1>

          
          <label className="">
            <span className="text-slate-300/50 text-sm">E-mail</span>
            <input className="bg-transparent border-b border-secondary outline-none" type="email" name="email"/>
          </label>

          <label>
            <span className="text-slate-300/50 text-sm">Contraseña</span>
            <input className="bg-transparent border-b border-secondary outline-none" type="password" name="password"/>
          </label>
          
          <button className="bg-primary-light hover:tracking-widest transition-all rounded-full py-1 px-4 max-w-max mx-auto uppercase font-semibold text-md shadow-lg shadow-purple-400/40 mt-4" type="submit">Iniciar Sesión</button>

          <Link className="text-center underline" to={"/register"}>O Crear</Link>
        </form>
      </ConteinerAuth>
  )
}

export default Login
