import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"

export default function Header() {
  return (
    <header className="w-full bg-gray-950/60 text-white py-4 px-6 shadow-md fade-in">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-white hover:text-gray-300 transition"
        >
          <span className="text-2xl">
            <img
              src={Logo}
              alt="logo"
              className="w-10 h-10 bg-purple-950 rounded-4xl p-1.5"
            />
          </span>
          <h1 className="text-2xl font-bold">Gestor de URLs</h1>
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <Link
            to="/json"
            className="hover:text-gray-300 transition px-3 py-1 rounded bg-gray-700 hover:bg-gray-600"
          >
            Cargar JSON
          </Link>
        </div>
      </div>
    </header>
  )
}
