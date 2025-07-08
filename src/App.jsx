import { useState } from "react"
import GroupList from "./components/GroupList"
import EntryList from "./components/EntryList"
import Header from "./components/Header"

export default function App() {
  const [activeGroup, setActiveGroup] = useState(null)

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <main className="px-4 py-6">
        <div className="max-w-5xl mx-auto">
          {activeGroup ? (
            <EntryList
              group={activeGroup}
              goBack={() => setActiveGroup(null)}
            />
          ) : (
            <GroupList selectGroup={setActiveGroup} />
          )}
        </div>
      </main>
    </div>
  )
}
