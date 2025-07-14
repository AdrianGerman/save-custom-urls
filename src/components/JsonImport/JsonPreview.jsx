export default function JsonPreview({ jsonData, onApply }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Vista previa:</h3>
      <pre className="bg-gray-900 p-4 rounded text-xs overflow-auto max-h-96 mb-4">
        {JSON.stringify(jsonData, null, 2)}
      </pre>

      <button
        onClick={onApply}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Aplicar JSON en la App
      </button>
    </div>
  )
}
