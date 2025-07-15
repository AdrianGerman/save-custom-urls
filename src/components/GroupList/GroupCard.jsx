export default function GroupCard({ group, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 text-white p-4 rounded-xl shadow-lg border border-gray-700 hover:border-green-500 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-200 cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg font-bold border border-gray-600">
          {group.charAt(0).toUpperCase()}
        </div>
        <h3 className="text-lg font-semibold truncate">{group}</h3>
      </div>
      <p className="text-gray-400 text-xs">Click para ver URLs</p>
    </div>
  )
}
