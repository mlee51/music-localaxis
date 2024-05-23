'use client'
import Image from 'next/image';
import { useState, useRef } from 'react';

export default function Player() {
    const [playing, setPlaying] = useState(false);
    const audioUrl = '/afterimage.wav'; 
    const audio = useRef(typeof Audio != "undefined"?new Audio(audioUrl):null);

    const toggleAudio = () => {
        if (!playing) {
            audio.current?.play();
        } else {
            audio.current?.pause();
        }
        setPlaying(prev => !prev);
    };

    return (
        <button onClick={toggleAudio}>
            {playing ?
                <Image
                    className='pointer-events-none select-none '
                    src="/pause.svg"
                    width={18}
                    height={18}
                    alt="pause"
                /> :
                <Image
                    className='pointer-events-none select-none '
                    src="/play.svg"
                    width={18}
                    height={18}
                    alt="play"
                />}
        </button>
    );
}
