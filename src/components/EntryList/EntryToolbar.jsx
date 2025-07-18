import SettingsIcon from "../icons/SettingsIcon"
import BackButton from "../ui/BackButton"

export default function EntryToolbar({ onBack, onSettings }) {
  return (
    <div className="flex justify-between items-center mb-12">
      <BackButton onClick={onBack} />
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
