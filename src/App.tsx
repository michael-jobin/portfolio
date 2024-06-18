import { useSelector, useDispatch } from 'react-redux'
import { fetchWorks } from './features/works'
import { useEffect } from 'react'
import { RootState } from './types'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Layout from './layout'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import '@fontsource-variable/noto-sans-jp'
import './styles/global.scss'

// router
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about/',
        element: <About />,
      },
      {
        path: 'works/:id',
        element: <Work />,
      },
    ],
  },
])

const App = () => {
  const dispatch = useDispatch()
  const { list } = useSelector((state: RootState) => state.works)
  const { language } = useSelector((state: RootState) => state.languages)

  useEffect(() => {
    if (!list) {
      dispatch(fetchWorks() as any)
    }
  }, [dispatch, list])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    const setVh = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    setVh()
    window.addEventListener('resize', setVh)
    return () => window.removeEventListener('resize', setVh)
  }, [])

  return <RouterProvider router={router} />
}

export default App
