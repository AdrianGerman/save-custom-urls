export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function getGroupBySlug(slug) {
  const groups = JSON.parse(localStorage.getItem("urlGroups")) || {}
  return Object.keys(groups).find((groupName) => slugify(groupName) === slug)
}
