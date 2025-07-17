import Header from "./components/Header"
import { RoutesApp } from "./routes/RoutesApp"

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute top-0 left-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />

      <Header />
      <main className="px-4 py-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <RoutesApp />
        </div>
      </main>
    </div>
  )
}
