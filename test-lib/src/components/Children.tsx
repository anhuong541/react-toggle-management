import { useToggle } from '@/hooks/useToggle'

export default function Children() {
  const { open, close, toggle, readIsOpen } = useToggle('toggle-1')

  const isOpen = readIsOpen('toggle-1')

  console.log('Children!!!')

  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold">
        Children {isOpen ? 'Open 1' : 'Closed 1'}
      </div>
      <div className="space-y-4">
        <button onClick={() => open()}>Open</button>
        <button onClick={() => close()}>Close</button>
        <button onClick={() => toggle('toggle-1')}>Toggle</button>
        <button onClick={() => toggle('toggle-2')}>Toggle 2</button>
      </div>
    </div>
  )
}
