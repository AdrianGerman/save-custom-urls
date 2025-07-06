import { useState, useEffect } from "react"

export default function EntryList({ group, goBack }) {
  const [entries, setEntries] = useState([])
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [note, setNote] = useState("")
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const allGroups = JSON.parse(localStorage.getItem("urlGroups")) || {}
    setEntries(allGroups[group] || [])
  }, [group])

  const saveEntries = (newEntries) => {
    const allGroups = JSON.parse(localStorage.getItem("urlGroups")) || {}
    allGroups[group] = newEntries
    localStorage.setItem("urlGroups", JSON.stringify(allGroups))
    setEntries(newEntries)
  }

  const handleAddEntry = () => {
    if (!title.trim() || !url.trim()) return

    const newEntry = { title: title.trim(), url: url.trim(), note: note.trim() }
    const updated = [...entries, newEntry]
    saveEntries(updated)

    setTitle("")
    setUrl("")
    setNote("")
    setModalOpen(false)
  }

  return (
    <div className="text-white">
      <button
        onClick={goBack}
        className="mb-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        ← Volver a grupos
      </button>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">URLs en: {group}</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          + Añadir
        </button>
      </div>

      {entries.length === 0 ? (
        <p className="text-gray-400">No hay URLs en este grupo aún.</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry, idx) => (
            <li key={idx} className="bg-gray-800 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">{entry.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{entry.note}</p>
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline break-words"
              >
                {entry.url}
              </a>
            </li>
          ))}
        </ul>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl text-white mb-4">Nueva URL</h3>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-3"
            />
            <input
              type="url"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-3"
            />
            <textarea
              placeholder="Nota"
              value={note}
              onChange={(e) => setNote(e.target.value)}
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
                onClick={handleAddEntry}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
