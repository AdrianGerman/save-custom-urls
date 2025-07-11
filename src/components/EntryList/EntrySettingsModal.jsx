import Modal from "../Modal"

export default function EntrySettingsModal({
  isOpen,
  onClose,
  groupName,
  setGroupName,
  onRename,
  onDelete
}) {
  if (!isOpen) return null

  return (
    <Modal
      title="Editar grupo"
      onClose={onClose}
      footer={
        <div className="flex justify-between">
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 cursor-pointer"
          >
            Borrar grupo
          </button>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              onClick={onRename}
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
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
        />
      )}
    </Modal>
  )
}
