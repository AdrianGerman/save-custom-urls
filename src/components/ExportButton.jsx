import Swal from "sweetalert2"

export default function ExportButton() {
  const handleExport = async () => {
    const data = localStorage.getItem("urlGroups")
    if (!data) return

    const groups = Object.keys(JSON.parse(data))
    const groupCount = groups.length

    const result = await Swal.fire({
      title: "¿Exportar grupos?",
      text: `Se exportarán ${groupCount} grupo${
        groupCount !== 1 ? "s" : ""
      }. ¿Deseas continuar?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, exportar",
      cancelButtonText: "Cancelar",
      background: "#1f2937",
      color: "#fff"
    })

    if (!result.isConfirmed) return

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
      className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700 transition"
    >
      📤 Exportar JSON
    </button>
  )
}
