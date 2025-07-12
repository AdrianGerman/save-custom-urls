import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white py-6 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition"
          >
            <span className="text-2xl">🔖</span>
            <h1 className="text-2xl font-bold">Gestor de URLs</h1>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <Link to="/sobre-mi" className="hover:text-gray-300 transition">
            Sobre mí
          </Link>
        </div>
      </div>
    </header>
  )
}
