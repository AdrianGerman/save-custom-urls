import { useState, useEffect } from "react"

export default function EntryList({ group, goBack }) {
  const [entries, setEntries] = useState([])
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [note, setNote] = useState("")

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
  }

  return (
    <div className="text-white">
      <button
        onClick={goBack}
        className="mb-6 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        ← Volver a grupos
      </button>

      <h2 className="text-2xl font-bold mb-4">Grupo: {group}</h2>

      <div className="bg-gray-800 p-4 rounded-lg mb-6 space-y-3">
        <input
          type="text"
          placeholder="Título"
          className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="url"
          placeholder="URL"
          className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <textarea
          placeholder="Nota"
          className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={handleAddEntry}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          Añadir URL
        </button>
      </div>

      {entries.length === 0 ? (
        <p className="text-gray-400">No hay URLs en este grupo aún.</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry, idx) => (
            <li key={idx} className="bg-gray-800 p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{entry.title}</h3>
                  <p className="text-sm text-gray-400">{entry.note}</p>
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline break-words"
                  >
                    {entry.url}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
