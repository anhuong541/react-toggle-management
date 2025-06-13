'use client'

import Parent from '../components/Parent'
import Wrapper from '../components/Wrapper'

export default function Home() {
  console.log('Home!!!')

  return (
    <Wrapper>
      <Parent />
    </Wrapper>
  )
}
