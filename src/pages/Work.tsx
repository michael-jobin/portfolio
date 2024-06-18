import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../types'
import WorkDetails from '../sections/WorkDetails'
import WorkGallery from '../sections/WorkGallery'
import { useEffect } from 'react'

const Work = () => {
  const works = useSelector((state: RootState) => state.works)
  const { id } = useParams()
  const currentWork = works.list?.find((work) => work.slug === id)

  useEffect(() => {
    if (currentWork) localStorage.setItem('lastViewedWork', `#${currentWork.slug}`)
  }, [currentWork])
  return (
    <>
      {currentWork ? (
        <div className="work basic__page">
          <WorkDetails work={currentWork} />
          <WorkGallery work={currentWork} />
        </div>
      ) : (
        <p>Work not found</p>
      )}
    </>
  )
}

export default Work
