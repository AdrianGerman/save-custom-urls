import { useState, useEffect } from "react"

export default function GroupList({ selectGroup }) {
  const [groups, setGroups] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [newGroup, setNewGroup] = useState("")

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urlGroups")) || {}
    setGroups(Object.keys(stored))
  }, [])

  const handleCreateGroup = () => {
    const trimmed = newGroup.trim()
    if (!trimmed) return

    const current = JSON.parse(localStorage.getItem("urlGroups")) || {}
    if (current[trimmed]) return

    const updated = { ...current, [trimmed]: [] }
    localStorage.setItem("urlGroups", JSON.stringify(updated))
    setGroups(Object.keys(updated))
    setNewGroup("")
    setModalOpen(false)
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white">Tus Grupos</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 px-4 py-2 rounded text-white hover:bg-green-700 cursor-pointer"
        >
          + Agregar
        </button>
      </div>

      {/* Lista en formato grilla */}
      {groups.length === 0 ? (
        <p className="text-gray-400">
          No hay grupos aún. Crea uno para comenzar.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {groups.map((group) => (
            <div
              key={group}
              className="bg-gray-800 text-white p-4 rounded shadow hover:bg-gray-700 cursor-pointer"
              onClick={() => selectGroup(group)}
            >
              <h3 className="text-lg font-semibold">{group}</h3>
              <p className="text-gray-400 text-sm">Click para ver URLs</p>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl text-white mb-4">Crear nuevo grupo</h3>
            <input
              type="text"
              placeholder="Nombre del grupo"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreateGroup}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
