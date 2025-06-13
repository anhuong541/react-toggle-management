import { useToggle } from '@/hooks/useToggle'

export default function Children2() {
  const { isOpen } = useToggle('test-2')

  console.log('children2')

  return (
    <div>
      <div className="text-2xl font-bold">
        Children2 {isOpen ? 'Open 2' : 'Closed 2'}
      </div>
    </div>
  )
}
