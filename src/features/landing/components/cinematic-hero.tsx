import { Pause, Play, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { BookingDialog } from '@/components/site/booking-dialog'
import { homeMedia } from '../data'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function CinematicHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [reducedMotion, setReducedMotion] = useState(prefersReducedMotion)
  const [videoFailed, setVideoFailed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = () => setReducedMotion(mediaQuery.matches)
    handleChange()
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  async function togglePlayback() {
    const video = videoRef.current
    if (!video) return
    if (isPlaying) {
      video.pause()
      setIsPlaying(false)
      return
    }
    await video.play()
    setIsPlaying(true)
  }

  const showVideo = !reducedMotion && !videoFailed

  return (
    <section className="cinematic-hero" aria-labelledby="home-hero-title">
      <img
        className="cinematic-poster"
        src={homeMedia.poster}
        alt="Travelers sharing breakfast in Coron"
        width="1800"
        height="1200"
        fetchPriority="high"
      />
      {showVideo && (
        <video
          ref={videoRef}
          className="cinematic-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={homeMedia.poster}
          onError={() => setVideoFailed(true)}
          aria-label="Moving scenes from Coron Island"
        >
          <source src={homeMedia.video} type="video/mp4" />
        </video>
      )}
      <div className="cinematic-shade" />
      <div className="cinematic-content">
        <p className="route-label">Coron, Palawan · purposeful island travel</p>
        <h1 id="home-hero-title">
          Join the <em>tribe.</em>
        </h1>
        <p className="hero-copy">
          Unforgettable group adventures for solo travelers and friends—made with care for the
          people and places that make Coron extraordinary.
        </p>
        <div className="hero-actions">
          <BookingDialog />
          <Link className="hero-secondary-link" to="/island-crash">
            Meet Island Crash <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="cinematic-meta">
        <span>
          <VolumeX /> Sound off
        </span>
        {showVideo && (
          <Button
            variant="ghost"
            size="icon"
            className="video-control"
            onClick={togglePlayback}
            aria-label={isPlaying ? 'Pause Coron video' : 'Play Coron video'}
            aria-pressed={!isPlaying}
          >
            {isPlaying ? <Pause /> : <Play />}
          </Button>
        )}
      </div>
    </section>
  )
}
