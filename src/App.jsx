import { useState } from "react"
import GroupList from "./components/GroupList"
import EntryList from "./components/EntryList"

export default function App() {
  const [activeGroup, setActiveGroup] = useState(null)

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Gestor de URLs</h1>
      {activeGroup ? (
        <EntryList group={activeGroup} goBack={() => setActiveGroup(null)} />
      ) : (
        <GroupList selectGroup={setActiveGroup} />
      )}
    </div>
  )
}
