import { useLenis } from 'lenis/react'
import { useState, useRef } from 'react'

const buttonScrollTop = () => {
  const [show, setShow] = useState(false)
  const showRef = useRef(show)
  const trigger = 1000

  const lenis = useLenis(({ scroll }) => {
    if (scroll > trigger && !showRef.current) {
      setShow(true)
      showRef.current = true
    } else if (scroll <= trigger && showRef.current) {
      setShow(false)
      showRef.current = false
    }
  })

  const handleClick = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1, lock: true })
  }

  return (
    <button
      onClick={handleClick}
      area-label="scroll to the top of the page"
      className={`buttonScrollTop ${show ? 'show' : ''}`}
    >
      ↑
    </button>
  )
}

export default buttonScrollTop
