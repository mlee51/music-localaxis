import Image from 'next/image'
import { Nunito } from 'next/font/google'
import Player from './player'

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={`${nunito.className} absolute w-full lg:top-1/3 lg:left-1/3 lg:flex lg:flex-row lg:gap-4`}>
        <a
          href='https://afterimage.localaxis.co/'
          target='_blank'
          className='relative lg:w-[300px]'
        >
          <Image
            src="/afterimage_lg.jpg"
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            alt="afterimage cover art"
          />
        </a>
        <div className='flex flex-row-reverse mt-4 mr-4 lg:mt-0 lg:mr-0 lg:flex-row  gap-3 items-end leading-5'>
         <Player/>
          <a href='https://open.spotify.com/track/0pEyXNHk2CYTcqnyfhU4u4?si=ee0d9d9624e84686'
            target='_blank'
          >
            <Image
              className='pointer-events-none select-none -translate-y-0.5'
              src="/spotify.svg"
              width={14}
              height={14}
              alt="play"
            />
          </a>
          <div >afterimage</div>
            /
        <div>infinite backflip</div>
        </div>
      </div>
      <Image
        className='pointer-events-none select-none opacity-5 fixed bottom-0 right-0'
        src="/localaxis_logo.svg"
        width={100}
        height={100}
        alt="play"
      />
    </>
  )
}
