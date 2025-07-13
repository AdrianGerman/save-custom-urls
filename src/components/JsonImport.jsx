/* eslint-disable no-unused-vars */
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
        localStorage.setItem("urlGroups", JSON.stringify(parsed))

        Swal.fire({
          title: "¡Importación exitosa!",
          text: "Tus grupos fueron cargados correctamente.",
          icon: "success",
          background: "#1f2937",
          color: "#fff"
        })
      } catch (error) {
        Swal.fire({
          title: "Error al importar",
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
    <div className="text-white max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-4">Importar JSON</h2>
      <p className="text-gray-400 mb-6">
        Puedes importar un archivo JSON con la siguiente estructura. Esto
        sobrescribirá tus grupos actuales en el almacenamiento local:
      </p>

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

      <input
        type="file"
        accept=".json"
        onChange={handleFileChange}
        className="bg-gray-800 border border-gray-600 p-2 rounded text-sm"
      />

      {jsonPreview && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Vista previa del JSON:</h3>
          <pre className="bg-gray-900 p-4 rounded text-xs overflow-auto max-h-96">
            {JSON.stringify(jsonPreview, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
