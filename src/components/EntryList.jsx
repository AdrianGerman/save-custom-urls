import { useEntryManager } from "../hooks/useEntryManager"

export default function EntryList({ group, goBack }) {
  const {
    entries,
    title,
    url,
    note,
    modalOpen,
    settingsOpen,
    newGroupName,
    setTitle,
    setUrl,
    setNote,
    setModalOpen,
    setSettingsOpen,
    setNewGroupName,
    handleAddEntry,
    handleRenameGroup,
    handleDeleteGroup
  } = useEntryManager(group, goBack)

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-12">
        <button
          onClick={goBack}
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
        >
          ← Volver a grupos
        </button>
        <button
          onClick={() => setSettingsOpen(true)}
          className="text-white text-2xl hover:text-gray-400"
          title="Editar grupo"
        >
          ⚙️
        </button>
      </div>

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

      {settingsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl text-white mb-4">Editar grupo</h3>
            <input
              type="text"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded mb-4"
            />
            <div className="flex justify-between">
              <button
                onClick={handleDeleteGroup}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Borrar grupo
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setSettingsOpen(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleRenameGroup}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Renombrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
