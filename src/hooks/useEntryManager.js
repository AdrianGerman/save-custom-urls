import { useState, useEffect } from "react"
import Swal from "sweetalert2"

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

  const handleAddEntry = () => {
    if (!title.trim() || !url.trim()) return

    const newEntry = {
      title: title.trim(),
      url: url.trim(),
      note: note.trim()
    }

    let updated
    if (editingIndex !== null) {
      updated = [...entries]
      updated[editingIndex] = newEntry
    } else {
      updated = [...entries, newEntry]
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
