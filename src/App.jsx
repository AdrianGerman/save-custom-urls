import Header from "./components/Header"
import { RoutesApp } from "./routes/RoutesApp"

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <main className="px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <RoutesApp />
        </div>
      </main>
    </div>
  )
}
