import Modal from "../Modal"

export default function EntryFormModal({
  isOpen,
  onClose,
  onSave,
  title,
  url,
  note,
  setTitle,
  setUrl,
  setNote,
  isEditing
}) {
  if (!isOpen) return null

  return (
    <Modal
      title={isEditing ? "Editar URL" : "Nueva URL"}
      onClose={onClose}
      footer={
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={onSave}
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
  )
}
