import { useEntryManager } from "../../hooks/useEntryManager"
import EntryItem from "./EntryItem"
import EntryFormModal from "./EntryFormModal"
import EntrySettingsModal from "./EntrySettingsModal"
import SettingsIcon from "../icons/SettingsIcon"
import EntryToolbar from "./EntryToolbar"

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
    searchTerm,
    setSearchTerm,
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
      <EntryToolbar onBack={goBack} onSettings={() => setSettingsOpen(true)} />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">URLs en: {group}</h2>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
        >
          + Añadir
        </button>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Buscar por título, nota o URL..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white border border-gray-600 rounded"
        />
      </div>

      {entries.length === 0 ? (
        <p className="text-gray-400">No hay URLs en este grupo aún.</p>
      ) : (
        <ul className="space-y-4">
          {entries.map((entry, idx) => (
            <EntryItem
              key={idx}
              entry={entry}
              onEdit={() => handleEditEntry(idx)}
              onDelete={() => handleDeleteEntry(idx)}
            />
          ))}
        </ul>
      )}

      <EntryFormModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setTitle("")
          setUrl("")
          setNote("")
        }}
        onSave={handleAddEntry}
        title={title}
        url={url}
        note={note}
        setTitle={setTitle}
        setUrl={setUrl}
        setNote={setNote}
        isEditing={editingIndex !== null}
      />

      <EntrySettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        groupName={newGroupName}
        setGroupName={setNewGroupName}
        onRename={handleRenameGroup}
        onDelete={handleDeleteGroup}
      />
    </div>
  )
}
