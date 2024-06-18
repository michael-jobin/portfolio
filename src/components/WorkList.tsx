import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CldPicture from './CldPicture'
import { RootState } from '../types'

const WorkList = () => {
  const { list, currentTag } = useSelector((state: RootState) => state.works)
  const filteredWorks = list?.filter((work) => work.tags.includes(currentTag))
  return (
    <div className="workList basic__grid">
      {filteredWorks?.map((work, index) => (
        <article key={index} className="workList__item" id={work.slug}>
          <Link to={`/works/${work.slug}`}>
            <CldPicture
              cl="workList__picture cover"
              id={`works/${work.slug}/thumbnail`}
              alt="work thumbnail"
              width={932}
              height={682}
            />
          </Link>
          {work.link ? (
            work.link.url && work.link.active ? (
              <a
                href={work.link.url}
                target="_blank"
                rel="noreferrer nofollow"
                className="basic__button"
              >
                Visit site
              </a>
            ) : (
              <span className="basic__button">Visit site</span>
            )
          ) : null}
        </article>
      ))}
    </div>
  )
}

export default WorkList
