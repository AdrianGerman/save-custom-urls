import Modal from "../Modal"

export default function CreateGroupModal({
  isOpen,
  onClose,
  onCreate,
  newGroup,
  setNewGroup
}) {
  if (!isOpen) return null

  return (
    <Modal
      title="Crear nuevo grupo"
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
            onClick={onCreate}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-pointer"
          >
            Crear
          </button>
        </div>
      }
    >
      {({ initialFocusRef }) => (
        <input
          ref={initialFocusRef}
          type="text"
          placeholder="Nombre del grupo"
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
        />
      )}
    </Modal>
  )
}
