import emailjs from "@emailjs/browser"
import PlayLayout from "../layouts/PlayLayout"
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import { Link } from "react-router-dom"
const Contact = () => {

    const sendEmail=(e)=>{
        e.preventDefault()
        const form =e.target
        emailjs.sendForm('service_f0dsd3a', 'template_01jqch7', form, 'zDNv7gp_arMEoYdsC').then(responde=>console.log(responde))
        .catch(error=>console.log(error ))
    }

  return (
    <PlayLayout>
        <div className="text-[#21243D] md:w-[55%] mx-auto grid gap-4 pt-4 px-2">
         <h1 className="text-2xl flex justify-center uppercase items-center gap-2 dark:text-white">Mandame un mensaje<IconMail className="text-secondary"/></h1>
         <form className="grid gap-[18px]" onSubmit={sendEmail}>
            <label className="hover:text-secondary transition-colors dark:text-white" htmlFor="name">Nombre</label>
            <input className="shadow-md  border-r-4 border-secondary rounded-lg outline-none py-1 px-3" id="name" name="user_name" type="text" placeholder="Nombre"/>

            <label className="hover:text-secondary transition-colors dark:text-white" htmlFor="email">E-mail</label>
            <input className="shadow-md border-r-4 border-secondary rounded-lg outline-none py-1 px-3" id="email" name="user_email" type="email" placeholder="Correo Electronico"/>

            <label className="hover:text-secondary transition-colors dark:text-white" htmlFor="message">Mensaje</label>
            <textarea className="shadow-md border-r-4 border-secondary rounded-lg outline-none py-1 px-3 " name="user_message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
            <button className="py-2 px-4 rounded-md hover:bg-blue-500 transition-colors bg-secondary my-4 border-none text-white mx-auto dark:bg-neutral-600 dark:hover:bg-slate-500 dark:text-white">Enviar</button>
         </form>
         <hr className=" w-[90%] mx-auto border border-primary  "/>
            <Link to="https://www.linkedin.com/in/hayder-arenas-5956971b1/"><IconBrandLinkedin  className="mx-auto h-[30px] w-[50px] dark:text-white"/></Link>
            <h2 className="text-[#21243D] font-normal text-sm text-center px-4 pt-3 dark:text-white">Hayder Arenas© 2023 Todos los derechos reservados</h2>
        </div>
    </PlayLayout>
  )
}

export default Contact
