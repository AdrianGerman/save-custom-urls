import { Routes, Route, useNavigate, useParams } from "react-router-dom"
import GroupList from "../components/GroupList/GroupList"
import EntryList from "../components/EntryList/EntryList"

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<GroupListWithNav />} />
      <Route path="/grupo/:group" element={<EntryListWithNav />} />
    </Routes>
  )
}

function GroupListWithNav() {
  const navigate = useNavigate()
  return <GroupList selectGroup={(group) => navigate(`/grupo/${group}`)} />
}

function EntryListWithNav() {
  const { group } = useParams()
  const navigate = useNavigate()
  return <EntryList group={group} goBack={() => navigate(-1)} />
}
