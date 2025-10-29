'use client'

import { useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} src="/ambient-music.mp3" autoPlay loop />
      <button
        onClick={togglePlay}
        className="p-3 bg-[rgb(var(--primary))] rounded-full shadow-lg text-[rgb(var(--primary-foreground))] hover:bg-[rgb(var(--primary))] hover:opacity-80 transition-opacity"
      >
        {isPlaying ? <Volume2 /> : <VolumeX />}
      </button>
    </div>
  )
}