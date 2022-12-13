import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <main className='main'>
          <h1>Next-Quiz</h1>
          <p>Um quiz sobre Javascript</p>
          <Image src={'/images/Quizz.png'} width='500' height='500' className='image'></Image>
          <Link href='/playing/0'>
          <button className='button'>Start</button>
          </Link>
      </main>
    </div>
  )
}
