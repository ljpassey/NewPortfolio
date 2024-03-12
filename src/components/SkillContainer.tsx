const items = [
    { id: 1 },
    { id: 1 },
    { id: 1 },
    { id: 1 },
    // More items...
]

export default function SkillContainer() {
  return (
    <ul role="list" className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="dark:bg-zinc-800 overflow-hidden bg-zinc-100 px-4 py-4 shadow sm:rounded-md sm:px-6"
        >
          {/* Your content */}
        </li>
      ))}
    </ul>
  )
}
