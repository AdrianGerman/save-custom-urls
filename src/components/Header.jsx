export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white py-6 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition"
          >
            <span className="text-2xl">🔖</span>
            <h1 className="text-2xl font-bold">Gestor de URLs</h1>
          </a>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <a href="#sobre-mi" className="hover:text-gray-300 transition">
            Sobre mí
          </a>
          <a
            href="#"
            className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 transition"
          >
            Modo oscuro
          </a>
        </div>
      </div>
    </header>
  )
}
