/* eslint-disable no-unused-vars */
import Swal from "sweetalert2"

export default function FileInput({ onFileLoaded }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result)
        onFileLoaded(parsed)
      } catch (error) {
        Swal.fire({
          title: "Error al leer JSON",
          text: "Asegúrate de que el archivo tenga un formato JSON válido.",
          icon: "error",
          background: "#1f2937",
          color: "#fff"
        })
      }
    }
    reader.readAsText(file)
  }

  return (
    <input
      type="file"
      accept=".json"
      onChange={handleFileChange}
      className="bg-gray-800 border border-gray-600 p-2 rounded text-sm mb-6"
    />
  )
}
