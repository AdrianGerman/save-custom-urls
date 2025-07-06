import { useState, useEffect } from "react"

export const useGroupManager = () => {
  const [groups, setGroups] = useState([])
  const [newGroup, setNewGroup] = useState("")
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urlGroups")) || {}
    setGroups(Object.keys(stored))
  }, [])

  const handleCreateGroup = () => {
    const trimmed = newGroup.trim()
    if (!trimmed) return

    const current = JSON.parse(localStorage.getItem("urlGroups")) || {}
    if (current[trimmed]) return

    const updated = { ...current, [trimmed]: [] }
    localStorage.setItem("urlGroups", JSON.stringify(updated))
    setGroups(Object.keys(updated))
    setNewGroup("")
    setModalOpen(false)
  }

  return {
    groups,
    newGroup,
    modalOpen,
    setNewGroup,
    setModalOpen,
    handleCreateGroup
  }
}
