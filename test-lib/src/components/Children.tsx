import { useToggle } from '@/hooks/useToggle'

export default function Children() {
  const { open, close, toggle, readIsOpen } = useToggle('test')

  const isOpen = readIsOpen('test')

  console.log('Children!!!')

  return (
    <div className="space-y-2">
      <div className="text-2xl font-bold">
        Children {isOpen ? 'Open 1' : 'Closed 1'}
      </div>
      <div className="space-y-4">
        <button onClick={() => open()}>Open</button>
        <button onClick={() => close()}>Close</button>
        <button onClick={() => toggle('test-2')}>Toggle</button>
      </div>
    </div>
  )
}
