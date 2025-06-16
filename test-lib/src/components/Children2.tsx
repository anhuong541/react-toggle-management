import { useToggle } from '@/hooks/useToggle'

export default function Children2() {
  const { isOpen, toggle } = useToggle('toggle-2')

  console.log('children2', isOpen)

  return (
    <div>
      <div className="text-2xl font-bold">
        Children2 {isOpen ? 'Open 2' : 'Closed 2'}
      </div>
      <button onClick={() => toggle('toggle-1')}>Toggle</button>
    </div>
  )
}
