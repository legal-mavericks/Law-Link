import Image from 'next/image'

export default function Home() {
  const rand = Math.random()
  return (
    <h1>
      {rand}
    </h1>
  )
}
