import PlayLayout from "../layouts/PlayLayout"

const Blog = () => {
  return (
    <PlayLayout>
      <section className="text-[#21243D] px-2 w-[min(400px,_100%)] md:mx-auto">
        <h1 className="text-2xl font-bold py-2">Curriculum</h1>
        <div className="pb-3 pt-5">
          <h2 className="text-lg pb-1 font-semibold">Conocimientos básicos en media técnica</h2>
          <p className="py-1">07  Jun  2020 | IE.Playa Rica</p>
          <p className="line-clamp-3">Durante mi educación media técnica, adquirí conocimientos fundamentales en programación web, incluyendo HTML, CSS y Visual Studio Code, lo que marcó el inicio de mi formación en este campo.</p>
        </div>
        <hr />
        <div className="py-3">
          <h2 className="text-lg pb-1 font-semibold">Avance de conocimientos en el SENA</h2>
          <p className="py-1">01 Feb  2021 | SENA</p>
          <p className="line-clamp-3">Durante mi avance en el SENA, pude avanzar significativamente. Comencé de forma más profesional en la programación, aprendiendo varios lenguajes y frameworks de programación como Java, SQL, Python, Laravel, etc.</p>
        </div>
        <hr />
        <div className="py-3">
        <h2 className="text-lg pb-1 font-semibold">Etapa practica en H2A</h2>
          <p className="py-1">1 Agos 2022 | H2A</p>
          <p className="line-clamp-3">Después de mi recorrido por el SENA, avance a mi primer trabajo como soporte de BD y Backend. Ayudando a usuarios con errores o bug que tenían en sus cuentas, dándoles una asistencia inmediata.</p>
        </div>
        <hr />
        <div className="pb-8 pt-3">
        <h2 className="text-lg pb-1 font-semibold">Curso intensivo Academlo</h2>
          <p className="py-1">28 Agos 2023 | SENA</p>
          <p className="line-clamp-3 md:line-clamp-5">Después de finalizar mi tiempo en H2A, decidí avanzar en mis conocimientos y dar un paso más en mi carrera profesional. Tomé la decisión de unirme a Academlo, un bootcamp que estoy actualmente cursando. En este programa, he estado aprendiendo diversos lenguajes de programación como JavaScript, React, Node.js, entre otros. Además, he adquirido conocimientos en el uso de bibliotecas y herramientas como Tailwind, React Hook Form, React Router Dom, Redux, y más.</p>
        </div>
      </section>
    </PlayLayout>
  )
}

export default Blog
