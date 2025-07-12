import { Routes, Route } from "react-router-dom"
import GroupList from "../components/GroupList/GroupList"
import EntryList from "../components/EntryList/EntryList"
import AboutMe from "../components/AboutMe"

export function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<GroupListWrapper />} />
      <Route path="/grupo/:group" element={<EntryListWrapper />} />
      <Route path="/sobre-mi" element={<AboutMe />} />
    </Routes>
  )
}

import { useNavigate, useParams } from "react-router-dom"

function GroupListWrapper() {
  const navigate = useNavigate()
  return <GroupList selectGroup={(group) => navigate(`/grupo/${group}`)} />
}

function EntryListWrapper() {
  const { group } = useParams()
  const navigate = useNavigate()
  return <EntryList group={group} goBack={() => navigate(-1)} />
}
