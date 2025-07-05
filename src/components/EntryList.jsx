export default function EntryList({ group, goBack }) {
  return (
    <div className="text-white">
      <button
        onClick={goBack}
        className="mb-4 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
      >
        ← Volver
      </button>
      <h2 className="text-2xl font-bold mb-2">Grupo: {group}</h2>
      <p className="text-gray-400">
        Aquí se mostrarán las URLs guardadas para este grupo.
      </p>
    </div>
  )
}
