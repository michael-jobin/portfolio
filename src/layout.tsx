import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './sections/Header'
import { useSelector } from 'react-redux'
import { RootState } from './types'
import { ReactLenis, useLenis } from 'lenis/react'
import Footer from './sections/Footer'
import ButtonScrollTop from './components/ButtonScrollTop'
import Menu from './components/Menu'

const Layout = () => {
  const { language } = useSelector((state: RootState) => state.languages)

  const location = useLocation()
  const previousLocation = useRef(location)

  const lenis = useLenis()
  //   const onScroll = (lenis: any) => {console.log(lenis)}
  // const lenis = useLenis(onScroll, [location])

  useEffect(() => {
    const isComingFromWorkPage = previousLocation.current.pathname.startsWith('/works/')
    previousLocation.current = location

    const lastViewedWork = localStorage.getItem('lastViewedWork')
    if (lastViewedWork && isComingFromWorkPage) {
      const thumbnail = document.querySelector(lastViewedWork)
      const header = document.querySelector('.header') as HTMLElement
      const offset = -(header?.offsetHeight + 9) || 0
      if (thumbnail) {
        setTimeout(() => {
          lenis?.scrollTo(lastViewedWork, { duration: 1.5, offset })
        }, 400)
      }
    } else {
      lenis?.scrollTo(0, { immediate: true })
    }
  }, [location, lenis])

  return (
    <div className={language === 'ja' ? 'page-wrapper ja' : 'page-wrapper en'}>
      <ReactLenis root>
        <Menu />
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <ButtonScrollTop />
        <Footer />
      </ReactLenis>
    </div>
  )
}

export default Layout
