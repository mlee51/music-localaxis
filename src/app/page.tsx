import Image from 'next/image'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={nunito.className}>
      <h1 className='text-2xl m-1 fixed bottom-0 select-none'>music.localaxis</h1>
        <main className='flex min-h-screen flex-col items-center justify-between'>
          <div className='m-4'>
            <h1 className='text-4xl p-2 mb-1 font-extrabold pointer-events-none select-none'>afterimage</h1>
            <Image
              className='neu-shadow pointer-events-none select-none'
              src="/afterimage_low.jpg"
              width={500}
              height={500}
              alt="afterimage cover art"
            />
            <div className='flex flex-row justify-between mt-6 align-st '>
              <div className='p-2 neu-shadow pointer-events-none select-none'>infinite backflip</div>
            </div>
            <div className='flex flex-row justify-end mt-3'>
              <a
                href='https://afterimage.localaxis.co/'
                target='_blank'
                className='neu-shadow p-2 mr-2'>Web</a>
              <a href='https://open.spotify.com/track/0pEyXNHk2CYTcqnyfhU4u4?si=ee0d9d9624e84686'
                target='_blank'
                className='p-2 neu-shadow-spotify'>Spotify</a>
            </div>
          </div>
        </main>
    </div>
  )
}
