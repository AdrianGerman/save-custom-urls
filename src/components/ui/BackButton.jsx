export default function BackButton({ onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-red-600 px-4 py-2 rounded hover:bg-red-700 text-white cursor-pointer transition ${className}`}
    >
      ← Volver
    </button>
  )
}
