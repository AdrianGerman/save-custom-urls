export default function GroupCard({ group, onClick }) {
  return (
    <div
      className="bg-gray-800 text-white p-4 rounded shadow hover:bg-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{group}</h3>
      <p className="text-gray-400 text-sm">Click para ver URLs</p>
    </div>
  )
}
