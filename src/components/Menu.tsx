import { Link, useNavigate } from 'react-router-dom'
import TagSelect from './TagSelect'
import LangSelect from './LangSelect'
import { useState, useRef, useEffect } from 'react'
import { useLenis } from 'lenis/react'

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMenuOpenRef = useRef(isMenuOpen)
  const navigate = useNavigate()
  const lenis = useLenis()

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen
  }, [isMenuOpen])

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpenRef.current) {
      lenis?.start()
    } else {
      lenis?.stop()
    }
  }

  const handleTagChangeAndCloseMenu = () =>
    //(tag: string)
    {
      navigate('/')
      setIsMenuOpen(false)
      lenis?.start()
    }

  return (
    <>
      <button onClick={handleMenuClick} className="menu__button">
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <aside className={`menu ${isMenuOpen ? 'is-open' : ''}`} data-lenis-prevent>
        <div className="menu__inner">
          <nav className="menu__nav">
            <div className="menu__container basic__grid">
              <div className="menu__col1">
                <TagSelect isInsideMenu={true} onTagChange={handleTagChangeAndCloseMenu} />
              </div>
              <div className="menu__col2">
                <div className="menu__imageArea"></div>
              </div>
            </div>
            <div className="menu__container basic__grid">
              <div className="menu__col1">
                <ul className="menu__list">
                  <li>
                    <Link to="/about" onClick={handleMenuClick}>
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/michael__jbn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <LangSelect />
                  </li>
                </ul>
              </div>
              <div className="menu__col2">
                <div className="menu__imageArea"></div>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Menu
