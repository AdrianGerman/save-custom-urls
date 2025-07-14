import { useState } from "react"
import Swal from "sweetalert2"

export default function JsonImport() {
  const [jsonPreview, setJsonPreview] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result)
        setJsonPreview(parsed)

        Swal.fire({
          title: "JSON cargado",
          text: "Se ha leído el archivo correctamente. Revisa la vista previa.",
          icon: "info",
          background: "#1f2937",
          color: "#fff"
        })
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

  const handleApply = () => {
    if (!jsonPreview) return

    localStorage.setItem("urlGroups", JSON.stringify(jsonPreview))

    Swal.fire({
      title: "¡Importado con éxito!",
      text: "El JSON ha sido aplicado a tu app.",
      icon: "success",
      background: "#1f2937",
      color: "#fff"
    })
  }

  return (
    <div className="text-white max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-4">Importar JSON</h2>
      <p className="text-gray-400 mb-6">
        Puedes importar un archivo JSON que contenga tus grupos y entradas. Una
        vez cargado, podrás revisar su contenido y decidir si deseas aplicarlo.
      </p>

      {!jsonPreview && (
        <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto mb-6">
          {`{
  "grupo 1": [
    {
      "title": "Título del recurso",
      "url": "https://ejemplo.com",
      "note": "Descripción u observación",
      "preview": {
        "title": "Título para la vista previa",
        "description": "Descripción corta",
        "image": "https://ejemplo.com/imagen.png",
        "domain": "ejemplo.com"
      }
    }
  ]
}`}
        </pre>
      )}

      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="bg-gray-800 border border-gray-600 p-2 rounded text-sm mb-6"
      />

      {jsonPreview && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Vista previa:</h3>
          <pre className="bg-gray-900 p-4 rounded text-xs overflow-auto max-h-96 mb-4">
            {JSON.stringify(jsonPreview, null, 2)}
          </pre>

          <button
            onClick={handleApply}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Aplicar JSON en la App
          </button>
        </div>
      )}
    </div>
  )
}
