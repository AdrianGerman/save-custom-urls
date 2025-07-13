export default function ExportButton() {
  const handleExport = () => {
    const data = localStorage.getItem("urlGroups")
    if (!data) return

    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "grupos-urls.json"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleExport}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      📤 Exportar JSON
    </button>
  )
}
