export default function EntryItem({ entry, onEdit, onDelete }) {
  return (
    <li className="bg-gray-800 p-4 rounded shadow">
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

      {entry.preview && (
        <div className="mt-4 border border-gray-700 rounded bg-gray-900 overflow-hidden flex">
          {entry.preview.image && (
            <img
              src={entry.preview.image}
              alt={entry.preview.title || "Vista previa"}
              className="w-32 h-32 object-cover flex-shrink-0"
            />
          )}
          <div className="p-3 flex flex-col justify-between">
            <div>
              <p className="font-semibold text-white text-lg mb-1">
                {entry.preview.title}
              </p>
              <p className="text-gray-400 text-xs line-clamp-3">
                {entry.preview.description}
              </p>
            </div>
            <p className="text-gray-500 text-xs mt-2">{entry.preview.domain}</p>
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-3 text-sm">
        <button
          onClick={onEdit}
          className="text-blue-400 hover:text-blue-300 cursor-pointer"
        >
          ✏️ Editar
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-400 cursor-pointer"
        >
          🗑 Eliminar
        </button>
      </div>
    </li>
  )
}
