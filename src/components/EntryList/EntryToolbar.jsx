import SettingsIcon from "../icons/SettingsIcon"

export default function EntryToolbar({ onBack, onSettings }) {
  return (
    <div className="flex justify-between items-center mb-12">
      <button
        onClick={onBack}
        className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
      >
        ← Volver a grupos
      </button>
      <button
        onClick={onSettings}
        className="text-white text-2xl hover:text-gray-400 cursor-pointer"
        title="Editar grupo"
      >
        <SettingsIcon />
      </button>
    </div>
  )
}
