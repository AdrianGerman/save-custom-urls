export default function JsonExample() {
  return (
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
  )
}
