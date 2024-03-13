import { Container } from './Container'
import { SimpleLayout } from './SimpleLayout'
import { Card } from './Card'

const items = [
  {
    name: 'Temp-Finder',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
  },
]

export default function SkillContainer() {
  return (
    <SimpleLayout title="Skills" intro="">
      <ul role="list" className="space-y-3">
        {items.map((items) => (
          <Card as="li" key={items.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card>{items.name}</Card>
            </h2>
            <Card.Description>{items.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"></p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
