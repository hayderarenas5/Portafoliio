import PlayLayout from "../layouts/PlayLayout"

const Blog = () => {
  return (
    <PlayLayout>
      <section className="text-[#21243D] px-2 w-[min(400px,_100%)] md:mx-auto">
        <h1 className="text-2xl font-bold py-2 dark:text-white">Curriculum</h1>
        <div className="pb-3 pt-5">
          <h2 className="text-lg pb-1 font-semibold dark:text-white">Conocimientos básicos en media técnica</h2>
          <p className="py-1 dark:text-white">07  Jun  2020 | IE.Playa Rica</p>
          <p className="dark:text-slate-200">Durante mi educación media técnica, adquirí conocimientos fundamentales en programación web, incluyendo HTML, CSS y Visual Studio Code, lo que marcó el inicio de mi formación en este campo.</p>
        </div>
        <hr />
        <div className="py-3">
          <h2 className="text-lg pb-1 font-semibold dark:text-white">Avance de conocimientos en el SENA</h2>
          <p className="py-1 dark:text-white">01 Feb  2021 | SENA</p>
          <p className="dark:text-slate-200">Durante mi avance en el SENA, pude avanzar significativamente. Comencé de forma más profesional en la programación, aprendiendo varios lenguajes y frameworks de programación como Java, SQL, Python, Laravel, etc.</p>
        </div>
        <hr />
        <div className="py-3">
        <h2 className="text-lg pb-1 font-semibold dark:text-white">Etapa practica en H2A</h2>
          <p className="py-1 dark:text-white">1 Agos 2022 | H2A</p>
          <p className="dark:text-slate-200">Después de mi recorrido por el SENA, avance a mi primer trabajo como soporte de BD y Backend. Ayudando a usuarios con errores o bug que tenían en sus cuentas, dándoles una asistencia inmediata.</p>
        </div>
        <hr />
        <div className="pb-8 pt-3">
        <h2 className="text-lg pb-1 font-semibold dark:text-white">Curso intensivo Academlo</h2>
          <p className="py-1 dark:text-white">28 Agos 2023 | SENA</p>
          <p className="dark:text-slate-200">Después de finalizar mi tiempo en H2A, decidí avanzar en mis conocimientos y dar un paso más en mi carrera profesional. Tomé la decisión de unirme a Academlo, donde me certifique como desarrollador FullStack en lenguajes como React, Node js, JavaScript, postgreSQl.</p>
        </div>
      </section>
    </PlayLayout>
  )
}

export default Blog
