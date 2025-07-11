import { useGroupManager } from "../../hooks/useGroupManager"
import GroupCard from "./GroupCard"
import CreateGroupModal from "./CreateGroupModal"

export default function GroupList({ selectGroup }) {
  const {
    groups,
    newGroup,
    setNewGroup,
    modalOpen,
    setModalOpen,
    handleCreateGroup
  } = useGroupManager()

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

      {groups.length === 0 ? (
        <p className="text-gray-400">
          No hay grupos aún. Crea uno para comenzar.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {groups.map((group) => (
            <GroupCard
              key={group}
              group={group}
              onClick={() => selectGroup(group)}
            />
          ))}
        </div>
      )}

      <CreateGroupModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateGroup}
        newGroup={newGroup}
        setNewGroup={setNewGroup}
      />
    </div>
  )
}
