import { useState } from "react"
import Swal from "sweetalert2"
import JsonExample from "./JsonExample"
import JsonPreview from "./JsonPreview"
import FileInput from "./FileInput"

export default function JsonImport() {
  const [jsonPreview, setJsonPreview] = useState(null)

  const handleFileLoaded = (parsed) => {
    setJsonPreview(parsed)
    Swal.fire({
      title: "JSON cargado",
      text: "Se ha leído el archivo correctamente. Revisa la vista previa.",
      icon: "info",
      background: "#1f2937",
      color: "#fff"
    })
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

      {!jsonPreview && <JsonExample />}

      <FileInput onFileLoaded={handleFileLoaded} />

      {jsonPreview && (
        <JsonPreview jsonData={jsonPreview} onApply={handleApply} />
      )}
    </div>
  )
}
