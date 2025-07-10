import { useEntryManager } from "../hooks/useEntryManager"
import Modal from "../components/Modal"

export default function EntryList({ group, goBack }) {
  const {
    entries,
    title,
    url,
    note,
    modalOpen,
    settingsOpen,
    newGroupName,
    editingIndex,
    setTitle,
    setUrl,
    setNote,
    setModalOpen,
    setSettingsOpen,
    setNewGroupName,
    handleAddEntry,
    handleEditEntry,
    handleDeleteEntry,
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
          className="text-white text-2xl hover:text-gray-400 cursor-pointer"
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
              <div className="flex gap-4 mt-3 text-sm">
                <button
                  onClick={() => handleEditEntry(idx)}
                  className="text-blue-400 hover:text-blue-300 cursor-pointer"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => handleDeleteEntry(idx)}
                  className="text-red-500 hover:text-red-400 cursor-pointer"
                >
                  🗑 Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {modalOpen && (
        <Modal
          title={editingIndex !== null ? "Editar URL" : "Nueva URL"}
          onClose={() => {
            setModalOpen(false)
            setTitle("")
            setUrl("")
            setNote("")
          }}
          footer={
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleAddEntry}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
              >
                Guardar
              </button>
            </div>
          }
        >
          {({ initialFocusRef }) => (
            <>
              <input
                ref={initialFocusRef}
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
                className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
              />
            </>
          )}
        </Modal>
      )}

      {settingsOpen && (
        <Modal
          title="Editar grupo"
          onClose={() => setSettingsOpen(false)}
          footer={
            <div className="flex justify-between">
              <button
                onClick={handleDeleteGroup}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
              >
                Borrar grupo
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setSettingsOpen(false)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleRenameGroup}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                >
                  Renombrar
                </button>
              </div>
            </div>
          }
        >
          {({ initialFocusRef }) => (
            <input
              ref={initialFocusRef}
              type="text"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
            />
          )}
        </Modal>
      )}
    </div>
  )
}
