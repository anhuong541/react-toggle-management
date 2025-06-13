import Children from './Children'
import Children2 from './Children2'

export default function Parent() {
  console.log('Parent!!!')

  return (
    <div>
      <Children />
      <Children2 />
    </div>
  )
}
