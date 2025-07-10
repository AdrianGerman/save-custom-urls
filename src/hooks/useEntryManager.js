import { useState, useEffect } from "react"
import Swal from "sweetalert2"

const API_KEY = import.meta.env.VITE_API_KEY

export function useEntryManager(group, goBack) {
  const [entries, setEntries] = useState([])
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [note, setNote] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [newGroupName, setNewGroupName] = useState(group)
  const [editingIndex, setEditingIndex] = useState(null)

  useEffect(() => {
    const allGroups = JSON.parse(localStorage.getItem("urlGroups")) || {}
    setEntries(allGroups[group] || [])
    setNewGroupName(group)
  }, [group])

  const saveEntries = (newEntries) => {
    const allGroups = JSON.parse(localStorage.getItem("urlGroups")) || {}
    allGroups[group] = newEntries
    localStorage.setItem("urlGroups", JSON.stringify(allGroups))
    setEntries(newEntries)
  }

  const fetchPreview = async (url) => {
    try {
      const res = await fetch(
        `https://api.linkpreview.net/?key=${API_KEY}&q=${encodeURIComponent(
          url
        )}`
      )
      const data = await res.json()
      return {
        preview: {
          title: data.title,
          description: data.description,
          image: data.image,
          domain: new URL(data.url).hostname
        }
      }
    } catch {
      return { preview: null }
    }
  }

  const handleAddEntry = async () => {
    if (!title.trim() || !url.trim()) return

    const baseEntry = {
      title: title.trim(),
      url: url.trim(),
      note: note.trim()
    }

    const { preview } = await fetchPreview(baseEntry.url)
    const fullEntry = { ...baseEntry, preview }

    let updated
    if (editingIndex !== null) {
      updated = [...entries]
      updated[editingIndex] = fullEntry
    } else {
      updated = [...entries, fullEntry]
    }

    saveEntries(updated)
    setTitle("")
    setUrl("")
    setNote("")
    setModalOpen(false)
    setEditingIndex(null)
  }

  const handleEditEntry = (index) => {
    const entry = entries[index]
    setTitle(entry.title)
    setUrl(entry.url)
    setNote(entry.note)
    setEditingIndex(index)
    setModalOpen(true)
  }

  const handleDeleteEntry = (index) => {
    Swal.fire({
      title: "¿Eliminar esta entrada?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#555",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: "#1f2937",
      color: "#fff"
    }).then((result) => {
      if (result.isConfirmed) {
        const updated = entries.filter((_, i) => i !== index)
        saveEntries(updated)
      }
    })
  }

  const handleRenameGroup = () => {
    const trimmed = newGroupName.trim()
    if (!trimmed || trimmed === group) return

    const allGroups = JSON.parse(localStorage.getItem("urlGroups")) || {}
    if (allGroups[trimmed]) return

    allGroups[trimmed] = allGroups[group]
    delete allGroups[group]
    localStorage.setItem("urlGroups", JSON.stringify(allGroups))
    setSettingsOpen(false)
    goBack()
  }

  const handleDeleteGroup = async () => {
    const result = await Swal.fire({
      title: "¿Eliminar grupo?",
      text: `Esto eliminará el grupo "${group}" y todas sus URLs.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#555",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      background: "#1f2937",
      color: "#fff"
    })

    if (!result.isConfirmed) return

    const allGroups = JSON.parse(localStorage.getItem("urlGroups")) || {}
    delete allGroups[group]
    localStorage.setItem("urlGroups", JSON.stringify(allGroups))
    setSettingsOpen(false)
    goBack()
  }

  return {
    entries,
    title,
    url,
    note,
    modalOpen,
    settingsOpen,
    newGroupName,
    editingIndex,
    setTitle,
    setUrl,
    setNote,
    setModalOpen,
    setSettingsOpen,
    setNewGroupName,
    handleAddEntry,
    handleEditEntry,
    handleDeleteEntry,
    handleRenameGroup,
    handleDeleteGroup
  }
}
