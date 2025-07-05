// src/components/GroupList.jsx
import { useState, useEffect } from "react"

export default function GroupList({ selectGroup }) {
  const [groups, setGroups] = useState([])
  const [newGroup, setNewGroup] = useState("")

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urlGroups")) || {}
    setGroups(Object.keys(stored))
  }, [])

  const handleCreateGroup = () => {
    const trimmed = newGroup.trim()
    if (!trimmed) return

    const current = JSON.parse(localStorage.getItem("urlGroups")) || {}
    if (current[trimmed]) return // evitar duplicados

    const updated = { ...current, [trimmed]: [] }
    localStorage.setItem("urlGroups", JSON.stringify(updated))
    setGroups(Object.keys(updated))
    setNewGroup("")
  }

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-white">Tus Grupos</h2>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Nuevo grupo..."
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
          className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full placeholder-gray-400"
        />
        <button
          onClick={handleCreateGroup}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Crear
        </button>
      </div>

      {groups.length === 0 ? (
        <p className="text-gray-400">
          No hay grupos aún. Crea uno para comenzar.
        </p>
      ) : (
        <ul className="space-y-2">
          {groups.map((group) => (
            <li
              key={group}
              className="cursor-pointer px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              onClick={() => selectGroup(group)}
            >
              {group}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
