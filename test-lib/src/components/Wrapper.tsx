export default function Wrapper({ children }: { children: React.ReactNode }) {
  console.log('Wrapper!!!')

  return <div>{children}</div>
}
