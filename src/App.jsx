import { useState } from "react"
import GroupList from "./components/GroupList"

export default function App() {
  const [activeGroup, setActiveGroup] = useState(null)

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Gestor de URLs</h1>
      {activeGroup ? (
        <div>Mostrando entradas para {activeGroup}</div>
      ) : (
        <GroupList selectGroup={setActiveGroup} />
      )}
    </div>
  )
}
