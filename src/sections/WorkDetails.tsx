import type { WorkDetailsProps } from '../types'
import { useSelector } from 'react-redux'
import { RootState } from '../types'

const WorkDetails: React.FC<WorkDetailsProps> = (props) => {
  const { work } = props
  const { language } = useSelector((state: RootState) => state.languages)

  return (
    <section className="workDetails basic__grid">
      <div className="workDetails__col1">
        <p className="workDetails-year">{work.year}</p>
        <p className="workDetails-role">
          {language === 'ja' ? <em>{work.roleJa}</em> : work.roleEn}
        </p>
      </div>
      <div className="workDetails__col2">
        <p className="workDetails__description pre-line">
          {language === 'ja' ? <em>{work.descriptionJa}</em> : work.descriptionEn}
        </p>
        {work.link ? (
          work.link.url && work.link.active ? (
            <p className="workDetails__link">
              <a href={work.link.url} target="_blank" rel="noreferrer nofollow">
                {work.link.text}
              </a>
            </p>
          ) : (
            <p className="workDetails__link">
              <span>{work.link.text}</span>
            </p>
          )
        ) : null}
      </div>
    </section>
  )
}

export default WorkDetails
