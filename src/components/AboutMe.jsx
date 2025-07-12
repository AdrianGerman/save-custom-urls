export default function AboutMe() {
  return (
    <section
      id="sobre-mi"
      className="bg-gray-900 text-white py-12 px-6 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-300 leading-relaxed">
          ¡Hola! Soy un desarrollador apasionado por la creación de herramientas
          útiles y bien diseñadas. Este gestor de URLs nace de la necesidad de
          mantener organizados los recursos que usamos a diario, permitiendo
          categorizarlos por grupos y agregar notas y vistas previas.
        </p>
        <p className="text-gray-400 mt-4 text-sm">
          Si tienes sugerencias o quieres contribuir, ¡no dudes en escribirme!
        </p>
      </div>
    </section>
  )
}
