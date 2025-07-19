import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import GroupList from "../components/GroupList/GroupList"
import EntryList from "../components/EntryList/EntryList"
import JsonImport from "../components/JsonImport/JsonImport"
import { slugify, getGroupBySlug } from "../utils/slugify"

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<GroupListWrapper />} />
      <Route path="/grupo/:group" element={<EntryListWrapper />} />
      <Route path="/json" element={<JsonImport />} />
    </Routes>
  )
}

function GroupListWrapper() {
  const navigate = useNavigate()
  return (
    <GroupList selectGroup={(group) => navigate(`/grupo/${slugify(group)}`)} />
  )
}

function EntryListWrapper() {
  const { group } = useParams()
  const navigate = useNavigate()

  const originalGroup = getGroupBySlug(group)

  if (!originalGroup) {
    return <p className="text-center text-gray-400">Grupo no encontrado.</p>
  }

  return <EntryList group={originalGroup} goBack={() => navigate(-1)} />
}
