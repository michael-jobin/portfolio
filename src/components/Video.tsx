import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Picture from './Picture'
import type { VideoProps } from '../types'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../types'
import { setView } from '../features/views'

const Video: React.FC<VideoProps> = ({
  cl,
  slug,
  fileName,
  alt,
  format,
  width,
  height,
  noSp,
  hasMobileView,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [isImageVisible, setIsImageVisible] = useState(true)

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const mobileSuffix = isMobile ? '_sp' : ''

  const { view } = useSelector((state: RootState) => state.views)
  const dispatch = useDispatch()

  const toggleView = () => {
    const newView = view === 'pc' ? 'sp' : 'pc'
    dispatch(setView(newView))
  }

  const getVideoSource = () => {
    let videoFileName = fileName
    if (view === 'sp') {
      videoFileName += '_mobile'
    }
    videoFileName += mobileSuffix
    return `/assets/works/${slug}/${videoFileName}.mp4`
  }

  const checkVideoReady = (videoElement: HTMLVideoElement | null) => {
    if (videoElement && videoElement.readyState >= 3) {
      setIsVideoReady(true)
      if (isImageVisible) setIsImageVisible(false)
      videoElement.play()
    }
  }

  const loadAndCheckVideo = () => {
    const videoElement = videoRef.current
    if (videoElement) {
      setIsVideoReady(false)
      // setIsImageVisible(true)
      videoElement.load()
      const intervalId = setInterval(() => checkVideoReady(videoElement), 100)
      return () => clearInterval(intervalId)
    }
  }

  // initial render
  useEffect(() => {
    loadAndCheckVideo()
  }, [])

  // when view changes
  useEffect(() => {
    loadAndCheckVideo()
  }, [view, mobileSuffix])

  return (
    <div className="video">
      {hasMobileView && (
        <button className="basic__button" onClick={toggleView}>
          {view === 'pc' ? 'View Mobile' : 'View Desktop'}
        </button>
      )}
      {!isVideoReady && <p>Loading...</p>}
      <div style={{ opacity: isImageVisible ? 1 : 0 }}>
        <Picture
          cl={cl}
          src={`/assets/works/${slug}/${fileName}`}
          alt={alt}
          format={format}
          width={width}
          height={height}
          noSp={noSp}
        />
      </div>
      <video
        ref={videoRef}
        muted
        playsInline
        preload="none"
        loop
        style={{ opacity: isVideoReady ? 1 : 0 }}
      >
        <source src={getVideoSource()} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video
